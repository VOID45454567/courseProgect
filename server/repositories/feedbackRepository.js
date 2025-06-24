import pool from "../config/dbConnect.js";

class FeedbackRepository {
  async addFeedback(data) {
    try {
      const newFeedback = await pool.query(
        "INSERT INTO feedback (feedback_text, id_user) VALUES ($1, $2)",
        [data.message, data.userId]
      );
      return newFeedback.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  async getFeedback() {
    try {
      const query = `
      SELECT 
        f.*,
        u.name,
        u.surname
      FROM feedback f
      JOIN users u ON f.id_user = u.id
      ORDER BY f.created_at DESC
    `;
      const allFeedback = await pool.query(query);
      return allFeedback.rows.map((feedback) => ({
        ...feedback,
        user_name: `${feedback.first_name} ${feedback.last_name}`,
      }));
    } catch (error) {
      console.error("Error fetching feedback:", error);
      throw error;
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
