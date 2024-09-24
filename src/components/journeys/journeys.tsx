"use client";
import {
  Autoplay,
  Navigation,
  Pagination as SwiperPagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import JourneyCard from "../journeyCard";
import { journeys } from "@/data/journey";

function Journeys() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      rewind={true}
      navigation={true}
      modules={[Autoplay, SwiperPagination, Navigation]}
      className="mySwiper h-full"
    >
      {journeys.map((journey) => (
        <SwiperSlide key={journey.id} className="cursor-grab">
          <JourneyCard journey={journey} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Journeys;
