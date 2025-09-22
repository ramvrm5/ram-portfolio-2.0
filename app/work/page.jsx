"use client";

import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "fullstack",
    title: "Task Management App",
    description:
      "A full-featured task and project management tool inspired by Jira, allowing users to manage multiple workspaces, projects, tasks, and team members with real-time updates.",
    image: "/assets/work/work1.png",
    link: "https://jira-clone-tawny-iota.vercel.app/sign-in",
    github: "https://github.com/ramvrm5/jira-clone",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
      "shadcn / ui",
      "Appwrite(NoSQL)",
      "Authentication",
    ],
  },
  {
    id: 2,
    category: "fullstack",
    title: "Note-Taking App",
    description:
      "A simplified version of Notion with dynamic blocks and an editor to structure notes with nested pages and real-time edits.",
    image: "/assets/work/work2.png",
    link: "https://note-taking-app-rosy-one.vercel.app/",
    github: "https://github.com/ramvrm5/Notion-clone",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Appwrite(NoSQL)",
      "Authentication",
    ],
  },
  {
    id: 3,
    category: "fullstack",
    title: "E-commerce App",
    description:
      "A responsive e-commerce platform similar to Amazon with product listing, cart management, Stripe checkout, and authentication.",
    image: "/assets/work/work3.png",
    link: "https://amazon-2-o7pvi1358-ramvrm5.vercel.app/",
    github: "https://github.com/ramvrm5/Amazon-2-yt",
    tech: [
      "React.js",
      "TailwindCSS",
      "Stripe API",
      "shadcn/ui",
      "Appwrite (NoSQL)",
      "Authentication",
    ],
  },
  {
    id: 4,
    category: "fullstack",
    title: "Messaging App",
    description:
      "A real-time messaging application with support for both group and individual chats.",
    image: "/assets/work/work4.png",
    link: "https://messaging-app-gray.vercel.app/",
    github: "https://github.com/ramvrm5/Messaging-app",
    tech: [
      "React.js",
      "TailwindCSS",
      "shadcn / ui",
      "Appwrite(NoSQL)",
      "Authentication",
    ],
  },
  {
    id: 5,
    category: "fullstack",
    title: "Package Tracking App",
    description:
      "A React Native-based logistics tracking system inspired by UPS with real-time location updates using Google Maps.",
    image: "/assets/work/work5.png",
    link: "https://github.com/ramvrm5/ups-clone",
    github: "https://github.com/ramvrm5/ups-clone",
    tech: [
      "React Native",
      "Google Maps API",
      "Appwrite (NoSQL)",
      "Authentication",
    ],
  },
  {
    id: 6,
    category: "frontend",
    title: "React Responsive Animation Showcase",
    description:
      "A visually appealing animation site demonstrating advanced responsive design using Framer Motion.",
    image: "/assets/work/work6.png",
    link: "https://react-animate-six.vercel.app/",
    github: "https://github.com/ramvrm5/react-animate",
    tech: ["React.js", "TailwindCSS", "shadcn/ui", "Swiper", "Framer Motion"],
  },
  {
    id: 7,
    category: "backend",
    title: "Uniswap Blockchain Clone",
    description:
      "A blockchain DApp that replicates Uniswap-style token swapping functionality with wallet integration.",
    image: "/assets/work/work7.png",
    link: "https://uniswap-blockchain-nine.vercel.app/",
    github: "https://github.com/ramvrm5/uniswap-blockchaine",
    tech: ["React.js", "TailwindCSS", "Ethers.js", "Web3", "Blockchain APIs"],
  },
];

const categories = ["frontend", "fullstack", "backend"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
