import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const common = {
      // origin: "top",
      distance: "60px",
      duration: 2500,
      reset: true,
    };
    ScrollReveal().reveal(".about_top", {
      ...common,
      origin: "top",
      delay: 300,
    });

    ScrollReveal().reveal(".about_leaf", {
      ...common,
      origin: "right",
      delay: 1000,
    });

    ScrollReveal().reveal(".about_item_1_content,.about_item_2_img", {
      ...common,
      origin: "right",
      delay: 300,
    });
    ScrollReveal().reveal(".about_item_2_content,.about_item_1_img", {
      ...common,
      origin: "left",
      delay: 300,
    });
  }, []);
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="about_leaf absolute -top-8 -right-12 opacity-50">
        <img
          src="./assets/leaf-3.png"
          alt=""
          className="w-40 md:w-52 xl:w-64"
        />
      </div>
      {/* title */}
      <div className="about_top flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">About Us</h2>
        <p className="max-w-2xl">Follow instructions for more</p>
      </div>
      {/*end of title */}

      <div className="container space-y-10 xl:space-y-0">
        {/* item-1 */}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./assets/plant-1.png"
              alt=""
              className="about_item_1_img w-full sm:w-2/3 lg:w-full mx-auto"
            />
          </div>
          {/* content */}
          <div className=" about_item_1_content w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Make your <span className="text-yellow-500">organic </span>
                garden
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem
                voluptatem doloribus nam cum, laboriosam quasi voluptates libero
                repudiandae autem expedita tenetur maxime fugiat molestiae ipsam
                hic alias quod numquam dolor fuga tempora. Officiis animi rem
                voluptatum ad! Nulla, eveniet.
              </p>
            </div>
          </div>
        </div>
        {/*end of item-1 */}
        {/* item-2 */}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          {/* image */}
          <div className="about_item_2_img w-full lg:w-1/2">
            <img
              src="./assets/plant-2.png"
              alt=""
              className="w-full sm:w-2/3 lg:w-full mx-auto"
            />
          </div>
          {/* content */}
          <div className="about_item_2_content w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Come with us <br />{" "}
                <span className="text-yellow-500">grow up</span> your plant
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem
                voluptatem doloribus nam cum, laboriosam quasi voluptates libero
                repudiandae autem expedita tenetur maxime fugiat molestiae ipsam
                hic alias quod numquam dolor fuga tempora. Officiis animi rem
                voluptatum ad! Nulla, eveniet.
              </p>
            </div>
          </div>
        </div>
        {/*end of item-1 */}
      </div>
    </section>
  );
};

export default About;
