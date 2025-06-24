import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActionArea, CardContent, Checkbox, Container, FormControlLabel, FormGroup, Grid, Pagination, PaginationItem, Slider, Stack, TextField, Typography } from '@mui/material';
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
import { CartContext } from '../../../../Contexts/CartContext/CartContext';
import { useContext, useEffect, useState } from 'react';
import type { BooksType } from '../../../../Constants/INTERFACES';

export default function Login() {

  let navigate = useNavigate();

  let categories = JSON.parse(String(localStorage.getItem('categories')));
  let books = JSON.parse(String(localStorage.getItem('books')));

  let [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategories, setSelectedCategories] = useState([]);

  let filterByCategories = (categID: String) => {
    let filtered = books.filter((book: BooksType) => book.category == categID)
    setFilteredBooks(filtered);
  }



  //   if (e.target.checked) {
  //   setSelectedCategories((prev) => [...prev, categID]);
  // } else {
  //   setSelectedCategories((prev) =>
  //     prev.filter((c) => c !== categID)
  //   );
  // }

  //   useEffect(() => {
  //   fetchBooks(selectedCategories);
  // }, [selectedCategories]);

  //   const handleCategoryChange = (event, category) => {
  //   setPage(1); // reset to first page when filters change

  //   if (event.target.checked) {
  //     setSelectedCategories((prev) => [...prev, category]);
  //   } else {
  //     setSelectedCategories((prev) =>
  //       prev.filter((c) => c !== category)
  //     );
  //   }
  // };

  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];

  let { addToCart, isLoading }: any = useContext(CartContext);

  let minPrice = 0; let maxPrice = 1000

  // const [value, setValue] = useState<number[]>([minPrice, maxPrice]);

  

  // function valuetext(value: number) {
  //   return `$${value}`;
  // }

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleChange = (e: Event, newValue: number[]) => {
    setPriceRange(newValue);
  };

  let filterByPrice = () => {
      const [min, max] = priceRange;
      const filtered = books.filter((book:any) => book.price >= min && book.price <= max);
      setFilteredBooks(filtered);
    };

    useEffect(() => {
  filterByPrice();
}, []);
  

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
              <Box sx={{ width: '100%' }}>
                <Slider min={0} max={1000} value={priceRange} onChange={handleChange} onChangeCommitted={filterByPrice} valueLabelDisplay="auto" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color='grey'>${minPrice}</Typography>
                  <Typography variant="body2" color='grey'>${maxPrice}</Typography>
                </Box>
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
                  <FormControlLabel key={category._id} control={<Checkbox onChange={() => (filterByCategories(category._id))} /*checked={selectedCategories.includes(category._id)}*/ color='default' sx={{ color: 'navy' }} />} label={category.title} />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

        </Grid>

        <Grid size={{ xs: 12, md: 9 }} sx={{ padding: '20px' }}>

          <Grid container spacing={2}>
            {filteredBooks.map((book: BooksType, index: number) => (
              <Grid key={book._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{ margin: 'auto' }}>
                <Card sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none', bgcolor: 'transparent' }} onClick={() => { navigate(`/dashboard/books/${book._id}`) }}>
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
              </Grid>
            ))}
            {filteredBooks.map((book: BooksType, index: number) => (
              <Grid key={book._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{ margin: 'auto' }} onClick={() => { navigate(`/dashboard/books/${book._id}`) }}>
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
              </Grid>
            ))}
          </Grid>

          <Stack spacing={2} sx={{ width: 'fit-content', margin: 'auto' }}>
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
