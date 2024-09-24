import ButtonRotatingBackgroundGradient from "@/components/button";
import ConnectForm from "@/components/connectForm";
import Journeys from "@/components/journeys";
import Navigation from "@/components/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // new Date().getFullYear()
  const currentYear = 2024;
  return (
    <>
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      <div className="social-links">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex">
              <a href="facebook.com">
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
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <span>Facebook</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex">
              <a href="github.com">
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
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <span>Github</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex">
              <a href="linkenid">
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
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <span>Linkenid</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex">
              <a href="pdf">
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
                  className="feather feather-file-text"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <span>Resume / CV</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="fullName-wrapper">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex">
              <a href="mailto:francis.cloydm@gmail.com">
                francis.cloydm@gmail.com
              </a>
            </TooltipTrigger>
            <TooltipContent className="[writing-mode:horizontal-tb]">
              <span>My Email</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <main>
        <section id="home">
          <div className="flex flex-col items-center z-10">
            <div className="img-wrapper">
              <Image src="/me.png" width={300} height={300} alt="me" />
              <div className="gradient blur"></div>
              <div className="gradient regular"></div>
            </div>
            <h1>Hi I&apos;m Francis</h1>
            <small>A Web Developer</small>
          </div>
          <div className="hidden md:block absolute top-28 left-64 lg:left-1/2 lg:-translate-x-1/2 ml-48 h-12 lg:h-20 w-32 lg:w-52">
            <Image
              src="/arrow.png"
              width={300}
              height={300}
              alt="arrow"
              className="w-full"
            />
          </div>

          <ButtonRotatingBackgroundGradient>
            <Link
              href="#connect"
              className="hover:bg-transparent hover:shadow-none hover:text-white hover:rounded-none cursor-pointer"
            >
              Get I am ready!
            </Link>
          </ButtonRotatingBackgroundGradient>

          <div className="badge badge--3 text-center">
            <h3>Well Craft</h3>
            <p>Bring your imagination to real life</p>
          </div>
          <div className="badge badge--4 text-center">
            <h3>Enthustiast</h3>
            <p>Playful mind with power of creativeness</p>
          </div>
          <div className="badge badge--2 text-center">
            <h3>Perseverance</h3>
            <p>Leave the procastination</p>
          </div>
          <div className="badge badge--1 text-center">
            <h3>Fast Pace</h3>
            <p>Efficiency comes first</p>
          </div>
        </section>
        <section
          id="about-me"
          className="grid grid-cols-1 md:grid-cols-2 gap-y-0 md:gap-y-10 grid-rows-[repeat(3, fit-content)] px-10 mb-10"
        >
          <div className="static lg:relative lg:self-end left-28 z-20 inline-flex justify-center md:justify-start items-center text-center md:text-left">
            <h2 className="font-bold text-5xl md:text-7xl xl:text-8xl">
              <span>Really</span>
              <span className="text-red-400 mx-2 inline-block text-nowrap">
                L<span className="-mx-1 md:-mx-2">💖</span>ve
              </span>
              <br />
              <span>Doing</span>
              <span className="text-blue-600 mx-2 inline-block text-nowrap">
                Pr<span className="-mx-2 md:-mx-4">🔥</span>jects
              </span>
            </h2>
          </div>

          <div className="flex justify-around flex-nowrap gap-y-0 md:gap-y-4 text-center md:text-left gap-x-2 md:grid grid-cols-subgrid static lg:relative left-28 row-start-2 z-10">
            <a
              href=""
              className="active flex-1 flex py-2 h-fit md:h-full justify-center md:justify-between"
            >
              <span> Journey</span>
              <SquareArrowOutUpRight className="hidden md:inline-block" />
            </a>
            <Link
              href="/projects"
              className="flex-1 flex py-2 h-fit md:h-full gap-y-0 md:gap-y-4 justify-center md:justify-between"
            >
              <span>Projects</span>
              <SquareArrowOutUpRight className="hidden md:inline-block" />
            </Link>
            <Link
              href="/blog"
              className="flex-1 flex py-2 h-fit md:h-full gap-y-0 md:gap-y-4 justify-center md:justify-between"
            >
              <span>Blog</span>
              <SquareArrowOutUpRight className="hidden md:inline-block" />
            </Link>
          </div>

          <div className="hover:z-20 row-span-2 self-start md:self-center h-[250px] order-1 md:h-[400px] mb-5">
            <Journeys />
          </div>
        </section>

        <article id="connect" className="mb-10 flex justify-center">
          <ConnectForm />
        </article>

        <footer className="flex flex-col md:grid grid-cols-2 h-72 md:h-32 px-10 py-5 border-t border-gray-700 bg-gradient-to-tr from-black/80 via-black/80 to-black/80">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-semibold text-xs md:text-sm text-gray-400 uppercase mb-3">
              My Portfolio
            </h3>
            <p className="text-xl md:text-3xl font-bold">
              Francis Cloyd Mag-isa
            </p>
          </div>

          <div className="flex-1 text-center md:text-end h-full flex flex-col justify-start md:justify-end">
            <h4 className="text-gray-400 font-extrabold mb-3 text-sm">
              {currentYear}
            </h4>
            <p className="text-sm font-bold text-gray-400">
              All rights reserved
            </p>
          </div>
        </footer>
      </main>
      <Navigation />
    </>
  );
}
