import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";

type Project = {
  id: number;
  src: string;
  alt: string;
  className: ImgHTMLAttributes<HTMLImageElement>["className"];
};

const parentFolder = "/projects";

const projects: Project[] = [
  {
    id: 1,
    src: `${parentFolder}/advice app.png`,
    alt: "cartoonish-programmer",
    className: "h-[300px]",
  },
  {
    id: 2,
    src: `${parentFolder}/coffeecode.png`,
    alt: "coffeecode",
    className: "",
  },
  {
    id: 3,
    src: `${parentFolder}/dealease.png`,
    alt: "dealease",
    className: "h-[200px]",
  },
  {
    id: 4,
    src: `${parentFolder}/faraway.png`,
    alt: "faraway",
    className: "",
  },
  {
    id: 5,
    src: `${parentFolder}/whats the weather.png`,
    alt: "whats the weather",
    className: "",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      <h1 className="text-2xl font-extrabold mb-4">
        Here are some of my projects:
      </h1>

      <div className="sm:columns-2 md:columns-3 space-y-4">
        {projects.map((project) => (
          <Image
            height={300}
            width={300}
            src={project.src}
            className={
              project.className +
              " w-full object-cover aspect-square rounded-xl"
            }
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
