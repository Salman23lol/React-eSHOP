import React from "react";

function Card() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="flex justify-content-evenly text-center">
          <div className="card p-4 border">
            <div className="card-content">
              <div className="card-title">Product Name</div>
              <div className="card-price">$99.99</div>
              <div className="card-rates pb-2 flex justify-content-center">⭐⭐⭐⭐</div>
            </div>
            <img
              className="card-image"
              src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              alt="Product"
            />
            <div className="card-content">
              <button className="card-button">Add to Cart</button>
            </div>
          </div>
          {/* card 2 */}
          <div className="card-2 p-4 border">
            <div className="card-content">
              <div className="card-title">Product Name</div>
              <div className="card-price">$99.99</div>
              <div className="card-rates pb-2">⭐⭐⭐⭐</div>
            </div>
            <img
              className="card-image-2"
              src="https://www.pngall.com/wp-content/uploads/12/Microwave-Oven-Equipment-No-Background.png"
              alt="Product"
            />
            <div className="card-content">
              <button className="card-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className="container w-full">
        <div className="flex justify-content-evenly">
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white text-center p-4 m-5 card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 card-name">
                Product Name
              </div>
              <p className="text-gray-700 text-base card-price">$99.99</p>
              <p className="text-base pt-2 card-star">⭐⭐⭐⭐</p>
            </div>
            <img
              className="w-full"
              src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              alt="Product"
            />

            <div className="px-6 py-4 flex justify-content-center card-btn">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>

          
        </div>
      </div> */
}
