
const express = require('express')
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('./config');
const { v4: uuidv4 } = require("uuid");

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json());
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.get('/contacts', (req,res)=>{
    const sql = `SELECT * FROM contacts`;

  db.all(sql, [], (err, rows) => {
    if (err) {
       return  res.status(200).json({err , isError: true, isSuccess:false })
    }
    return res.status(200).json({contacts: rows || [] , mgs: "success", isSuccess: true })
  });
})
app.post('/contact', (req,res)=>{
  const v4options = {
    random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
        0x67, 0x1c, 0x58, 0x36,
    ],
  };
  const id = uuidv4(v4options);
  const {first_name, last_name, address,phone, email, status}= req.body;
  const sql = `INSERT INTO  contacts (id, fisrt_name, last_name, address,mobile, email, status ) VALUES (?,?, ?, ?,?,?,?)`;
  const values = [id ,first_name, last_name, address,phone, email, status]; // Replace with your actual values
  
  db.run(sql, values, function(err) {
    if (err) {
      return res.status(500).json(err.message);
    } else {
      return res.status(200).json({"msg":`Row inserted with ID: ${this.lastID}` , isSuccess: true, isError:false});
    }
  });
})
app.listen(8001, ()=>{
    console.log(`port listing on http://localhost:8001`);
})