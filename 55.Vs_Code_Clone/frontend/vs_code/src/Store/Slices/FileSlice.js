import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
     loading :false,
     error : null,
     fileName : null,
     fileData : null,
     allFile  : []
}

export const uploadFile = createAsyncThunk("file/uploadFile", async (data) => {
   
    try {
        const response = await axios.post("http://localhost:3000/file/create", data)
        return response.data
    } catch (error) {
        return error.message
    }
})


export const  getAll = createAsyncThunk("file/get-allFile", async () => {
    try {
        const response = await axios.get("http://localhost:3000/file/get-allfile")
        return response.data
    } catch (error) {
        return error.message
    }
})


export const  getFileData = createAsyncThunk("file/getData", async (fileName) => {
    try {
        const response = await axios.get(`http://localhost:3000/file/read/${fileName}`)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const  updateFile = createAsyncThunk("file/update", async (data) => {
    try {
        const response = await axios.patch(`http://localhost:3000/file/update`,data)
        return response.data
    } catch (error) {
        return error.message
    }
})
export const  deleteFile = createAsyncThunk("file/deleteFile", async (fileName) => {
    try {
        const response = await axios.delete(`http://localhost:3000/file/delete/${fileName}`)
        return response.data
    } catch (error) {
        return error.message
    }
})

const fileSlice = createSlice({
    name:"file",
    initialState,
    reducers:{
         setFileName : (state,action) => {
            state.fileName = action.payload
         }
    },

    extraReducers: (builder) => {
        builder
        .addCase(uploadFile.pending, (state,action) => {
            state.loading = true
        })
        .addCase(uploadFile.fulfilled, (state,action) => {
            state.loading = false
           
        })
        .addCase(uploadFile.rejected, (state,action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(getAll.pending, (state,action) => {
            state.loading = true
        })
        .addCase(getAll.fulfilled, (state,action) => {
            state.loading = false
            console.log(action.payload.data)
           state.allFile = action.payload.data  
        })
        .addCase(getAll.rejected, (state,action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(getFileData.pending, (state,action) => {
            state.loading = true
        })
        .addCase(getFileData.fulfilled, (state,action) => {
            state.loading = false
           state.fileData = action.payload  
        })
        .addCase(getFileData.rejected, (state,action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(updateFile.pending, (state,action) => {
            state.loading = true
        })
        .addCase(updateFile.fulfilled, (state,action) => {
            state.loading = false
          
        })
        .addCase(updateFile.rejected, (state,action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {setFileName} = fileSlice.actions

export default fileSlice.reducer