"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ImgHTMLAttributes } from "react";

type Project = {
  id: number;
  name: string;
  desc: string;
  src: string;
  alt: string;
  href: {
    demo: string;
    code: string;
  };
  favorite: boolean;
  biggestProj: boolean;
};

const parentFolder = "/projects";
const heights = [
  "h-[200px]",
  "h-[350px]",
  "h-[300px]",
  "h-[200px]",
  "h-[250px]",
];

function randomizerHeightClassName() {
  return heights[Math.floor(Math.random() * heights.length)];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Advice App",
    desc: "Advise App is from Frontend Mentor exercise which I found it interesting to make because it includes calling API service",
    src: `${parentFolder}/advice app.png`,
    alt: "advice-app",
    href: {
      demo: "https://advice-app-by-fc.netlify.app",
      code: "https://github.com/CodeWithSubaru/style-component/tree/advice-app",
    },
    biggestProj: false,
    favorite: true,
  },
  {
    id: 2,
    name: "CoffeeCode App",
    desc: "CoffeeCode was a Content Management System built with HTML CSS JS as Frontend, PHP as backend, and MSQL as Database. This was built for Programmers to manage and share to everyone their contents about the latest trends, tips and tricks and new knowledge within a few minutes",
    src: `${parentFolder}/coffeecode.png`,
    alt: "coffeecode",
    href: {
      demo: "https://coffeecode.epizy.co/",
      code: "https://github.com/CodeWithSubaru/coffeecode",
    },
    biggestProj: true,
    favorite: true,
  },
  {
    id: 3,
    name: "Dealease",
    desc: "Dealease is an web application and a my thesis. This thesis conducted on our local fisherman in our town. It's purpose is to help them to sell their products specifically their fishes caught for fair and desired prices.",
    src: `${parentFolder}/dealease.png`,
    alt: "dealease",
    href: {
      demo: "https://dealease-fe.vercel.app/",
      code: "https://github.com/CodeWithSubaru/dealease-new",
    },
    biggestProj: true,
    favorite: true,
  },
  {
    id: 4,
    name: "Faraway",
    desc: "Faraway is an on-the-go planner before our flights begins. This is like checklist of our things need to bring for our vacation",
    src: `${parentFolder}/faraway.png`,
    alt: "faraway",
    href: {
      demo: "https://87lj9v.csb.app/",
      code: "https://codesandbox.io/p/sandbox/faraway-87lj9v",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 5,
    name: "What's the Weather",
    desc: "Another exercise from Frontend Mentor that caught my eyes, because it enhance my ability to fetch API.",
    src: `${parentFolder}/whats the weather.png`,
    alt: "whats the weather",
    href: {
      demo: "https://cism-weather-app.vercel.app/",
      code: "https://github.com/CodeWithSubaru/whats-the-weather",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 6,
    name: "3 Column Preview Card",
    desc: "Another exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/3-column-preview-card.png`,
    alt: "3 column preview card",
    href: {
      demo: "https://3-coloumn-preview-card-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/3-column-preview-card",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 7,
    name: "Statistic Preview Card",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/cta.png`,
    alt: "cta",
    href: {
      demo: "https://jolly-manatee-ec9d1b.netlify.app/",
      code: "https://github.com/CodeWithSubaru/stats-preview-card-component-main",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 8,
    name: "NFT Preview",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/nft-preview.png`,
    alt: "nft preview",
    href: {
      demo: "https://nft-preview-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/nft-preview",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 9,
    name: "Order Summary",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/order-summary.png`,
    alt: "order summary",
    href: {
      demo: "https://order-summary-component-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/order-summary-component",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 10,
    name: "Product Card",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/product-card.png`,
    alt: "product card",
    href: {
      demo: "https://thunderous-tulumba-e6b6f5.netlify.app/",
      code: "https://github.com/CodeWithSubaru/product-preview-card",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 11,
    name: "Profile Card",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/profile-card.png`,
    alt: "profile card",
    href: {
      demo: "https://profile-card-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/profile-card",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 12,
    name: "QR Code",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/qrcode.png`,
    alt: "qr code",
    href: {
      demo: "https://qrcode-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/qrcode-component",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 13,
    name: "Rating Card",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/ratings-card.png`,
    alt: "rating card",
    href: {
      demo: "https://ratings-card-by-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component",
    },
    biggestProj: false,
    favorite: false,
  },
  {
    id: 14,
    name: "Sign up",
    desc: "Exercise from Frontend Mentor to enhance my frontend skills",
    src: `${parentFolder}/sign-up.png`,
    alt: "sign up",
    href: {
      demo: "https://sign-up-fc.netlify.app/",
      code: "https://github.com/CodeWithSubaru/style-component/tree/sign-up",
    },
    biggestProj: false,
    favorite: false,
  },
];

const favorites = projects.filter((project) => project.favorite);

const biggestProjects = projects.filter((project) => project.biggestProj);

const adjustHeight = (project: Project, height: string) =>
  (project.desc.length > 100 && height === "h-[200px]") ||
  randomizerHeightClassName() === "h-[250px]"
    ? "h-[100px]"
    : "h-auto";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-20 md:p-10">
      <div className="inline-flex gap-2 items-center ">
        <Link
          href="/"
          className=" p-1 rounded-md border-2 text-gray-400 border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <h1 className="text-sm md:text-3xl font-bold">
          Here are some of my projects:
        </h1>
      </div>
      <div className="feature-projects">
        <h2 className="text-xl text-gray-300 mb-5">Favorite Projects</h2>
        <div className="sm:columns-2 md:columns-3 space-y-4">
          {favorites.map((project) => (
            <div
              key={project.id}
              className="group relative border border-gray-700 overflow-hidden rounded-xl"
            >
              <Image
                height={300}
                width={300}
                src={project.src}
                className={"h-[250px] w-full object-cover"}
                alt={project.alt}
              />
              <div className="flex flex-col justify-between transition-transform duration-300 rounded-md translate-x-full translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 bg-black absolute inset-0 px-3 py-4">
                <div>
                  <h1 className="transition-all duration-300 translate-y-full group-hover:delay-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 mb-2">
                    {project.name}
                  </h1>
                  <div className="overflow-hidden max-h-[200px] group-hover:overflow-y-auto">
                    <p className="transition-all duration-300 group-hover:delay-700 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 leading-6 text-gray-400">
                      {project.desc}
                    </p>
                  </div>
                </div>
                <div className="py-2 transition-all duration-300 translate-y-full group-hover:delay-1000 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex gap-3">
                  <Button className="flex-1 py-3 text-gray-100" asChild>
                    <Link
                      target="_blank"
                      href={project.href.demo}
                      className="bg-neutral-900 hover:bg-neutral-900/90 group-hover:shadow group-hover:text-neutral-50"
                    >
                      Demo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 py-3 bg-transparent text-gray-100"
                    asChild
                  >
                    <Link
                      target="_blank"
                      href={project.href.code}
                      className="group-hover:shadow-sm hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="biggest-project">
        <h2 className="text-xl text-gray-300 mb-5">Biggest Project</h2>
        <div className="sm:columns-2 md:columns-3 space-y-4">
          {biggestProjects.map((project) => (
            <div
              key={project.id}
              className="group relative border border-gray-700 overflow-hidden rounded-xl"
            >
              <Image
                height={300}
                width={300}
                src={project.src}
                className={"h-[250px] w-full object-cover"}
                alt={project.alt}
              />
              <div className="flex flex-col justify-between transition-transform duration-300 rounded-md translate-x-full translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 bg-black absolute inset-0 px-3 py-4">
                <div>
                  <h1 className="transition-all duration-300 translate-y-full group-hover:delay-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 mb-2">
                    {project.name}
                  </h1>
                  <div className="overflow-hidden max-h-[200px] group-hover:overflow-y-auto">
                    <p className="transition-all duration-300 group-hover:delay-700 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 leading-6 text-gray-400">
                      {project.desc}
                    </p>
                  </div>
                </div>
                <div className="py-2 transition-all duration-300 translate-y-full group-hover:delay-1000 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex gap-3">
                  <Button className="flex-1 py-3 text-gray-100" asChild>
                    <Link
                      target="_blank"
                      href={project.href.demo}
                      className="bg-neutral-900 hover:bg-neutral-900/90 group-hover:shadow group-hover:text-neutral-50"
                    >
                      Demo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 py-3 bg-transparent text-gray-100"
                    asChild
                  >
                    <Link
                      target="_blank"
                      href={project.href.code}
                      className="group-hover:shadow-sm hover:bg-neutral-100 hover:text-neutral-900"
                    >
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="other-projects">
        <h2 className="text-xl text-gray-300 mb-5">Other Project</h2>
        <div className="sm:columns-2 md:columns-3 space-y-4">
          {projects.map((project) => {
            const randomHeight = randomizerHeightClassName();
            return (
              <div
                key={project.id}
                className="group relative border border-gray-700 overflow-hidden rounded-xl"
              >
                <Image
                  height={300}
                  width={300}
                  src={project.src}
                  className={randomHeight + " w-full object-cover"}
                  alt={project.alt}
                />
                <div className="flex flex-col justify-between transition-transform duration-300 rounded-md translate-x-full translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 bg-black absolute inset-0 px-3 py-4">
                  <div>
                    <div className="sticky top-4 left-4">
                      <h1 className="transition-all duration-300 translate-y-full group-hover:delay-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 mb-2">
                        {project.name}
                      </h1>
                    </div>
                    <div
                      className={
                        adjustHeight(project, randomHeight) + " overflow-y-auto"
                      }
                    >
                      <p className="transition-all duration-300 group-hover:delay-700 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 leading-6 text-gray-400">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                  <div className="sticky bottom-0 left-0 bg-black py-2 transition-all duration-300 translate-y-full group-hover:delay-1000 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex gap-3">
                    <Button className="flex-1 py-3 text-gray-100" asChild>
                      <Link
                        target="_blank"
                        href={project.href.demo}
                        className="bg-neutral-900 hover:bg-neutral-900/90 group-hover:shadow group-hover:text-neutral-50"
                      >
                        Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 py-3 bg-transparent text-gray-100"
                      asChild
                    >
                      <Link
                        target="_blank"
                        href={project.href.code}
                        className="group-hover:shadow-sm hover:bg-neutral-100 hover:text-neutral-900"
                      >
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
