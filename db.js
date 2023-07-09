const {Pool} = require('pg')

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password: "102712",
    port:5432,
})

module.exports = pool;