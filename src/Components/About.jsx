import React from "react";

const About = () => {
  return (
    <section id="about">
      {/* title */}
      <div>
        <h2>About Us</h2>
        <p>Follow instructions for more</p>
      </div>
      {/*end of title */}

      <div>
        {/* item-1 */}
        <div>
          {/* image */}
          <div>
            <img src="./assets/plant-1.png" alt="" />
          </div>
          {/* content */}
          <div>
            <div>
              <h3>
                Make your <span className="text-yellow-500">organic</span>garden
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis eos, dolores rem consequatur est, et expedita eius
                cupiditate culpa, velit delectus aspernatur porro odio in
                explicabo? Ea itaque neque ratione?
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
