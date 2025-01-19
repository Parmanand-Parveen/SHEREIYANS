import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    products:[
        {id:"1",
            name:"Watch",
            price:220
        }, {id:"2",
            name:"Watch",
            price:540
        }
    ]
}


const productSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        add:(state,action)=>{
              state.products.push(action.payload)    
 
        },
        remove: (state,action)=>{
             state.products.splice(action.payload,1) 
        }
    }
})


export default productSlice.reducer

export const {add,remove} = productSlice.actions