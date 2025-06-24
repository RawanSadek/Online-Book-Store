import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Item from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import book1 from '../../../../assets/book1.png'
import book2 from '../../../../assets/book2.png'
import book3 from '../../../../assets/book3.png'
import book4 from '../../../../assets/book4.png'
import book5 from '../../../../assets/book5.png'
import book6 from '../../../../assets/book6.png'
import book7 from '../../../../assets/book7.png'
import book8 from '../../../../assets/book8.png'
import { useContext } from 'react';
import { CartContext } from '../../../../Contexts/CartContext/CartContext';

export default function Book() {
  const { bookId } = useParams();

  let { addToCart, isLoading }: any = useContext(CartContext);

  let books = JSON.parse(String(localStorage.getItem('books')));

  let bookDetails = books.find((book: any) => book._id === bookId);
  let bookIdx = books.findIndex((book: any) => book._id === bookId);
  console.log(bookIdx)
  // console.log(typeof books[0]., typeof bookId);

  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];


  // console.log(bookId)
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
      <Grid container spacing={2} padding={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box
              component="img"
              height="500px"
              width="50%"
              src={bookDetails.image}
              alt="book cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // prevent infinite loop
                target.src = bookImgs[bookIdx % 8];
              }}
              sx={{ padding: '3%', bgcolor: 'white' }}
            />
          </Item>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
          <Item >
            <Typography variant="h2" component="h3" className='text-capitalize navBar-color fw-medium'>Featured book</Typography>
            <Typography variant="body1" className='book-author text-secondary mb-3 text-uppercase position-relative' sx={{ letterSpacing: '2px', lineHeight: '30px', fontSize: '12px', width: 'fit-content' }}>{`by ${bookDetails.author}`}</Typography>
            <Typography variant="h4" component="h4" className='text-capitalize navBar-color fw-medium mt-2'>{bookDetails.name}</Typography>
            <Typography variant="body1" className='text-secondary mb-3 fs-6' sx={{ letterSpacing: '2px', lineHeight: '30px' }}>{bookDetails.description}</Typography>
            <Typography variant="h5" component="h5" className='text-capitalize orange-text fw-medium my-2'>$ {bookDetails.price}</Typography>
            <Button onClick={() => (addToCart(bookDetails))} variant="outlined" color='inherit' sx={{ marginTop: '20px', fontWeight: '400', padding: '12px 30px', fontSize: '13px', color: '#393280', letterSpacing: '2px' }} className='navbar-bg navbar-color'>add to cart <LiaShoppingBagSolid /></Button>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}
