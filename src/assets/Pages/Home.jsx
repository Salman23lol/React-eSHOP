import React from "react";
import Card from "../compnents/Card";
import Navbar from "../compnents/NavBar";

function Home() {
  return (
    <div>
      <Navbar />
      <img
        src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
        className="w-full vh-60"
        alt="Img"
      />
      <Card />
    </div>
  );
}

export default Home;
