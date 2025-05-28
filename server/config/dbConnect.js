import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    database: 'test',
    password: '19392684Eb',
    port: 5432,
    host: 'localhost'
})
export default pool