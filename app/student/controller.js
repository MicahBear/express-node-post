const pool = require ('../student/db')

const getStudents = (req,res)=>{
    pool.query("SELECT * FROM students",(error, results)=>{
        if(error) throw error
        else res.status(200).json(results.rows)

    })
}

// const putStudents = (req,res)=>{

//     const val=req.body;
    
//     pool.query(`insert into students(name,email,age,dob) values('${val.name}','${val.email}',${val.age},'${val.dob}')`,(error, results)=>{
//         if(!error){
//             res.send('Insertion was successful')
//         }
//         else{ console.log(err.message) }
//     })
// }

module.exports = {
    getStudents,
    // putStudents,
}