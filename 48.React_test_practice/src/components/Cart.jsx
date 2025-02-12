import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, removeItem } from "../Store/Slices/CartSlice";
import { toast } from "react-toastify";

function Cart() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const  remove = (id)=>{
      dispatch(removeItem(id))
      toast("Item Removed successfully")
  }

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Your Shopping Cart</h1>

      {cartItem.length > 0 ? (
        <div className="space-y-6">
          {cartItem.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-center gap-6 p-4 border rounded-lg shadow-md bg-white"
            >
              {/* Image */}
              <img 
                className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-md" 
                src={item.image} 
                alt={item.title} 
              />

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                <p className="text-yellow-500 text-sm font-medium mt-1">★ {item.rating?.rate || "N/A"}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">${(Number(item.price) * item.quantity).toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="flex justify-center sm:justify-start items-center mt-4 space-x-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item))}
                    className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => remove(item.id)}
                className="text-red-500 hover:text-red-700 transition mt-2 sm:mt-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
