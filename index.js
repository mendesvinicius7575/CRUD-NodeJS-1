

const ola =  {n: "roebrson"}
    

async function enviar(ola2){

    let name = "anderson"

    
    const db = require("./db");

    console.log("INSERT")
    await db.insertCustomer({nome: ola2.n, idade: 18, uf: "SP"})

    console.log('UPDATE')
    await db.updateCustomer(6, {id: 5, nome: "josef", idade: 55, uf: "RG"})

    //await db.deleteCustomer(5)

    console.log("SELECT")
    const clientes = await db.selectCustomer();
    console.log(clientes)

    console.log(name)

};

enviar(ola)

