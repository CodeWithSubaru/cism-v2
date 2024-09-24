import { Journey } from "@/types/journey.types";

export const journeys: Journey[] = [
  {
    id: 1,
    image: {
      src: "/cartoonish-computer-with-code.png",
      alt: "cartoonish-computer-with-code",
    },
    title: "Coding",
    description:
      'I do love <em>"coding"</em>. I spent studying <em>"Web Development"</em> for almost <em>"5 years"</em>. Creating website makes me excited because it gives me challenge.',
  },
  {
    id: 2,
    image: {
      src: "/cartoonish-graduation.png",
      alt: "cartoonish-graduation",
    },
    title: "Graduation",
    description: `I graduated in <em>June 2023</em>, one of the happiest moments of my life. It was a challenging but fun journey as a Computer Science student, with many projects along the way.`,
  },
  {
    id: 3,
    image: {
      src: "/cartoonish-programmer.png",
      alt: "cartoonish-programmer",
    },
    title: "Programmer / Web Developer",
    description: `I enjoy programming in the terminal with Java and Python from my college days. I also love web development, especially creating PHP forms, connecting to a server, and doing CRUD operations with Laravel.`,
  },

  {
    id: 4,
    image: {
      src: "/cartoonish-youtube.png",
      alt: "cartoonish-youtube",
    },
    title: "Hobby: Watching Youtube",
    description: `I love watching YouTube videos, especially when I'm bored or eating. It's my go-to for entertainment, and I enjoy watching random videos, mostly entertainment shows.`,
  },
];
