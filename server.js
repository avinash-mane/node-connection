
const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors")
app.use(cors())

app.post("/user", (req, res) => {
    console.log(req.body)
    res.send({ name: "a" })

})
app.get("/user", (req, res) => {
    res.send("get")
})
app.listen(3210, () => console.log("server started"))

//api call
// axios.get("http://localhost:3210/user").then(() => { })
// axios.post("http://localhost:3210/user", { data: "avinash" }).then(() => { })

//fordb connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("create database db")
  console.log("Connected!");
});

//if we write conection on seprate file
// module.exports=con;
