"use client";

import { motion } from "framer-motion";
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
      "shadcn/ui",
      "Appwrite",
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
      "Appwrite",
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
      "Appwrite",
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
      "shadcn/ui",
      "Appwrite",
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
    tech: ["React Native", "Google Maps API", "Appwrite", "Authentication"],
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
      className="h-[100dvh] overflow-hidden flex flex-col pt-[112px] pb-6 xl:min-h-screen xl:items-center xl:justify-center xl:py-0"
    >
      <div className="container mx-auto w-full flex flex-1 min-h-0 flex-col xl:h-full xl:flex-none xl:justify-center">
        <h2 className="h2 mb-6 xl:mb-10 max-w-[650px]">
          My Latest <span className="text-accent">Work</span>
        </h2>

        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-1 min-h-0 flex-col gap-6 xl:flex-none xl:gap-8"
        >
          <TabsList className="flex flex-shrink-0 flex-wrap justify-center xl:justify-start items-center gap-4 h-auto">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 xl:max-h-[560px] xl:flex-none">
            {categories.map((category) => {
              const filteredProjects = projects.filter(
                (project) => project.category === category,
              );

              return (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16 xl:pb-0">
                    {filteredProjects.map((project) => {
                      return (
                        <div
                          key={project.id}
                          className="bg-secondary/80 border border-white/5 rounded-lg overflow-hidden hover:border-accent/50 transition-all"
                        >
                          <div className="relative w-full h-[220px] md:h-[260px] bg-white/5">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="p-6 flex flex-col gap-5">
                            <div>
                              <h3 className="text-[24px] font-medium mb-3 leading-snug">
                                {project.title}
                              </h3>
                              <p className="text-white/60 leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <ul className="flex flex-wrap gap-3">
                              {project.tech.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="bg-[#a883ff]/13 min-h-[28px] px-[12px] py-[4px] rounded-full text-sm flex items-center"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4 items-start pt-2">
                              <Link
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-accent flex gap-2"
                              >
                                <MdArrowOutward className="text-xl" />
                                <span>Live Project</span>
                              </Link>

                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-white flex gap-2"
                              >
                                <FaGithub className="text-xl" />
                                <span>Github Repo</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
