import { Box, Button, CircularProgress, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState, type FormEvent } from "react";
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
import { data, Form, useNavigate } from 'react-router-dom';
import { FaArrowRightLong, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { CART_URLs, ORDER_URLs } from "../../../../Constants/END_POINTS";
import axios from "axios";
import { CiCreditCard1 } from "react-icons/ci";
import { AddressElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import type { Token } from "@stripe/stripe-js";

export default function Login() {
  let navigate = useNavigate()

  let { cartItems, cartID, isLoading, getCartItems, addToCart, removeFromCart, deleteProduct }: any = useContext(CartContext);

  let books = JSON.parse(String(localStorage.getItem('books')))

  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];

  const accessToken = localStorage.getItem('accessToken');

  let consolidatedBooks = cartItems?.map((cartItem: any) => {
    let bookIndex = books.findIndex((book: BooksType) => book._id == cartItem.book); // handle both structures

    let book = books[bookIndex];
    let totalCost = cartItem.quantity * book.price

    return {
      _id: book._id,
      name: book.name,
      price: book.price,
      count: cartItem.quantity,
      index: bookIndex,
      totalPrice: totalCost
    };
  })


  let subtotal = 0;
  if (consolidatedBooks) {
    consolidatedBooks.forEach((book: { count: number; price: number; }) => {
      subtotal += book.count * book.price
    });
  }

  const [paymentMethod, setPaymentMethod] = useState('cash');


  let stripe = useStripe()
  let elements = useElements()

  let handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // let cardElement = elements.getElement(CardElement);
    // let addressElement = elements.getElement(AddressElement);

    // if ((!cardElement && paymentMethod=='credit') || !addressElement) {
    //   return;
    // }

    // let address = await addressElement.getValue();

    // let { error, token } = await stripe.createToken(cardElement!); //The '!' means:I know this is not null

    // if (error) {
    //   toast.error(error.message);
    //   return;
    // }

    // if (!token) {
    //   console.error("Token creation failed and no error returned.");
    //   toast.error("Something went wrong. Please try again.");
    //   return;
    // }

    let cardElement = elements.getElement(CardElement);
let addressElement = elements.getElement(AddressElement);

// Guard: address must exist for both payment methods
if (!addressElement) {
  toast.error("Please enter a valid address.");
  return;
}

const address = await addressElement.getValue();

if (!address.complete) {
  toast.error("Please complete your address.");
  return;
}

let tokenID = null;

if (paymentMethod === 'credit') {
  if (!cardElement) {
    toast.error("Card information is missing.");
    return;
  }

  let { error, token} = await stripe.createToken(cardElement);

  if (error) {
    toast.error(error.message);
    return;
  }

  if (!token) {
    console.error("Token creation failed and no error returned.");
    toast.error("Something went wrong. Please try again.");
    return;
  }

  tokenID = "tok_visa";
} else {
  // For Cash on Delivery, you can use a placeholder token or skip
  tokenID = "cash_on_delivery";
}

    // if (address.complete) {
      let id = cartID;
      let data = {
        token: "tok_visa",
        delivery_address: {
          country: address.value.address.country,
          city: address.value.address.city,
          state: address.value.address.state,
          building: 5,
          street: "ayhaga",
          floor: 1,
          appartment: 1,
          mobile: address.value.phone,
          additional_info: "aa",
          location: {
            "type": "Point",
            "coordinates": [30.0444, 31.2357]

          }
        }
      }

      try {
        let response = await axios.post(`${ORDER_URLs.ceateOrder}/${id}`, data, { headers: { Authorization: `Bearer ${accessToken}` } });
        let orderID = response.data.data._id;
        let totalPrice = response.data.data.total;
        console.log(response)
        navigate('/dashboard/confirmation', { state: { orderID, totalPrice } })
        getCartItems();

      } catch (error) {
        console.log(error)
      }
    // }


  }

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
                  <TableCell sx={{ border: 'none', lineHeight: '5px', color: 'navy', fontSize: '18px' }} align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ border: ' none' }}>
                {consolidatedBooks ? consolidatedBooks.map((book: any) => (
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
                        <Button onClick={() => (removeFromCart(book))} variant="contained" className="countBtn" sx={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', padding: '0px', bgcolor: 'navy', minWidth: '10px', width: '2vw', maxWidth: '2vw' }}>-</Button>
                        <Box sx={{ px: 1, color: 'black' }}>{book.count}</Box>
                        <Button onClick={() => (addToCart(book))} variant="contained" className="countBtn" sx={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', padding: '0px', bgcolor: 'navy', minWidth: '10px', width: '2vw', maxWidth: '2vw' }}>+</Button>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: 'navy', fontSize: '1em', border: 'none' }} align="center">{`$ ${book.price}`}</TableCell>
                    <TableCell sx={{ color: 'navy', fontSize: '1em', border: 'none' }} align="center">{`$ ${book.totalPrice}`}</TableCell>
                    <TableCell sx={{ color: 'navy', fontSize: '1em', border: 'none' }} align="center"><MdDeleteOutline size={25} color="#ED553B" className="cursor-pointer" onClick={() => (deleteProduct(book))} /></TableCell>
                  </TableRow>
                ))
                  : <Typography variant="h6" sx={{ marginTop: '20px' }}>Your shopping cart is empty!</Typography>}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 7, md: 3.5 }} sx={{ marginX: 'auto', height: 'fit-content' }}>

          {consolidatedBooks &&
            <Box className='ver-cart-container'>
              <Typography sx={{ color: 'navy', textTransform: 'capitalize', fontSize: '20px', marginBottom: '20px' }}>Total Cost</Typography>

              <Divider sx={{ bgcolor: 'navy', opacity: '1' }} />

              <Grid container spacing={2} marginTop={"30px"} fontSize={{ xs: '4vw', md: '1.6vw' }} color={'navy'}>
                <Grid size={6}>Subtotal</Grid>
                <Grid size={6} sx={{ textAlign: 'end' }}>{`$${subtotal}`}</Grid>
              </Grid>

              <Grid container spacing={2} marginTop={"30px"} fontSize={{ xs: '4vw', md: '1.6vw' }} color={'navy'}>
                <Grid size={6}>Shipping</Grid>
                <Grid size={6} sx={{ textAlign: 'end' }}>$10</Grid>
              </Grid>

              <Grid container spacing={2} marginTop={"30px"} fontSize={{ xs: '4vw', md: '1.6vw' }} color={'navy'}>
                <Grid size={6}>Total</Grid>
                <Grid size={6} sx={{ textAlign: 'end' }}>{`$${subtotal + 10}`}</Grid>
              </Grid>
            </Box>}

        </Grid>
      </Grid>

      {consolidatedBooks &&
        <form onSubmit={handleSubmit}>
          <Grid width={'50%'} marginX={'20px'} marginY={'40px'}>
            <Grid className='cart-container' size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" marginBottom={"20px"}>Payment Info</Typography>

              <Grid>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'navy', fontSize: '20px', mt: '20px', mb: '10px', '&.Mui-focused': { color: 'navy' } }}>Payment Method:</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={paymentMethod}
                    defaultValue={'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel sx={{ color: 'navy' }} value="cash" control={<Radio sx={{ color: 'navy', '&.Mui-checked': { color: 'navy' } }} />} label="Cash on Delivery" />
                    <FormControlLabel sx={{ color: 'navy' }} value="credit" control={<Radio sx={{ color: 'navy', '&.Mui-checked': { color: 'navy' } }} />} label="Credit Card" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {paymentMethod == 'credit' &&
                <FormControl sx={{ width: '100%' }}>
                  {/* <Grid size={2}> */}
                  {/* </Grid> */}
                  <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'grey', fontSize: '18px', mt: '20px', mb: '5px', '&.Mui-focused': { color: 'grey' } }}> Card Info:</FormLabel>
                  <CardElement />
                </FormControl>}
            </Grid>
          </Grid>

          <Grid width={'50%'} marginX={'20px'} marginY={'40px'}>
            <Grid className='cart-container' size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" marginBottom={"20px"}>Shipping Data</Typography>

              <AddressElement options={{ mode: 'shipping', fields: { phone: 'always' } }} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ width: '100%' }}>
                <Button type="submit" sx={{ width: '100%', marginTop: '30px', color: 'white', bgcolor: '#ED553B', borderRadius: '5px', paddingX: '30px', paddingY: '18px', fontSize: '15px', marginX: 'auto' }}>Proceed to checkout <FaArrowRightLong className='ms-2' /></Button>
                <Button onClick={() => (navigate('/dashboard'))} sx={{ width: '100%', marginTop: '30px', color: '#ED553B', bgcolor: 'transparent', borderRadius: '5px', paddingX: '30px', paddingY: '18px', fontSize: '15px', marginX: 'auto', border: '1px solid #ED553B' }}>Continue Shopping <FaArrowRightLong className='ms-2' /></Button>
              </Box>

            </Grid>
          </Grid>
        </form>}
    </>
  )
}