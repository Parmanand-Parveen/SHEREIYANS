import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/Reducers/ProductSlices'
import { asyncRemove } from '../Store/actions/productAction'

function Product() {
 
  const product = useSelector(state => state.product)
  
  console.log(product)

  const dispatch =useDispatch()
  const addhandler =()=>{
      const newproduct = {
        id:"3",
        name:"Shirt",
        price:650
      }   

     dispatch(add(newproduct)) 


  }

  return (
    <div>
    <h1>Product Page</h1>
    <button onClick={addhandler}>Add product</button>
    <button onClick={()=>dispatch(asyncRemove(3))}>Remove</button>

    </div>
  )
}

export default Product