import React, { useState, useEffect } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`bg-green-950 fixed right-0 left-0 w-full z-50 ${
        showBorder ? "border-b border-yellow-500" : ""
      }`}
    >
      <nav className={`container flex justify-between items-center h-16 sm:20`}>
        <div className="font-Lobster sm:text-2xl">IndorePlant.</div>
        {/* right side */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menu ? "left-[0]" : "left-[-100%]"
          } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="nav-link">
                Popular
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link">
                Review
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0 -right-5 opacity-90 lg:hidden">
            <img src="./assets/leaf-1.png" className="w-32" alt="" />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img src="./assets/leaf-2.png" className="w-32" alt="" />
          </div>
        </div>
        {/* end of right side */}
        {/* menu icon */}
        {/*for menu icon we use cdn.js-remixIcon */}
        <div
          onClick={() => setMenu(!menu)}
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
        >
          <i
            class={`duration-300 ${
              menu ? "ri-close-large-line" : "ri-menu-4-line"
            }`}
          ></i>
        </div>
        {/*end of menu icon */}
      </nav>
    </header>
  );
};

export default Header;
