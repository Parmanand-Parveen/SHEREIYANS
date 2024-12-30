import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return <div>
     <div className="flex flex-col">

       <Link to="/products/footware">Footware</Link>   
       <Link to="/products/apparel">Apparel</Link>  
       <Link to="/products/Accessories">Accessories</Link>  
       <Link to="/products/electronices">Electronics</Link>
       <Link to="/products/other">Other</Link>
    </div>
    <Outlet/>
    </div>;
};

export default Products;
