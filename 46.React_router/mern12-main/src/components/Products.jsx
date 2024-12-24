import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return <div>
     <div className="flex flex-col">

       <Link to="/products/1">Footware</Link>   
       <Link to="/products/2">Apparel</Link>  
       <Link to="/products/3">Accessories</Link>  
       <Link to="/products/4">Electronics</Link>
       <Link to="/products/5">Other</Link>
    </div>
    </div>;
};

export default Products;
