const sqlite3 = require('sqlite3').verbose();
const path =  require('path');
const dbFilePath = path.join(__dirname, "mydb.db");
const db = new sqlite3.Database(dbFilePath);

const createTableQuery = `CREATE TABLE  if not exists Contacts (
    ID INT AUTO_INCREMENT ,
    fisrt_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    mobile INT NOT NULL,
    email VARCHAR(250) NOT NULL,
    address CHAR(50), 
    status BOOLEAN NOT NULL,
    created datetime default current_timestamp,
    PRIMARY KEY(id)
     )`;

// this is a top-level await 
db.serialize(() => { db.run(createTableQuery);});  
module.exports= db;




