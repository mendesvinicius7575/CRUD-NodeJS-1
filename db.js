
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection("mysql://root:pokedx@localhost:3306/crud")

    console.log("Conectou");

    return connection;
}


async function selectCustomer(){
    const conn = await connect();
    const rows =  conn.query('SELECT * FROM clientes;')
    return await rows;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
    const values = [customer.nome, customer.idade, customer.uf];
    await conn.query(sql, values)
}

module.exports = {selectCustomer, insertCustomer}