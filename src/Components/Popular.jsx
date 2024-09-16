import React from "react";

const Popular = () => {
  return (
    <section id="popular" className="bg-green-900">
      {/* title */}
      <div className="flex flex-col items-center gap-3 text-center mb-40">
        <h2 className="title">Your Choice Plant</h2>
        <p className="max-w-2xl">Follow instructions for more</p>
      </div>
      {/*end of title */}
      <div className="container w-full grid gap-x-8 gap-y-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card-1 */}
        <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src="./assets/cart-1.png"
            alt=""
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />
          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="text-yellow-500 text-xs py-3">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
            <i className="ri-star-line text-gray-400"></i>
            <i className="ri-star-line text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm">
              <i className="ri-shopping-cart-fill"></i>
            </button>
          </div>
        </div>
        {/*end of card-1 */}
        {/* card-2 */}
        <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src="./assets/cart-2.png"
            alt=""
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />
          <p className="italic">Ficus elastica</p>
          <h3>Rubber Plant</h3>

          <div className="text-yellow-500 text-xs py-3">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
            <i className="ri-star-line text-gray-400"></i>
            <i className="ri-star-line text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm">
              <i className="ri-shopping-cart-fill"></i>
            </button>
          </div>
        </div>
        {/*end of card-2 */}
        {/* card-3 */}
        <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src="./assets/cart-3.png"
            alt=""
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />
          <p className="italic">Ficus elastica</p>
          <h3>Pease Lily</h3>

          <div className="text-yellow-500 text-xs py-3">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
            <i className="ri-star-line text-gray-400"></i>
            <i className="ri-star-line text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm">
              <i className="ri-shopping-cart-fill"></i>
            </button>
          </div>
        </div>
        {/*end of card-3 */}
        {/* card-4 */}
        <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src="./assets/cart-4.png"
            alt=""
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />
          <p className="italic">Adenium obesum</p>
          <h3>Desert Rose</h3>

          <div className="text-yellow-500 text-xs py-3">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
            <i className="ri-star-line text-gray-400"></i>
            <i className="ri-star-line text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>
            <button className="bg-yellow-500 px-2 py-1 rounded-sm">
              <i className="ri-shopping-cart-fill"></i>
            </button>
          </div>
        </div>
        {/*end of card-4 */}
      </div>
    </section>
  );
};

export default Popular;
