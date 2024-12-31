import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductDetails } from '../Store/Slices/ProductSlice';
import { useNavigate } from 'react-router';

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const product = useSelector((state) => state.product);
  const getDetails = (id)=>{
    
   dispatch(getProductDetails(id))

   navigate(`/product/${id}`)
     

  }


  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => dispatch(getProduct())}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Get Products
        </button>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.product.length > 0 ? (product.product.map((item) => (
            <div
              key={item?.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition"
            >
              <img
                src={item?.image}
                alt={item?.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {item?.title}
                </h1>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item?.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-yellow-500 text-sm font-medium">
                      ★ {item?.rating?.rate}
                    </p>
                    <span className="text-gray-500 text-sm">({item?.rating?.count} reviews)</span>
                  </div>
                  <button className="px-4 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition" onClick={()=>{getDetails(item?.id)}}>
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          ))):(<div>
              Loading...
            </div>) }
      </div>
    </div>
  );
}

export default Product;
