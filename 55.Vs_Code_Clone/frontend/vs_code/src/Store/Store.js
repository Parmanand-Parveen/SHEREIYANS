import  {configureStore} from "@reduxjs/toolkit"
import fileSlice from "./Slices/FileSlice"


const store = configureStore({
    reducer:{
        file: fileSlice
    }
})



export default store