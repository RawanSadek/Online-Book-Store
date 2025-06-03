// import "swiper/css/bundle";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/swiper/swiper-bundle.min.css'
import '../../../../../node_modules/swiper/swiper-bundle.min.css'

// import { Navigation, Pagination } from 'swiper';
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Shared/Components/NavBar/NavBar";

export default function Login() {
  let navigate = useNavigate()
  return (
    <>
    <div><NavBar /></div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}