import app from "./src/app.js";
import connection from "./src/db/db.js";




app.listen(3000,()=>{
    connection()
    console.log("Server is running on http://localhost:3000")
})
