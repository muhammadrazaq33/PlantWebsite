import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles

const Review = () => {
  return (
    <section id="review">
      {/* title */}
      <div className="flex flex-col items-center gap-3 text-center mb-40">
        <h2 className="title">Custom Review</h2>
        <p className="max-w-2xl">Follow instructions for more</p>
      </div>
      {/*end of title */}

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]} // Use Swiper modules here
          spaceBetween={30}
          slidesPerView={1} // Default number of slides to show
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          clickable={true}
          grabCursor={true}
          //   navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1, // Show 1 slide on mobile devices
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // Show 2 slides on tablets
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // Show 3 slides on desktops
              spaceBetween: 40,
            },
          }}
          className="py-12"
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
