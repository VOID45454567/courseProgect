import pool from "../config/dbConnect.js";
class ResumeRepository {
  async createResume(data, user_id) {
    const { preferedVacancy, preferedSalary, preferedCurrency, about } = data;
    try {
      const newResume = await pool.query(
        "INSERT INTO resumes (preferedVacancy, preferedSalary, preferedCurrency, about, user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [preferedVacancy, preferedSalary, preferedCurrency, about, user_id]
      );
      // console.log(newResume);

      return newResume.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const resumes = await pool.query("SELECT * FROM resumes");
      console.log(resumes.rows);

      return resumes.rows;
    } catch (error) {
      return error;
    }
  }
  async getByUserId(id) {
    try {
      const resume = await pool.query(
        "SELECT * FROM resumes WHERE user_id = $1",
        [parseInt(id)]
      );
      // console.log(resume.rows);

      return resume.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async deleteResume(id) {
    const deletedResume = await pool.query(
      "DELETE FROM resumes WHERE user_id = $1",
      [id]
    );
    return deletedResume;
  }
  async addResponse(id_employer, id_resume) {
    try {
      const getResponse = await pool.query(
        "SELECT responses FROM resumes WHERE id = $1",
        [id_resume]
      );

      let responses = [];
      if (getResponse.rows.length > 0 && getResponse.rows[0].responses) {
        responses = getResponse.rows[0].responses;
      }

      if (!responses.includes(id_employer)) {
        responses.push(id_employer);

        await pool.query("UPDATE resumes SET responses = $1 WHERE id = $2", [
          responses,
          id_resume,
        ]);

        return { success: true, message: "Отклик успешно добавлен" };
      } else {
        return { success: false, message: "Пользователь уже оставлял отклик" };
      }
    } catch (error) {
      console.error("Ошибка при добавлении отклика:", error);
      throw error;
    }
  }
  ы;
  async udapteResume(user_id, data) {
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
        text: `UPDATE resumes 
             SET ${updates.join(", ")} 
             WHERE user_id = $${paramIndex} 
             RETURNING *`,
        values: values,
      };

      const result = await pool.query(query);
      const updatedresume = result.rows[0];
      return updatedresume;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error(`Database operation failed: ${error.message}`);
    }
  }
}
export default new ResumeRepository();
