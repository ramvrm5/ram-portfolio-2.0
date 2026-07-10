"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    icon: "/assets/services/design.svg",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites built with strong visual design, clean structure, and smooth user experience.",
  },
  {
    icon: "/assets/services/frontend.svg",
    title: "Frontend Development",
    description:
      "Interactive React and Next.js interfaces focused on performance, accessibility, and polished UI behavior.",
  },
  {
    icon: "/assets/services/backend.svg",
    title: "Backend Development",
    description:
      "Reliable APIs, authentication flows, databases, and integrations that support real product workflows.",
  },
  {
    icon: "/assets/services/seo.svg",
    title: "Full Stack Development",
    description:
      "Complete web applications from frontend to backend, including deployment-ready architecture.",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex flex-col pt-[140px] pb-8 xl:pt-0 xl:pb-0 xl:justify-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-8 xl:gap-12 min-h-0">
        <div className="flex-shrink-0 flex flex-col gap-4">
          <h2 className="h2 max-w-[620px] text-left">
            Custom <span className="text-accent">Web Solutions</span> to Boost
            Your Business
          </h2>

          <p className="max-w-[620px] text-white/70">
            I help businesses and teams build clean, scalable, and
            conversion-focused digital products.
          </p>
        </div>

        <div className="min-h-0 overflow-y-auto pr-2 scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 xl:overflow-visible xl:pr-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-4 xl:pb-0">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-secondary/90 min-h-[300px] rounded-[20px] px-[28px] py-[34px] flex flex-col justify-between border border-white/5 hover:border-accent/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-10">
                      <Image src={item.icon} width={48} height={48} alt="" />

                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl hover:rotate-45 transition-all">
                        <MdOutlineArrowOutward />
                      </div>
                    </div>

                    <h5 className="text-[22px] font-medium mb-4 leading-snug">
                      {item.title}
                    </h5>

                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
