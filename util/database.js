const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test11m',
    password:'#@Dharm007'

})
module.exports=pool.promise();