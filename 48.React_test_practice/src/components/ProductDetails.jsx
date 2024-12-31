import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductDetails } from '../Store/Slices/ProductSlice';
import { useNavigate, useParams } from 'react-router';

function ProductDetails() {
  const navigate = useNavigate();
  const { getDetails } = useSelector((state) => state.product);

  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(params?.id));
  }, [dispatch, params?.id]);

  const back = () => {
    navigate(-1);
    dispatch(getProduct());
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
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
       {getDetails.title ?(      <div className="max-w-4xl mx-auto bg-white flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden">
        <img
          src={getDetails?.image}
          alt={getDetails?.title}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {getDetails?.title}
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {getDetails?.description}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <p className="text-yellow-500 text-lg font-semibold">
                ★ {getDetails?.rating?.rate}
              </p>
              <p className="text-gray-600 text-sm">
                ({getDetails?.rating?.count} reviews)
              </p>
            </div>
          </div>
          <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
            Buy Now
          </button>
        </div>
      </div>):("Loading...")}
    </div>
  );
}

export default ProductDetails;
