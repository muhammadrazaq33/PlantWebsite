import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
      {/* newsLatter */}
      <div className="container text-white absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
          <h3>
            <span className="text-yellow-500">Subscribe</span> to our
            newsletter.
          </h3>
          <div className="flex flex-col md:flex-row gap-1">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
            />
            <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
              <span>Subscribe</span>
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
      {/*end of newsLatter */}

      {/* social icon */}
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 mx-auto max-w-36">
            <div className="bg-yellow-100 text-lg text-center space-x-2">
              <i className="ri-facebook-fill hover:bg-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line hover:bg-yellow-500 duration-300 cursor-pointer text-base"></i>
              <i className="ri-instagram-line hover:bg-yellow-500 duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill hover:bg-yellow-500 duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
      {/*end of social icon */}

      {/* content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        {/* item-1 */}
        <div>
          <div className="text-7xl text-green-700 text-center inline-block">
            <i className="ri-leaf-fill"></i>
            <p className="font-Lobster text-xl sm:text-2xl">IndorePlant.</p>
          </div>
        </div>
        {/*end of item-1 */}

        {/* item-2 */}
        <div>
          <p className="font-bold text-xl mb-5">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#">Plants</a>
            <a href="#">Flowers</a>
            <a href="#">Gardening</a>
            <a href="#">Seeds</a>
            <a href="#">Shipping</a>
          </div>
        </div>
        {/*end of item-2 */}

        {/* item-3 */}
        <div>
          <p className="font-bold text-xl mb-5">Popular Services</p>
          <div className="flex flex-col gap-1">
            <a href="#">Tree Planting</a>
            <a href="#">Grass Cutting</a>
            <a href="#">Weeds Control</a>
            <a href="#">Project</a>
          </div>
        </div>
        {/*end of item-3 */}

        {/* item-4 */}
        <div>
          <p className="font-bold text-xl mb-5">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="tel:+3455588197">+34 555 88 197</a>
            <a href="mailto:Ameer111@gmail.com">Ameer111@gmail.com</a>
            <br />
            <p>1234 Tailwind Ave, CSS City, webland 56789, USA</p>
          </div>
        </div>
        {/*end of item-4 */}
      </div>
      {/*end of content */}
      {/* copy right */}
      <div className="container">
        <p className="text-center opacity-50 mt-10">
          Copyright &copy; 2024 Muhammad Razaq. All right reserved.
        </p>
      </div>
      {/*end of copy right */}

      {/* floral image */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img src="./assets/floral-1.png" alt="" className="w-full lg:w-1/2" />
      </div>
    </footer>
  );
};

export default Footer;
