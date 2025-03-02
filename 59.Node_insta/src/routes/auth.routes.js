import express from "express"
import { getLoginPage, getRegisterPage, loginUser, logout, registerUser } from "../controllers/auth.controller.js"

const router = express.Router()


router.get("/register",getRegisterPage)
router.get("/login",getLoginPage)

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logout)


export default router