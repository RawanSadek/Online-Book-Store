import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardActionArea, CardContent, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Pagination, Select, Slider, Typography } from '@mui/material';
import { FaChevronDown } from "react-icons/fa";
import book1 from '../../../../assets/book1.png'
import book2 from '../../../../assets/book2.png'
import book3 from '../../../../assets/book3.png'
import book4 from '../../../../assets/book4.png'
import book5 from '../../../../assets/book5.png'
import book6 from '../../../../assets/book6.png'
import book7 from '../../../../assets/book7.png'
import book8 from '../../../../assets/book8.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../../Contexts/CartContext/CartContext';
import { useContext, useEffect, useState } from 'react';
import type { BooksType } from '../../../../Constants/INTERFACES';

export default function Login() {

  let navigate = useNavigate();
  let bookImgs: any = [book1, book2, book3, book4, book5, book6, book7, book8];

  let categories = JSON.parse(String(localStorage.getItem('categories')));
  let books = JSON.parse(String(localStorage.getItem('books')));
  books = books.map((book: BooksType, index: number) => ({ ...book, image: bookImgs[index % 8] }))

  let { addToCart, isLoading }: any = useContext(CartContext);

  let minPrice = 0; let maxPrice = 1000
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  let [filteredByPrice, setFilteredByPrice] = useState(books);
  const handlePriceRangeChange = (e: Event, newValue: number[]) => {
    setPriceRange(newValue);
    console.log(e)
  };

  let filterByPrice = () => {
    const [min, max] = priceRange;
    const filtered = books.filter((book: any) => book.price >= min && book.price <= max);
    setFilteredByPrice(filtered);
  };


  const location = useLocation();
  const categoryId = location.state?.categoryId;

  let [selectedCategories, setSelectedCategories] = useState<string[]>(categoryId ? [categoryId] : []);
  let [filteredByCategories, setFilteredByCategories] = useState(books);

  let handleSelectedCategories = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  let filterByCategories = (selectedCategories: String[]) => {
    let filtered = books.filter((book: BooksType) => selectedCategories.length === 0 || selectedCategories.includes(book.category))
    setFilteredByCategories(filtered);
  }


  let [filteredBooks, setFilteredBooks] = useState(books);
  let filterBooks = () => {
    setFilteredBooks(filteredByPrice.filter((book: BooksType) => filteredByCategories.some((catBook: BooksType) => catBook._id === book._id)));
  }

  useEffect(() => {
    filterByPrice();
  }, [priceRange]);

  useEffect(() => {
    filterByCategories(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    filterBooks();
  }, [filteredByPrice, filteredByCategories]);


  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredBooks]);


  const sortByPriceAscending = () => {
    const sorted = [...filteredBooks].sort((a, b) => a.price - b.price);
    setFilteredBooks(sorted);
  };

  const sortByPriceDescending = () => {
    const sorted = [...filteredBooks].sort((a, b) => b.price - a.price);
    setFilteredBooks(sorted);
  };

  const sortAlphabeticallyAZ = () => {
    const sorted = [...filteredBooks].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredBooks(sorted);
  };

  const sortAlphabeticallyZA = () => {
    const sorted = [...filteredBooks].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setFilteredBooks(sorted);
  };

  const [sortOption, setSortOption] = useState();

  const handleChange = (event: any) => {
    const value = event.target.value;

    switch (value) {
      case 'AZ':
        sortAlphabeticallyAZ();
        break;
      case 'ZA':
        sortAlphabeticallyZA();
        break;
      case 'asc':
        sortByPriceAscending();
        break;
      case 'desc':
        sortByPriceDescending();
        break;
      default:
        break;
    }
    setSortOption(value);
  };

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
      <Grid container spacing={1} bgcolor={'white'}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ padding: '20px', position: 'sticky', top: '105px', alignSelf: 'flex-start', zIndex: '100' }}>

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
                <Slider min={0} max={1000} value={priceRange} onChange={handlePriceRangeChange} onChangeCommitted={filterByPrice} valueLabelDisplay="auto" />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color='grey'>${minPrice}</Typography>
                  <Typography variant="body2" color='grey'>${maxPrice}</Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<FaChevronDown color='navy' />} >
              <Typography component="span" color='navy' fontWeight='bold'>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ height: '42vh', overflowY: 'auto' }}>
              <FormGroup>
                {categories.map((category: any) => (
                  <FormControlLabel key={category._id} control={<Checkbox onChange={() => (handleSelectedCategories(category._id))} checked={selectedCategories.includes(category._id)} color='default' sx={{ color: 'navy' }} />} label={category.title} />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

        </Grid>

        <Grid size={{ xs: 12, md: 9 }} sx={{ padding: '20px' }}>

          <FormControl sx={{width:'fit-content', minWidth:'150px'}} variant="standard">
            <InputLabel sx={{ color: 'navy' }}>Sort by :</InputLabel>
            <Select
              value={sortOption}
              onChange={handleChange}
              displayEmpty
              sx={{
                fontWeight: 'bold',
                color: 'navy',
              }}
            >
              <MenuItem value="AZ">Alphabetically: A-Z</MenuItem>
              <MenuItem value="ZA">Alphabetically: Z-A</MenuItem>
              <MenuItem value="asc">Price: Low to High</MenuItem>
              <MenuItem value="desc">Price: High to Low</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={2}>
            {currentBooks.map((book: BooksType, index: number) => (
              <Grid key={book._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{ margin: 'auto' }}>
                <Card sx={{ maxWidth: '85%', border: 'none', boxShadow: 'none', bgcolor: 'transparent', margin:'auto' }} onClick={() => { navigate(`/dashboard/books/${book._id}`) }}>
                  <CardActionArea>
                    <Box className='book-img-container shadow-sm position-relative'>
                      <Box
                        component="img"
                        height="380px"
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

          <Pagination
            count={Math.ceil(filteredBooks.length / booksPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              width: 'fit-content',
              margin: 'auto',
              marginY: 4,
              '& .MuiPaginationItem-root': {
                color: '#ED553B',
                borderColor: '#ED553B',
              },
              '& .Mui-selected': {
                backgroundColor: '#ED553B !important',
                color: 'white',
                fontWeight: 'bold',
              }
            }}

            shape="circular"
          />
        </Grid>

      </Grid>

    </>
  )
}
