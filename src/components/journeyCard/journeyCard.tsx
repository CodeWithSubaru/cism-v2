import useSanitizeHTML from "@/hooks/useSanitizeHTML";
import { Journey } from "@/types/journey.types";
import Image from "next/image";

function JourneyCard({ journey }: { journey: Journey }) {
  const { image, title, description } = journey;
  const sanizitizedDescription = useSanitizeHTML(description);

  return (
    <div className="border border-gray-700 relative rounded-3xl bg-gray-100 dark:bg-neutral-900 h-full w-full overflow-hidden flex flex-col items-start justify-start">
      <div className="rounded-3x p-5 md:p-10 absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/70 to-black/70" />
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={300}
          className="absolute inset-0 object-cover"
        />

        <div className="relative z-20">
          <h3 className="font-bold text-lg md:text-3xl mb-1 md:mb-5">
            {title}
          </h3>
          <p
            className="font-normal text-xs md:text-base text-gray-200 leading-6"
            dangerouslySetInnerHTML={{ __html: sanizitizedDescription }}
          />
        </div>
      </div>
    </div>
  );
}

export default JourneyCard;
