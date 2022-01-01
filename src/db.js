const {HOST,USER,PASS,DB,PORT} = process.env

async function connect() {
    if (global.connection && global.connection !== 'disconnected') { return global.connection }
    const mysql = require("mysql2/promise")
    const connection = mysql.createConnection("mysql://"+USER+":"+PASS+"@"+HOST+":"+PORT+"/"+DB+"")
    console.log("Conectado ao banco de dados")
    global.connection = connection
    return connection
}

connect()


async function userAuth(user, password) {
    const conn = await connect()
    const sql = "SELECT id FROM user WHERE user = ? AND pass = ?"
    const where = [user, password]
    
    const [rows] = await conn.query(sql, where)
    const [resultado] = rows
    if (resultado !== undefined && resultado.id) {
        return 1
    } else {
        return 0
    }
}



module.exports = {  userAuth }