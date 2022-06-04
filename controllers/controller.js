var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zahra5596864625",
    database: "studentsinfo"
  });
  
  con.connect((err) => {
    if (err) throw err;
    else 
    console.log("Connected to database!");
  });


  const display = (req,res) => {
    var sql = "select * from students;"
    con.query(sql,(err,result) => {
      res.send(result) 
    })     
}

const search = (req,res) => {
    let id = req.params.id
    var sql = "SELECT * FROM students WHERE id = "+id
    con.query(sql,(err,result) => {
        res.send(result)
    })
}

const create = (req,res) => {
  console.log(req.data)
  var sql = 'INSERT INTO students VALUES ?';
  var values = [[,req.body.name,req.body.age,req.body.phone,req.body.score]]
  con.query(sql,[values],(err,result) =>{
  if(err) throw err
  else
  console.log('data inserted')
  console.log(req)
  })
  res.send('result')
}

const remove = (req,res) => {
    const id = req.body.id
    console.log(id)
    var sql = "DELETE FROM students WHERE id = "+ req.params.id 
    con.query(sql,(err,result) => {
      if(err) throw err
   else
    res.send('user deleted')
    })
}

const update = (req,res) => {
    var id = req.body.id
    var value = [req.body.name,req.body.age,req.body.phone,req.body.score]
    var sql = "UPDATE students SET name = ?, age = ?,phone = ?, score = ? WHERE id = "+id
    con.query(sql,value,(err,result) => {
      if(err) throw err
      res.send(result)
    })
}
  module.exports ={
   create,  
   remove,
   update, 
   display,
   search,
}