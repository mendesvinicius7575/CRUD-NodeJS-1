
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection("mysql://root:batata303030@localhost:3306/crud")

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

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id]
    await conn.query(sql, values)
}

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM clientes WHERE id=?;';
    return await conn.query(sql, [id])
}

module.exports = {selectCustomer, insertCustomer, updateCustomer, deleteCustomer}