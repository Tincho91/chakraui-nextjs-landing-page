import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Box, useBreakpointValue, Flex } from "@chakra-ui/react";
import { FreeMode, Pagination, EffectCoverflow } from "swiper";

const FreeModeCarousel = ({ images }) => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box w="100%">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={50}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, EffectCoverflow]}
        className="mySwiper"

      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              as="img"
              src={image.src}
              alt={image.alt}
              borderRadius="3xl"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FreeModeCarousel;
