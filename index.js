(async () =>{

    
    const db = require("./db");

    

    //console.log("INSERT")
    //const inserir = await db.insertCustomer({nome: "Maria", idade: 18, uf: "SP"})

    console.log('UPDATE')
    const upd = await db.updateCustomer(4, {nome: "josef", idade: 55, uf: "RG"})

    console.log("SELECT")
    const clientes = await db.selectCustomer();
    console.log(clientes)

})();