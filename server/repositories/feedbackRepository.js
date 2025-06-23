import pool from "../config/dbConnect";

class FeedbackRepository {
  async addFeedback(data) {
    try {
      const newFeedback = await pool.query(
        "INSERT INTO feedback (text, id_user) VALUES ($1, $2)",
        [data.text, data, userId]
      );
      return newFeedback.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getFeedback() {
    try {
      const allFeedback = await pool.query("SELECT * FROM feedback");
      return allFeedback.rows;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      try {
        const one = await pool.query("SELECT * FROM feedback WHERE id = $1", [
          id,
        ]);
        return one.rows[0];
      } catch (error) {}
    } catch (error) {
      console.log(error);
    }
  }
}
export default new FeedbackRepository();
