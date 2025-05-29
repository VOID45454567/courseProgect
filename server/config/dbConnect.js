import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  database: "course-progect",
  password: "19392684Eb",
  port: 3000,
  host: "localhost",
});
export default pool;
