import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  useEffect(() => {
    const common = {
      // origin: "top",
      distance: "60px",
      duration: 2500,
      reset: true,
    };
    ScrollReveal().reveal(".review_top,.review_swiper", {
      ...common,
      origin: "top",
      delay: 300,
    });

    ScrollReveal().reveal(".review_leaf", {
      ...common,
      origin: "left",
      delay: 1000,
    });
  }, []);
  return (
    <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="review_leaf absolute -top-8 -left-12 opacity-50">
        <img src="./assets/leaf-4.png" alt="" className="w-40 md:w-52 xl:64" />
      </div>
      {/* title */}
      <div className="review_top flex flex-col items-center gap-3 text-center mb-40">
        <h2 className="title">Custom Review</h2>
        <p className="max-w-2xl">Follow instructions for more</p>
      </div>
      {/*end of title */}

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          clickable={true}
          grabCursor={true}
          //   navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="review_swiper py-12"
        >
          {/* SwiperSlide for each review */}
          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae maxime, incidunt consequatur et corporis!
              </p>
              <div className="flex items-center">
                <img
                  src="./assets/review-1.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="John Doe"
                />
                <div className="ml-2">
                  <p className="text-yellow-500 uppercase">John Doe</p>
                  <p>Designer</p>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae maxime, incidunt consequatur et corporis!
              </p>
              <div className="flex items-center">
                <img
                  src="./assets/review-2.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="John Doe"
                />
                <div className="ml-2">
                  <p className="text-yellow-500 uppercase">John Doe</p>
                  <p>Designer</p>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae maxime, incidunt consequatur et corporis!
              </p>
              <div className="flex items-center">
                <img
                  src="./assets/review-3.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="John Doe"
                />
                <div className="ml-2">
                  <p className="text-yellow-500 uppercase">John Doe</p>
                  <p>Designer</p>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae maxime, incidunt consequatur et corporis!
              </p>
              <div className="flex items-center">
                <img
                  src="./assets/review-4.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="John Doe"
                />
                <div className="ml-2">
                  <p className="text-yellow-500 uppercase">John Doe</p>
                  <p>Designer</p>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae maxime, incidunt consequatur et corporis!
              </p>
              <div className="flex items-center">
                <img
                  src="./assets/review-1.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="John Doe"
                />
                <div className="ml-2">
                  <p className="text-yellow-500 uppercase">John Doe</p>
                  <p>Designer</p>
                </div>
                <i className="ri-double-quotes-r text-4xl ml-auto"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
