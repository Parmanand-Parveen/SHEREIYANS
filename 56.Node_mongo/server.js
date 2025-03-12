const app = require("./src/app")
const connect = require("./src/database/db")


connect()
app.listen(3000,()=>{
    console.log("Server statred at port 3000")
})