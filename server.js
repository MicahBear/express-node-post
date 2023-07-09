const express = require('express')

const app = express()
const studentRoutes = require('./app/student/routes')
const port = 3000 ;

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Server is working for test')
})


app.use('/api', studentRoutes)

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})