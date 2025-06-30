import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {useNavigate } from "react-router-dom";
import slider1 from '../../../../assets/slider1-img1.png'
import slider2 from '../../../../assets/slider1-img2.png'
import slider3 from '../../../../assets/slider1-img3.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import {BsArrowRight} from "react-icons/bs";
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from 'react-icons/lia';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import Item from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_BOOKS, BASE_CATEG } from '../../../../Constants/END_POINTS';
import categImg1 from '../../../../assets/slider2-img1.jpg'
import categImg2 from '../../../../assets/slider2-img2.jpg'
import categImg3 from '../../../../assets/slider2-img3.jpg'
import categImg4 from '../../../../assets/slider2-img4.jpg'
import categImg5 from '../../../../assets/slider2-img5.jpg'
import categImg6 from '../../../../assets/slider2-img6.jpg'
import saleImg from '../../../../assets/sale.png'
import articleImg1 from '../../../../assets/article1.jpg'
import articleImg2 from '../../../../assets/article2.jpg'
import articleImg3 from '../../../../assets/article3.jpg'
import book1 from '../../../../assets/book1.png'
import book2 from '../../../../assets/book2.png'
import book3 from '../../../../assets/book3.png'
import book4 from '../../../../assets/book4.png'
import book5 from '../../../../assets/book5.png'
import book6 from '../../../../assets/book6.png'
import book7 from '../../../../assets/book7.png'
import book8 from '../../../../assets/book8.png'
import { IoIosMail } from "react-icons/io";
import type { BooksType, CategoriesType } from '../../../../Constants/INTERFACES';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { CartContext } from '../../../../Contexts/CartContext/CartContext';


