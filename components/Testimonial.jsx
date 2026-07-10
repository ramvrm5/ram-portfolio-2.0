"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper required modules
import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
  {
    message:
      "Quick, fast, and done properly. Mr. Ram again worked wonderfully with our team to build our designs to pixel perfect, perfection, and implement the backend to our project in a timely and clean way.",
    name: "Mrs. Jackie",
  },
  {
    message:
      "He worked very hard on the project. He was very experienced and brought that into the work. He worked quickly but very detailed and organized. Even changes I mentioned in conversation he was able to fix. He was the 4th freelancer I used for this project and he was the only one who was able to get it done. He worked with my time pressures and gave an excellent final product.",
    name: "James Whitmore",
  },
  {
    message:
      "Mr. Ram worked with our team on both the front end and the backend of the application. He was quick and diligent with his work. He made sure that every detail was fixed and working, and communicated well with us. He was a hard worker and made sure the team understood everything he did. He made changes when needed and got the work done perfectly in the end.",
    name: "George Lawson",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[300px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
