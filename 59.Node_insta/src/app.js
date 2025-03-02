import express from "express"
import "dotenv/config"
import authRoute from "./routes/auth.routes.js"
import usersRoute from "./routes/users.routes.js"
import postRoute from "./routes/post.routes.js"
import cookieparse from "cookie-parser"

const app = express()
app.use(cookieparse())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/auth",authRoute)
app.use("/user",usersRoute)
app.use("/post",postRoute)

export default app