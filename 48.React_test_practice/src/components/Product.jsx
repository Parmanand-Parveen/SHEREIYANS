import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../Store/Slices/CartSlice";
import { toast } from "react-toastify";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const [data, setdata] = useState([]);

  const getDetails = (id) => {
    navigate(`/product/${id}`);
  };

 

  const getCategoryfilteredData = (item) => {
    const filteredData = product.product.filter(
      (data) => data.category === item
    );
    setdata(filteredData);
  };

  const add = (item)=>{
    dispatch(addToCart(item))
    toast(`${item.title} is added to cart`)
    navigate("/cart")
  }

  const category =product && product.product.map((item) => item.category);
  const categoryFilter = [...new Set(category)];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => navigate("/addproduct")}
          className="px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          Add New Product
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
  {/* Filter Buttons */}
  <div className="flex flex-wrap gap-4">
    <button
      onClick={() => setdata([])}
      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
    >
      All Products
    </button>
    {categoryFilter.map((item) => (
      <button
        key={item}
        onClick={() => getCategoryfilteredData(item)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {item}
      </button>
    ))}
  </div>

  {/* Product Count */}
  <div className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition w-full md:w-auto text-center">
    {data.length > 0 ? data.length : product.product.length} Products
  </div>
</div>


      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.product.length > 0 ? (
          (data.length > 0 ? data : product.product).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition"
            >
              <img
                src={item?.image}
                alt={item?.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  ${item.price}
                </h1>
                <h1 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-yellow-500 text-sm font-medium">
                      ★ {item.rating?.rate? item.rating?.rate : ""}
                    </p>
                    <span className="text-gray-500 text-sm">
                      ({item.rating?.count? `${item.rating?.count} reviews` : ""} )
                    </span>
                  </div>
                 <div className="flex gap-3">
                 <button
                    onClick={() => add(item)}
                    className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-green-600 transition"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => getDetails(item.id)}
                    className="px-4 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
                  >
                    Get Details
                  </button>
                 </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
