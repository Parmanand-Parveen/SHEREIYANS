import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <div className="flex flex-col gap-6">
      Home
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>

     
    </div>
  );
};

export default Home;
