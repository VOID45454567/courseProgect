import pool from "../config/dbConnect.js";
class vacancyRepository {
  async createVacancy(data) {
    const {
      name,
      salary,
      currency,
      experience,
      work_format,
      city,
      description,
      required_skills,
      id_user,
      created_at,
    } = data;
    const query =
      "INSERT INTO vacances (name, salary, currency, experience, work_format, city, description, required_skills, id_user, created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING*";
    try {
      const newVacancy = await pool.query(query, [
        name,
        salary,
        currency,
        experience,
        work_format,
        city,
        description,
        required_skills,
        id_user,
        created_at,
      ]);
      // console.log(newVacancy);
      return newVacancy;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteVacancy(id) {
    try {
      const deletedVacancy = await pool.query(
        "DELETE FROM vacances WHERE id = $1",
        [id]
      );
      return deletedVacancy;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllUserVacances(idUser) {
    try {
      const vacances = await pool.query(
        "SELECT * FROM vacances WHERE id_user = $1",
        [idUser]
      );
      return vacances.rows;
    } catch (error) {
      console.log(error);
    }
  }
  // async deleteAllUserVacances(idUser) {
  //   try {
  //     const deletedVacances = await pool.query(
  //       "DELETE FROM vacancy WHERE user_id = $1",
  //       idUser
  //     );
  //        return deletedVacances
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async getOne(id) {
    try {
      const vacancy = await pool.query("SELECT * FROM vacances WHERE id = $1", [
        id,
      ]);
      return vacancy.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const vacances = await pool.query("SELECT * FROM vacances");
      return vacances.rows;
    } catch (error) {
      console.log(error);
    }
  }
  async addResponse(id_searcher, id_vacancy) {
    console.log(id_searcher, id_vacancy);

    try {
      const getResponse = await pool.query(
        "SELECT responces FROM vacances WHERE id = $1",
        [id_vacancy]
      );

      const responces = getResponse.rows[0].responces;
      console.log(responces);

      if (responces.includes(id_searcher)) {
        try {
          await pool.query(
            "UPDATE vacances SET responces = array_remove(responces, $1) WHERE id = $2",
            [id_searcher, id_vacancy]
          );
          return { message: "Отклик удален" };
        } catch (error) {
          console.log(error);
        }
      } else {
        responces.push(id_searcher);
        try {
          await pool.query("UPDATE vacances SET responces = $1 WHERE id = $2", [
            responces,
            id_vacancy,
          ]);
          return { message: "Отклик добавлен" };
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.error("Ошибка при добавлении отклика:", error);
      throw error;
    }
  }

  async updateVacancy(id, data) {
    try {
      const updates = [];
      const values = [];
      let paramIndex = 1;

      for (const [key, value] of Object.entries(data)) {
        if (["id"].includes(key)) continue;

        updates.push(`${key} = $${paramIndex}`);
        values.push(value);
        paramIndex++;
      }

      if (updates.length === 0) {
        throw new Error("Нечего обновлять");
      }

      values.push(id);

      const query = {
        text: `UPDATE vacances 
             SET ${updates.join(", ")} 
             WHERE id = $${paramIndex} 
             RETURNING *`,
        values: values,
      };

      const result = await pool.query(query);
      const updatedVacancy = result.rows[0];
      return updatedVacancy;
    } catch (error) {
      console.error("Ошибка обновления пользователя:", error);
      throw new Error(`Ошибка в бд: ${error.message}`);
    }
  }
  async getMyResponses(id) {
    try {
      const getMyVacancesWithResponses = await pool.query(
        `SELECT v.id, v.name, v.responces 
       FROM vacances v 
       WHERE v.id_user = $1 AND cardinality(v.responces) > 0`,
        [id]
      );

      const vacanciesWithResponses = getMyVacancesWithResponses.rows;

      if (!vacanciesWithResponses.length) {
        return [];
      }

      const allRespondersIds = vacanciesWithResponses
        .flatMap((vacancy) => vacancy.responces)
        .filter((id, index, self) => self.indexOf(id) === index);

      const usersResult = await pool.query(
        `SELECT id, name, surname, phone_number as phone, email 
       FROM users 
       WHERE id = ANY($1::int[])`,
        [allRespondersIds]
      );

      const usersMap = usersResult.rows.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      const result = vacanciesWithResponses.map((vacancy) => ({
        id: vacancy.id,
        name: vacancy.name,
        responses: vacancy.responces
          .filter((userId) => usersMap[userId])
          .map((userId) => usersMap[userId]),
      }));

      return result;
    } catch (error) {
      console.error("Error in getMyResponses:", error);
      throw error;
    }
  }
}
export default new vacancyRepository();
