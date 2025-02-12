import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../Store/Slices/ProductSlice";
import { useNavigate, useParams } from "react-router";
import { addToCart } from "../Store/Slices/CartSlice";
import { toast } from "react-toastify";

function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);

  const getDetails = product.find((item) => item.id == params?.id);
  const dispatch = useDispatch();

  const back = () => {
    navigate(-1);
  };

  const add = (item)=>{
    dispatch(addToCart(item))
    toast(`${item.title} is added to cart`)
    navigate("/cart")
  }
  
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={back}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Back
        </button>
      </div>

      {/* Product Details Section */}
      {getDetails ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative h-64 md:h-80 bg-gray-200">
            <img
              src={getDetails.image}
              alt={getDetails.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {getDetails.title}
            </h1>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              {getDetails.description}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-yellow-500 text-lg font-medium">
                ★ {getDetails.rating?.rate}
              </span>
              <span className="text-gray-500 text-sm">
                ({getDetails.rating?.count} reviews)
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-green-600 mb-6">
              ${getDetails.price}
            </h2>

            {/* Action Buttons */}
            <div className="flex space-x-4">
            <button
                    onClick={() => add(getDetails)}
                    className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-green-600 transition"
                  >
                    Add to cart
                  </button>
              <button
                onClick={() => navigate(`/editproduct/${getDetails.id}`)}
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(deleteItem(getDetails.id));
                  navigate(-1);
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      )}
    </div>
  );
}

export default ProductDetails;
