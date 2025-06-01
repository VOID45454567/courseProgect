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
    // console.log(data);
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
        idUser
      );
      return vacances;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAllUserVacances(idUser) {
    try {
      const deletedVacances = await pool.query(
        "DELETE FROM vacancy WHERE user_id = $1",
        idUser
      );
      //   return deletedVacances
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const vacancy = await pool.query(
        "SELECT * FROM vacances WHERE id = $1",
        id
      );
      return vacancy;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const vacances = await pool.query("SELECT * FROM vacances");
      return vacances.rows[0];
    } catch (error) {
      console.log(error);
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
        throw new Error("No valid fields to update");
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
      console.error("Error updating user:", error);
      throw new Error(`Database operation failed: ${error.message}`);
    }
  }
}
export default new vacancyRepository();
