import React from "react";
import { Links, Outlet } from "react-router";
import { Link } from "react-router";
import axios from "../utils/axiosconfig";
import { useState } from "react";

function Grocery() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const data = await axios.get("/products");
    setProducts(data.data);
    console.log(data);
  };

  console.log(products);

  const getDetails = async (id) => {
    console.log(id);

    const details = await axios.get(`/products/${id}`);
    console.log(details);
  };

  return (
    <div>
      <button onClick={getProduct}>Get Data</button>

      <div className="flex gap-3">
        {/*<Link to={"/grocery/oil"}>Oil</Link>
      <Link to={"/grocery/sampoo"}>Sampoo</Link>
      <Link to={"/grocery/masala"}>Masala</Link> </div>*/}
        <div className="min-h-screen min-w-screen flex flex-wrap gap-5">
          {products.map((p) => {
            return (
              <Link
                className="flex flex-col"
                key={p.id}
                to={`/grocery/${p.id}`}
              >
                <img className="w-96 h-96" src={p?.image} alt="" />
                <h1>{p?.title}</h1>
                <p
                  onClick={() => {
                    getDetails(p.id);
                  }}
                >
                  Get details
                </p>
              </Link>
            );
          })}
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Grocery;
