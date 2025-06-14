import { Box, Button, Divider, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../Contexts/CartContext/CartContext";
import Paper from '@mui/material/Paper';
import type { BooksType } from "../../../../Constants/INTERFACES";
import book1 from '../../../../assets/book1.png'
import book2 from '../../../../assets/book2.png'
import book3 from '../../../../assets/book3.png'
import book4 from '../../../../assets/book4.png'
import book5 from '../../../../assets/book5.png'
import book6 from '../../../../assets/book6.png'
import book7 from '../../../../assets/book7.png'
import book8 from '../../../../assets/book8.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong, FaMinus } from "react-icons/fa6";

export default function Login() {
  let { cartItems, addToCart, removeFromCart }: any = useContext(CartContext) || [];
  let books = JSON.parse(String(localStorage.getItem('books')))

  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];

  let consolidatedBooks = cartItems.reduce((acc: any[], book: BooksType) => {
    let existing = acc.find((item) => item._id === book._id);
    if (existing) {
      existing.count += 1;
      existing.totalPrice += book.price;
    } else {
      let bookIdx = books.findIndex((b: BooksType) => b._id === book._id);
      acc.push({
        _id: book._id,
        name: book.name,
        price: book.price,
        count: 1,
        index: bookIdx,
        totalPrice: book.price
      });
    }
    return acc;
  }, []);


  // let [updatedBooks, setUpdatedBooks] = useState(consolidatedBooks)

  let incrementCount = (_id: string) => {
    let updatedBookList = consolidatedBooks.map((b: { _id: String; count: number; }) =>
      b._id == _id ? { ...b, count: b.count + 1 } : b
    );

    let updatedBook = updatedBookList.find((b: { _id: string; }) => b._id == _id);
    addToCart(updatedBook);
  };

  let decrementCount = (_id: string) => {
    let updatedBookList = consolidatedBooks.map((b: { _id: String; count: number; }) =>
      b._id == _id ? { ...b, count: b.count - 1 } : b
    );

    let updatedBook = updatedBookList.find((b: { _id: string; }) => b._id == _id);
    removeFromCart(updatedBook)
  };

  // useEffect(() => {
  //   setUpdatedBooks(cartItems);
  // }, []);

  return (
    <>
      <Grid container spacing={5} sx={{ margin: '20px' }}>
        <Grid className='cart-container' size={{ xs: 12, md: 7 }}>
          <Typography sx={{ color: 'navy', textTransform: 'capitalize', fontSize: '20px', marginBottom: '20px' }}>cart details</Typography>

          <TableContainer sx={{ border: ' none' }}>
            <Table>
              <TableHead sx={{ borderBottom: '1px solid navy', borderTop: '1px solid navy' }}>
                <TableRow >
                  <TableCell sx={{ border: 'none', lineHeight: '5px', color: 'navy', fontSize: '18px' }} align="center">Book</TableCell>
                  <TableCell sx={{ border: 'none', lineHeight: '5px', color: 'navy', fontSize: '18px' }} align="center">Count</TableCell>
                  <TableCell sx={{ border: 'none', lineHeight: '5px', color: 'navy', fontSize: '18px' }} align="center">Price</TableCell>
                  <TableCell sx={{ border: 'none', lineHeight: '5px', color: 'navy', fontSize: '18px' }} align="center">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ border: ' none' }}>
                {consolidatedBooks.map((book: any) => (
                  <TableRow
                    key={book._id}
                    sx={{ border: ' none' }}
                  >
                    <TableCell sx={{ color: 'navy', width: '30%', border: 'none' }} align="center">
                      <Grid container spacing={1} alignItems={"center"}>
                        <Grid size={6}><img src={bookImgs[book.index % 8]} alt="book img" className="text-center" style={{ width: '70%' }} /></Grid>
                        <Grid size={6} sx={{ textTransform: 'capitalize', fontSize: { xs: '.7rem', sm: '1rem', md: '1.5rem' } }}>{book.name}</Grid>
                      </Grid>
                    </TableCell>
                    <TableCell sx={{ color: 'navy', border: 'none' }} align="center">
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <Button onClick={() => (decrementCount(book._id))} variant="contained" className="countBtn" sx={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', padding: '0px', bgcolor: 'navy', minWidth: '10px', width: '2vw', maxWidth: '2vw' }}>-</Button>
                        <Box sx={{ px: 1, color: 'black' }}>{book.count}</Box>
                        <Button onClick={() => (incrementCount(book._id))} variant="contained" className="countBtn" sx={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', padding: '0px', bgcolor: 'navy', minWidth: '10px', width: '2vw', maxWidth: '2vw' }}>+</Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: 'navy', fontSize: '1em', border: 'none' }} align="center">{`$ ${book.price}`}</TableCell>
                    <TableCell sx={{ color: 'navy', fontSize: '1em', border: 'none' }} align="center">{`$ ${book.totalPrice}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 7, md: 3.5 }} sx={{ marginX: 'auto', height:'fit-content' }}>

          <Box className='ver-cart-container'>
          <Typography sx={{ color: 'navy', textTransform: 'capitalize', fontSize: '20px', marginBottom: '20px' }}>Total Cost</Typography>

          <Divider sx={{ bgcolor: 'navy', opacity: '1' }} />

          <Grid container spacing={2} marginTop={"30px"} fontSize={'1.7rem'} color={'navy'}>
            <Grid size={6}>Subtotal</Grid>
            <Grid size={6} sx={{ textAlign: 'end' }}>Subtotal</Grid>
          </Grid>

          <Grid container spacing={2} marginTop={"30px"} fontSize={'1.7rem'} color={'navy'}>
            <Grid size={6}>Shipping</Grid>
            <Grid size={6} sx={{ textAlign: 'end' }}>Shipping</Grid>
          </Grid>

          <Grid container spacing={2} marginTop={"30px"} fontSize={'1.7rem'} color={'navy'}>
            <Grid size={6}>Total</Grid>
            <Grid size={6}sx={{ textAlign: 'end' }}>Total</Grid>
          </Grid>
          </Box>

<Box sx={{textAlign:'center'}}>

          <Button sx={{marginTop:'30px', color:'white', bgcolor:'#ED553B', borderRadius:'0px', paddingX:'30px', paddingY:'20px', fontSize:'12px', marginX:'auto'}}>Proceed to checkout <FaArrowRightLong className='ms-2'/></Button>
</Box>
        </Grid>
      </Grid>
    </>
  )
}