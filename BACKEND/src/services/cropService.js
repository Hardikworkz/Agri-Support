const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../db/crop_advisory_fixed.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Failed to connect to the database:", err.message);
  } else {
    console.log("✅ Connected to the SQLite database!");
  }
});

const getCropSuggestions = (city, soil) => {
  return new Promise((resolve, reject) => {
    console.log("🔍 Fetching crops for soil:", soil);
    const query = `
      SELECT name, advice 
      FROM crops 
      WHERE soil_type_id = (
        SELECT id FROM soil_types WHERE LOWER(name) = ?
      )
    `;

    db.all(query, [soil.toLowerCase()], (err, rows) => {
      if (err) {
        console.error("❌ DB query failed:", err.message);
        return reject(err);
      }
      console.log("✅ Query results:", rows);
      resolve(rows);
    });
  });
};

module.exports = getCropSuggestions;
