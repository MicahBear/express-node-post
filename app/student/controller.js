const pool = require ('../student/db')


const getStudents = (req,res)=>{
    pool.query("SELECT * FROM students",(error, results)=>{
        if(error) throw error
        else res.status(200).json(results.rows)

    })
}

module.exports = {
    getStudents,
}