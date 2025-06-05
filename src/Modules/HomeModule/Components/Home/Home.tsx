import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Shared/Components/NavBar/NavBar";
import slider1 from '../../../../assets/slider1-img1.png'
import slider2 from '../../../../assets/slider1-img2.png'
import slider3 from '../../../../assets/slider1-img3.png'
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { BsArrowRight } from "react-icons/bs";
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from 'react-icons/lia';
import { Box, Button, Typography } from '@mui/material';
import Item from '@mui/material/Box';

export default function Login() {
  let navigate = useNavigate()
  return (
    <div>
      <div><NavBar /></div>
      <Swiper className='swiper1 p-5'
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        navigation={{
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Item sx={{ width: '40%', order: { xs: 2, md: 1 } }}>
              <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium'>ipsum dolor si</Typography>
              <Typography variant="body1" className='navBar-color mt-3 fs-5' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button onClick={()=>{navigate('products')}} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color'>Read More <BsArrowRight className='ms-2' /></Button>
            </Item>
            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
              <img src={slider1} alt="" className='w-75' />
            </Item>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Item sx={{ width: '40%', order: { xs: 2, md: 1 } }}>
              <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium'>ipsum dolor si</Typography>
              <Typography variant="body1" className='navBar-color mt-3 fs-5' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button onClick={()=>{navigate('products')}} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color'>Read More <BsArrowRight className='ms-2' /></Button>
            </Item>
            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
              <img src={slider1} alt="" className='w-75' />
            </Item>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Item sx={{ width: '40%', order: { xs: 2, md: 1 } }}>
              <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium'>ipsum dolor si</Typography>
              <Typography variant="body1" className='navBar-color mt-3 fs-5' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button onClick={()=>{navigate('products')}} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color'>Read More <BsArrowRight className='ms-2' /></Button>
            </Item>
            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
              <img src={slider1} alt="" className='w-75' />
            </Item>
          </Box>
        </SwiperSlide>


        <LiaArrowAltCircleLeft className="arrow swiper-button-prev z-10 cursor-pointer ms-5" color='rgb(239,107,74)' />
        <LiaArrowAltCircleRight className="arrow swiper-button-next z-10 cursor-pointer me-5" color='rgb(239,107,74)' />
      </Swiper>


    </div>

  )
}