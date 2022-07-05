import { join, dirname } from "path";
import { LowSync, JSONFileSync } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const fileDB = join(__dirname, "db.json");
const adapterDB = new JSONFileSync(fileDB);
const db = new LowSync(adapterDB);
db.read();

// If file.json doesn't exist, db.data will be null
// Set default data
db.data = db.data || { feedback: [] }; // Node < v15.x
// db.data ||= { posts: [] }             // Node >= 15.x

export default db;
