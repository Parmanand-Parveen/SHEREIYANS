import {remove} from "../Reducers/ProductSlices"


export const asyncRemove = (id) => (dispatch, getState) => {
 
    console.log(getState)
  console.log(id)

  setTimeout(() => {
   
       dispatch(remove(id))
  

  }, 2000);
};