export default function Login() {

  let navigate = useNavigate()

  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];

  let [categories, setCategories] = useState<CategoriesType[] | null>([]);
  let [books, setBooks] = useState<BooksType[] | null>([]);
  let [book, setBook] = useState<BooksType[] | null>([]);

  const [categLoading, setCategLoading] = useState<boolean>(true);
  const [booksLoading, setBooksLoading] = useState<boolean>(true);
  const [bookLoading, setBookLoading] = useState<boolean>(true);

  let getCategories = async () => {
    let response = await axios.get(`${BASE_CATEG}`);
    setCategories(response.data);
    localStorage.setItem('categories', JSON.stringify(response.data))
    setCategLoading(false);
  }

  let getBooks = async () => {
    let response = await axios.get(`${BASE_BOOKS}`);
    setBooks(response.data.data);
    localStorage.setItem('books', JSON.stringify(response.data.data))
    setBooksLoading(false);
  }

  let getBookDetails = async () => {
    setBook(JSON.parse(String(localStorage.getItem('books'))))
    setBookLoading(false);
  }

  useEffect(() => {
    getCategories();
    getBooks();
    getBookDetails();
  }, [])

  const swiper1Imgs = [slider1, slider2, slider3];
  const categoryImages = [categImg1, categImg2, categImg3, categImg4, categImg5, categImg6];

  let endDate = new Date('2025-12-31T23:59:59');
  let calculateTimeLeft = () => {
    let remainder = +endDate - +new Date();

    let timeLeft = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    };

    if (remainder > 0) {
      timeLeft = {
        days: String(Math.floor(remainder / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor((remainder / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((remainder / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((remainder / 1000) % 60)).padStart(2, '0'),
      }
    }
    return timeLeft;
  }

  let [remainingTime, setRemainingTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {  // this function updates the countdown every second.
      setRemainingTime(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: 'DAYS', value: remainingTime.days },
    { label: 'HOUR', value: remainingTime.hours },
    { label: 'MINT', value: remainingTime.minutes },
    { label: 'SEC', value: remainingTime.seconds },
  ];


  const articlesImgs = [articleImg1, articleImg2, articleImg3];

  let { addToCart, isLoading }: any = useContext(CartContext);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(148, 148, 148, 0.7)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Container className='loading'></Container>
        </Box>
      )}
      <Swiper className='swiper1 mt-0'
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
        {swiper1Imgs.map((img) => (
          <SwiperSlide className='p-5'>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Item sx={{ width: '40%', order: { xs: 2, md: 1 } }}>
                <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium'>ipsum dolor si</Typography>
                <Typography variant="body1" className='navBar-color mt-3 fs-5' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
                <Button onClick={() => { navigate('/dashboard/books') }} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color'>Read More <BsArrowRight className='ms-2' /></Button>
              </Item>
              <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
                <img src={img} alt="" className='w-75' />
              </Item>
            </Box>
          </SwiperSlide>
        ))}


        <LiaArrowAltCircleLeft className="arrow swiper-button-prev z-10 cursor-pointer ms-5" color='rgb(239,107,74)' />
        <LiaArrowAltCircleRight className="arrow swiper-button-next z-10 cursor-pointer me-5" color='rgb(239,107,74)' />
      </Swiper>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6%' }}>
          <Item>
            <Typography variant='body1' className='categs-sec-title orange-text position-relative ms-5 fw-bold'>Categories</Typography>
            <Typography component='h4' variant='h4' className='navBar-color fw-bold'>Explore our Top Categories</Typography>
          </Item>

          <Item>
            <HiOutlineArrowNarrowLeft className='categs-swiper-arrow categs-swiper-left me-3 fs-1 bg-white p-2 border border-1 border-secondary text-secondary rounded-circle' />
            <HiOutlineArrowNarrowRight className='categs-swiper-arrow categs-swiper-right fs-1 bg-white p-2 border border-1 border-secondary text-secondary rounded-circle' />
          </Item>
        </Box>

        <Box sx={{ minHeight: '200px' }}>
          {categLoading ? <Container className='loading'></Container> :
            <Swiper className='swiper2 mx-auto'
              loop={true}
              navigation={{
                enabled: true,
                nextEl: '.categs-swiper-right',
                prevEl: '.categs-swiper-left',
              }}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                960: {
                  slidesPerView: 3,
                  spaceBetween: 50
                }
              }}

            >

              {categories?.map((category, index: number) => (
                <SwiperSlide className='categ-slider' onClick={()=>(navigate('/dashboard/books', { state: { categoryId: category._id } }))}>
                  <Card key={category._id} sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none' }}>
                    <CardActionArea >
                      <CardMedia
                        component="img"
                        height="200"
                        width='100%'
                        image={categoryImages[index % 6]}
                        alt="categ img"
                        sx={{ borderRadius: '10px' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className='navBar-color text-center text-capitalize'>{category.title}</Typography>

                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </Box>

        <Button onClick={() => { navigate('/dashboard/categories') }} variant="outlined" color='inherit' sx={{ marginY: '40px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color d-block mx-auto'>View More <BsArrowRight className='ms-2' /></Button>
      </Box>

      <Box sx={{ bgcolor: '#FCECEC', paddingY: '40px', paddingX: '10px', position: 'relative' }}>
        <Typography variant='body2' sx={{ letterSpacing: '1px' }} className='text-uppercase text-center text-secondary'>Some quality items</Typography>
        <Typography variant='h3' className='sec-title text-center navBar-color position-relative my-4 fw-medium'>New Release Books</Typography>


        <Box sx={{ minHeight: '200px' }}>
          {booksLoading ? <Container className='loading'></Container> :
            <Swiper className='swiper3 mx-auto mt-5'
              loop={true}
              pagination={{
                clickable: true,
                type: 'bullets',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                el: '.custom-swiper-pagination'
              }}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                960: {
                  slidesPerView: 4,
                  spaceBetween: 50
                }
              }}
            >
              <Box>

                {books?.slice(0, 8).map((book: BooksType, index) => (
                  <SwiperSlide className='categ-slider' onClick={() => { navigate(`/dashboard/books/${book._id}`) }}>
                    <Card key={book._id} sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none', bgcolor: 'transparent' }}>
                      <CardActionArea>
                        <Box className='book-img-container shadow-sm position-relative'>
                          <Box
                            component="img"
                            height="420px"
                            width="100%"
                            src={book.image}
                            alt="book cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null; // prevent infinite loop
                              target.src = bookImgs[index % 8];
                            }}
                            sx={{ padding: '12%', bgcolor: 'white' }}
                          />

                          <Box
                            className="add-to-cart-overlay"
                            onClick={(e) => {
                              e.stopPropagation(); // prevent parent click
                              addToCart(book);
                            }}
                            sx={{
                              position: 'absolute',
                              width: '85%',
                              height: 'fit-content',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: '#ED553B',
                              color: 'white',
                              padding: '10px',
                              fontWeight: 'bold',
                              fontSize: '20px',
                              textAlign: 'center',
                              opacity: 0,
                              visibility: 'hidden',
                              transition: 'all 0.4s',
                            }}
                          >ADD TO CART</Box>
                        </Box>

                        <CardContent>
                          <Typography gutterBottom variant="h6" className='navBar-color text-center text-capitalize'>{book.name}</Typography>
                          <Typography gutterBottom variant="body2" className='text-center text-capitalize text-secondary'>{book.author}</Typography>
                          <Typography gutterBottom variant="h6" className='orange-text text-center text-capitalize'>{`$ ${book.price}`}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </SwiperSlide>
                ))}
              </Box>
              <Divider sx={{ bgcolor: '#E0E0E0', height: '2px', marginY: '40px' }} />
            </Swiper>
          }
        </Box>

        <Box display="flex" alignItems="center" px={3} position='relative'>
          <Box className="custom-swiper-pagination" />
          <Box display="flex" alignItems="center" sx={{ cursor: 'pointer', marginLeft: 'auto', display: 'flex', alignItems: 'center', maxWidth: '25%' }}>
            <Typography variant="body2" fontWeight="bold" className="text-capitalize orange-text" sx={{ marginLeft: 'auto' }} onClick={() => navigate('/dashboard/books')}>
              View All Products
            </Typography>
            <HiOutlineArrowNarrowRight color="#f44336" style={{ marginLeft: '5px' }} />
          </Box>
        </Box>
      </Box>


      <Box className='swiper4-container' sx={{ paddingY: '40px', paddingX: '10px', position: 'relative', marginY: '50px' }}>

        <Box sx={{ minHeight: '200px' }}>
          {bookLoading ? <Container className='loading'></Container> :
            <Swiper className='swiper4'
              // slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
                type: 'bullets',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                // el: 'swiper-pagination-bullets'
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
              {book?.slice(1, 6).map((b, index) => (
                <>
                  <SwiperSlide key={index} className='w-100 mb-5'>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className='bookImg'
                          src={b.image}
                          alt="book cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // prevent infinite loop
                            target.src = bookImgs[index % 8];
                          }}
                        />
                      </Item>
                      <Item sx={{ width: '45%' }}>
                        <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium mb-5'>Featured book</Typography>
                        <Typography variant="body1" className='book-author text-secondary mt-3 text-uppercase position-relative' sx={{ letterSpacing: '2px', lineHeight: '30px', width: 'fit-content', fontSize: '12px' }}>{`by ${b.author}`}</Typography>
                        <Typography variant="h4" component="h4" className='text-capitalize navBar-color fw-medium my-4'>{b.name}</Typography>
                        <Typography variant="body1" className='text-secondary mt-3 fs-6' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>{b.description}</Typography>
                        <Typography variant="h5" component="h5" className='text-capitalize orange-text fw-medium my-5'>$ {b.price}</Typography>
                        <Button onClick={() => { navigate('/dashboard/books'); }} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280', letterSpacing: '2px' }} className='navbar-bg navbar-color'>View More <BsArrowRight className='ms-2' /></Button>
                      </Item>
                    </Box>
                  </SwiperSlide>
                </>
              ))}

              <LiaArrowAltCircleLeft className="arrow swiper-button-prev z-10 cursor-pointer ms-4" color='rgb(239,107,74)' />
              <LiaArrowAltCircleRight className="arrow swiper-button-next z-10 cursor-pointer me-4" color='rgb(239,107,74)' />
            </Swiper>
          }
          {/* <Box className="swiper-pagination-bullets" /> */}
        </Box>

      </Box>


      <Box className='sale-container m-5'>
        <Box className='sale' sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '20px', bgcolor: '#FCEBEA', padding: '50px' }}>
          <Item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '45%' }}>
            <Typography component='h3' variant='h3' className='navBar-color fw-bold'>All books are 50% off now! Don't miss such a deal!</Typography>
            <Typography variant='body1' className='navBar-color my-5 fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</Typography>
            <Grid container spacing={5}>
              {timerItems.map((item, idx) => (
                <Grid key={idx}>
                  <Box textAlign="center">
                    <Typography variant="h4" sx={{ color: '#ED553B', fontWeight: 'bold' }}>
                      {item.value}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ letterSpacing: 1 }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Item>

          <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', marginTop: '30px' }}>
            <img src={saleImg} alt="" className='w-100' />
          </Item>
        </Box>

      </Box>

      <Box className='subscribe-container' sx={{ bgcolor: '#FCEBEA', padding: '50px', paddingTop: '0px' }}>
        <Box sx={{ bgcolor: '#ED553B', minHeight: '300px' }} className='text-center text-white p-5 position-relative'>
          <Typography component='h3' variant='h3' className='fw-bold'>Subscibe to Our Newsletter</Typography>
          <Typography variant='body1' sx={{ width: '45%', margin: 'auto', marginY: '30px', letterSpacing: '1px' }}>Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</Typography>

          <Box sx={{ position: 'absolute', bgcolor: 'white', paddingY: '10px', paddingX: '20px', left: '50%', translate: '-50%', top: '85%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: '0', width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' } }}>
            <Item><IoIosMail color='#DFDFDF' size={40} className='border border1 border-light p-1' /></Item>
            <Item sx={{ width: '70%' }}><TextField label="Enter your email" sx={{ '& fieldset': { border: 'none' }, width: '100%' }} /></Item>
            <Item><Button className='text-uppercase px-5 py-3' sx={{ bgcolor: '#ED553B', borderRadius: '0', color: 'white' }}>subscribe</Button></Item>
          </Box>
        </Box>
      </Box>

      <Box className='articles-container my-5 p-4' sx={{ bgcolor: '#F7FCFC' }}>
        <Typography variant='body2' sx={{ textAlign: 'center', color: '#7A7A7A' }} className='text-uppercase'>Read our articles</Typography>
        <Typography variant='h3' className='sec-title position-relative' sx={{ textAlign: 'center', color: '#173F5F', marginY: '20px', fontSize: '3rem' }}>Latest Articles</Typography>

        <Grid container spacing={5} sx={{ width: '90%', margin: 'auto' }}>
          {articlesImgs.map((img, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Item>
                <Box sx={{ height: '320px', maxHeight: 'fit-content', overflow: 'hidden', bgcolor: '#C8C8C8' }} ><img src={img} alt="" className='w-100' /></Box>
                <Typography variant='body2' className='text-secondary my-3'>2 Aug, 2021</Typography>
                <Typography variant='h5' sx={{ lineHeight: '40px' }} className='navBar-color text-capitalize'>Reading books always makes the moments happy</Typography>
                <Divider sx={{ bgcolor: 'grey', height: '1px', marginY: '20px' }} />
                <Box sx={{ width: 'fit-content', marginLeft: 'auto' }}>
                  <FaFacebookF className='navBar-color me-3' />
                  <FaTwitter className='navBar-color me-3' />
                  <IoLogoInstagram className='navBar-color me-3' />
                </Box>
              </Item>
            </Grid>
          ))}

        </Grid>
        <Button variant="outlined" color='inherit' sx={{ marginY: '50px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280' }} className='navbar-bg navbar-color d-block mx-auto rounded-0'>read all articles <BsArrowRight className='ms-2' /></Button>
      </Box >

    </>

  )
}
