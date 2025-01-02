import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../Store/Slices/ProductSlice";
// import { updateProduct } from "../Store/Slices/ProductSlice"; // Adjust based on your Redux setup

function Edit() {
  const { id } = useParams(); // Fetch product ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => 
    state.product.product.find((item) => item.id === parseInt(id))
  );

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating:{
        rate: "",
        count: ""
    }
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
         rating:{
           rate: product.rating.rate,
          count: product.rating.count}
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(formData)); // Replace `updateProduct` with your update logic
    navigate("/product");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Edit Product</h2>

        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate("/product")}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
