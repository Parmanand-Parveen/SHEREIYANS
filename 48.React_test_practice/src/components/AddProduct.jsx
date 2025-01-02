import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../Store/Slices/ProductSlice";
import { useNavigate } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

function AddProduct() {
  const initialFormData = {
    id: nanoid(),
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    }
  };

  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonState =
    !formData.title ||
    !formData.price ||
    !formData.category ||
    !formData.description ||
    !formData.image;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(formData));
    navigate(-1);
  };

  return (
    <div className=" bg-gray-100 p-6">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="px-4 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back
      </button>

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4"
          onSubmit={submitHandler}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Add New Product
          </h2>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Price"
            type="text"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Image URL"
            type="text"
            value={formData.image}
            onChange={(e) => {
              setFormData({ ...formData, image: e.target.value });
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Category"
            type="text"
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
          />
          <input
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Rate"
          type="text"
          value={formData.rating.rate}
          onChange={(e) => {
            setFormData({ ...formData, rating: { ...formData.rating, rate: e.target.value }});
          }}
           
        />

        <input
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Rating count"
        type="text"
        value={formData.rating.rate}
        onChange={(e) => {
          setFormData({ ...formData, rating: { ...formData.rating, count: e.target.value }});
        }}/>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={buttonState}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
