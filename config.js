const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_footwear_app'
})

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('mysql connected...')
})

module.exports = con;

// db.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM tbl_users", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });