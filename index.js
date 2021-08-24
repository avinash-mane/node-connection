const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors")
const db = require("./config");
const { query } = require("./config");
app.use(cors())

app.post("/user", (req, res) => {
  let { id, name, phone } = req.body;
  db.query(`insert into user values(${id},"${name}",${phone})`, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

app.get("/user", (req, res) => {
  let { name, limit,offset } = req.query
  console.log(req.query)
  if (name) {
    db.query(`select * from user where name like '%${name}%' limit ${offset},${limit}`, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  } else {
    db.query(`select * from user`, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  }
})

app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  db.query(`select * from user where id=${id}`, (err, result) => {
    if (err) throw err
    if (result.length)
      res.send(result)
    else
      res.status(404).send("no user found")
  })
})

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  db.query(`delete from user where id=${id}`, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

app.put("/user/:id", (req, res) => {
  let { id } = req.params;
  let { name, phone } = req.body;
  db.query(`update user set name="${name}" where id=${id}`, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

app.listen(3210, () => console.log("server started"))

//api call
// axios.get("http://localhost:3210/user").then(() => { })
// axios.post("http://localhost:3210/user", { data: "avinash" }).then(() => { })
