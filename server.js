const express = require('express')
const pool = require ('./app/student/db')
const bodyParser = require("body-parser");


const app = express()
const studentRoutes = require('./app/student/routes')
const port = 3000 ;
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send('Server is working for test')
})
app.post('/', (req, res)=>{
    const val=req.body;
    
    pool.query(`insert into students(name,email,age,dob) values('${val.name}','${val.email}',${val.age},'${val.dob}')`,(error, results)=>{
        if(!error){
            res.send('Insertion was successful')
            alert("insert success")
        }
        else{ console.log(error.message) }
    })
})

app.use('/api', studentRoutes)

app.listen(port, function(){
    console.log(`server is running on port: ${port}`)
})