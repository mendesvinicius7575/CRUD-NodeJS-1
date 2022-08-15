(async () =>{

    
    const db = require("./db");

    console.log("SELECT")
    const clientes = await db.selectCustomer();
    console.log(clientes)

    console.log("INSERT")
    const inserir = await db.insertCustomer({nome: "Maria", idade: 18, uf: "SP"})

})();