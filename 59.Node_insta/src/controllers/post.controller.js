import postModel from "../models/post.model.js"
import userModel from "../models/user.model.js"



export const createPostView = async (req, res) => {
    res.render("createPost")
}



export const createPost = async (req, res) => {
    try {
        const { content, caption } = req.body

        const user = req.user

        const post = await postModel.create({
            author: user.id,
            content,
            caption
        })

        const updateUser = await userModel.findOneAndUpdate({ _id: user.id }, { $push: { posts: post._id } })

         res.redirect("/user/profile")
    } catch (error) {
        console.log("Some error in create post controller :=>", error)
        res.send(500).json({ success: false, message: "Internal server error" })
    }
}

export const getAllPost = async (req, res) => {
    try {
        const posts = await postModel.find().populate("author")
        res.render("showallpost", { posts })
    } catch (error) {
        console.log("Some error in get all post controller :=>", error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

// export const getAllPostView = async (req, res) => {
//     res.render("showallpost", posts)
// }

