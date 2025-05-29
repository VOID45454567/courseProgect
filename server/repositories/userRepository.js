import pool from "../config/dbConnect.js";
import bcrypt from "bcrypt";
import jwtConfig from "../config/jwt.js";
class UserRepository {
  async createUser(userData) {
    try {
      const { name, surname, midname, role, email, password } = userData;
      const existingUser = await pool.query(
        "SELECT id FROM users WHERE email = $1",
        [email]
      );

      if (existingUser.rows.length > 0) {
        return {
          succsess: false,
          error: "email is already exist",
        };
      }
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const request = await pool.query(
        "INSERT INTO users (name, surname, midname, role, email, password) values($1, $2, $3, $4, $5, $6) RETURNING*",
        [name, surname, midname, role, email, passwordHash]
      );
      console.log(request.rows[0]);

      const token = jwtConfig.createToken({
        id: request.rows[0].id,
        name,
        surname,
        midname,
        role,
        email,
        passwordHash,
      });
      return { user: request.rows[0], token: token };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getUserByEmail(email) {
    const request = await pool.query("Select * from users where email = $1", [
      email,
    ]);
    return request.rows[0];
  }
  async getUserByID(id) {
    const request = await pool.query("Select * from users where id = $1", [id]);
    return request.rows[0];
  }
  async getAll() {
    const request = await pool.query("select * from users");
    return request.rows[0];
  }
  async deleteUser(id) {
    const request = await pool.query("delete from users where id = $1", [id]);
    return request.rows[0];
  }
  async updateUser(id, data) {
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
        text: `UPDATE users 
             SET ${updates.join(", ")} 
             WHERE id = $${paramIndex} 
             RETURNING *`,
        values: values,
      };

      const result = await pool.query(query);
      const user = result.rows[0];
      const token = jwtConfig.createToken(user);
      return {
        user: user,
        newToken: token,
      };
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error(`Database operation failed: ${error.message}`);
    }
  }
}
export default new UserRepository();
