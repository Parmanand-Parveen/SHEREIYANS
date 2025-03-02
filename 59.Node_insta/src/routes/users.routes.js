import express from "express"
import isLoggedIn from "../middleware/isLoggedIn.js"
import { showProfilePage } from "../controllers/users.controller.js"
const router = express.Router()




router.get("/profile",isLoggedIn, showProfilePage )







export default router