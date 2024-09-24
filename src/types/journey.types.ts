interface JourneyImage {
  src: string;
  alt: string;
}

export interface Journey {
  id: number;
  image: JourneyImage;
  title: string;
  description: string;
}
