import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActionArea, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, Pagination, PaginationItem, Stack, TextField, Typography } from '@mui/material';
import Item from '@mui/material/Box';
import { FaArrowDown, FaMinus, FaPlus } from 'react-icons/fa6';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FiDollarSign } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from 'react-icons/lia';
import book1 from '../../../../assets/book1.png'
import book2 from '../../../../assets/book2.png'
import book3 from '../../../../assets/book3.png'
import book4 from '../../../../assets/book4.png'
import book5 from '../../../../assets/book5.png'
import book6 from '../../../../assets/book6.png'
import book7 from '../../../../assets/book7.png'
import book8 from '../../../../assets/book8.png'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  let navigate  = useNavigate();

  let categories = JSON.parse(String(localStorage.getItem('categories')));
  let books = JSON.parse(String(localStorage.getItem('books')));

  let bookImgs:any=[book1,book2,book3,book4,book5,book6,book7,book8];

  return (
    <>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ padding: '20px' }}>

          <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<FaChevronDown color='navy' />}
            // aria-controls="panel1-content"
            // id="panel1-header"
            >
              <Typography component="span" color='navy' fontWeight='bold'>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Item sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}><FiDollarSign color='navy' /> <TextField sx={{ width: '80%', marginLeft: '5px' }}></TextField> </Item>
                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Typography variant='body1'>to</Typography></Item>
                <Item sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}><FiDollarSign color='navy' /> <TextField sx={{ width: '80%', marginLeft: '5px' }}></TextField> </Item>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<FaChevronDown color='navy' />} >
              <Typography component="span" color='navy' fontWeight='bold'>Price</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ height: '50vh', overflowY: 'auto' }}>
              <FormGroup>
                {categories.map((category: any) => (
                  <FormControlLabel key={category._id} control={<Checkbox color='default' sx={{ color: 'navy' }} />} label={category.title} />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

        </Grid>

        <Grid size={{ xs: 12, md: 9 }} sx={{ padding: '20px' }}>

          <Grid container spacing={2}>
            {books.map((book:any, index:number)=>(
                <Grid key={book._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{margin:'auto'}}>
                  <Item>
                    <Card sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none', bgcolor: 'transparent' }} onClick={()=>{navigate(`/dashboard/books/${book._id}`)}}>
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
                              target.src = bookImgs[index%8];
                            }}
                            sx={{ padding: '12%', bgcolor: 'white' }}
                          />

                          <Box
                            className="add-to-cart-overlay"
                            onClick={(e) => {
                              e.stopPropagation(); // prevent parent click
                              // {navigate('/')}
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
                  </Item>
                </Grid>
            ))}
            {books.map((book:any, index:number)=>(
                <Grid key={book._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{margin:'auto'}} onClick={()=>{navigate(`/dashboard/books/${book._id}`)}}>
                  <Item>
                    <Card sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none', bgcolor: 'transparent' }}>
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
                              target.src = bookImgs[index%8];
                            }}
                            sx={{ padding: '12%', bgcolor: 'white' }}
                          />

                          <Box
                            className="add-to-cart-overlay"
                            onClick={(e) => {
                              e.stopPropagation(); // prevent parent click
                              // {navigate('/')}
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
                  </Item>
                </Grid>
            ))}
          </Grid>

          <Stack spacing={2} sx={{ width: 'fit-content', margin:'auto' }}>
            <Pagination sx={{ width: 'fit-content', marginLeft: 'auto' }}
              count={5}
              renderItem={(item) => (
                <PaginationItem sx={{ width: 'fit-content', marginLeft: 'auto' }}
                  slots={{ previous: () => <LiaArrowAltCircleLeft size={35} color='#ED553B' />, next: () => <LiaArrowAltCircleRight size={35} color='#ED553B' /> }}
                  {...item}
                />
              )}
            />
          </Stack>

        </Grid>

      </Grid>
    </>
  )
}