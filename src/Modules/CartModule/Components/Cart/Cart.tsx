import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext } from "react";
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

export default function Login() {
  let { cartItems }: any = useContext(CartContext) || [];
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

  // console.log(consolidatedBooks[0].name)

  return (
    <>
      <Grid container spacing={1} sx={{ margin: '20px' }}>
        <Grid className='cart-container' size={{ xs: 12, md: 8 }}>
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
                    {/* <TableCell sx={{color:'navy', width:'40%'}} align="center">
                      <Grid container spacing={1} alignItems={"center"}>
                        <Grid size={6}><img src={bookImgs[book.index%8]} alt="book img" className="w-50 text-center"/></Grid>
                        <Grid size={6} sx={{textTransform:'capitalize', fontSize:'20px'}}>{book.name}</Grid>
                      </Grid>
                    </TableCell>
                    <TableCell sx={{color:'navy'}} align="center">{book.count}</TableCell>
                    <TableCell sx={{color:'navy'}} align="center">{`$ ${book.price}`}</TableCell>
                    <TableCell sx={{color:'navy'}} align="center">{`$ ${book.totalPrice}`}</TableCell> */}
                    <Grid container alignItems="center" spacing={1}>
                      <Grid>
                        <Typography>01.</Typography>
                      </Grid>

                      <Grid>
                        <img src={bookImgs[book.index % 8]} alt="book" style={{ width: '60px', height: 'auto' }} />
                      </Grid>

                      <Grid>
                        <Typography sx={{ fontWeight: 'bold' }}>{book.name}</Typography>
                      </Grid>

                      <Grid>
                        {/* Quantity control */}
                        <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '6px', overflow: 'hidden' }}>
                          <Button variant="contained">-</Button>
                          <Box sx={{ px: 1, backgroundColor: '#fff', color: 'black' }}>{book.count}</Box>
                          <Button variant="contained">+</Button>
                        </Box>
                      </Grid>

                      <Grid >
                        <Typography>{book.price} AED</Typography>
                      </Grid>

                      <Grid >
                        <Typography>{book.totalPrice} AED</Typography>
                      </Grid>

                      <Grid >
                        <IconButton>
                          {/* <CloseIcon /> */}
                        </IconButton>
                      </Grid>
                    </Grid>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}