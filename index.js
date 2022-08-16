

    

async function deletar(id){

    const db = require("./db");

    //console.log("INSERT")
    //await db.insertCustomer({nome: ola2.n, idade: 18, uf: "SP"})

    //console.log('UPDATE')
    //await db.updateCustomer(6, {id: 5, nome: "josef", idade: 55, uf: "RG"})

    await db.deleteCustomer(id)

    console.log("SELECT")
    const clientes = await db.selectCustomer();


};

    
    deletar(numDel)
    
