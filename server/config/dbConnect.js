import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  database: "course_progect",
  password: "19392684Eb",
  port: 5432,
  host: "localhost",
});
export default pool;
