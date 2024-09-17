import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Services = () => {
  useEffect(() => {
    const common = {
      origin: "top",
      distance: "60px",
      duration: 2500,
      reset: true,
      delay: 300,
    };
    ScrollReveal().reveal(".service_card", {
      ...common,
      interval: 100,
    });
  }, []);
  return (
    <div className="bg-white text-green-900 py-20">
      <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card-1 */}
        <div className="service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-lg hover:shadow-green-900 hover:-translate-y-1 duration-300 space-y-5">
          <div className="flex items-center gap-5">
            <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Fast <br />
              Delivery
            </p>
          </div>
          <p className="font-Lobster">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            distinctio?
          </p>
        </div>
        {/*end of card-1 */}
        {/* card-2 */}
        <div className="service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-lg hover:shadow-green-900 hover:-translate-y-1 duration-300 space-y-5">
          <div className="flex items-center gap-5">
            <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Great Customer <br />
              Service
            </p>
          </div>
          <p className="font-Lobster">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            distinctio?
          </p>
        </div>
        {/*end of card-2 */}
        {/* card-3 */}
        <div className="service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-lg hover:shadow-green-900 hover:-translate-y-1 duration-300 space-y-5">
          <div className="flex items-center gap-5">
            <i className="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Original <br />
              Plants
            </p>
          </div>
          <p className="font-Lobster">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            distinctio?
          </p>
        </div>
        {/*end of card-3 */}
        {/* card-4 */}
        <div className="service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-lg hover:shadow-green-900 hover:-translate-y-1 duration-300 space-y-5">
          <div className="flex items-center gap-5">
            <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
            <p className="md:text-lg font-bold">
              Affordable <br />
              Prices
            </p>
          </div>
          <p className="font-Lobster">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            distinctio?
          </p>
        </div>
        {/*end of card-4 */}
      </div>
    </div>
  );
};

export default Services;
