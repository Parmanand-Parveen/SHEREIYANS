import express from "express"
import isLoggedIn from "../middleware/isLoggedIn.js"
import { createPost, createPostView, getAllPost } from "../controllers/post.controller.js"


const router = express.Router()


router.get("/create", isLoggedIn, createPostView)
router.post("/create",isLoggedIn,createPost)
router.get("/getallpost",isLoggedIn,getAllPost)
// router.get("/getpost",isLoggedIn,getAllPostView)

export default router