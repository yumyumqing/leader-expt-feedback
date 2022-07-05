// import low from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';
//
// const adapter = new FileSync('db.json');
// const db = low(adapter);
//
// // Write Todos as default
// db.defaults({ feedback: [] }).write();
//
// export default lowdb;

import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)
// If file.json doesn't exist, db.data will be null
// Set default data
db.data = db.data || { feedback: [] } // Node < v15.x
// db.data ||= { posts: [] }             // Node >= 15.x
export default db