import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import categImg1 from '../../../../assets/slider2-img1.jpg'
import categImg2 from '../../../../assets/slider2-img2.jpg'
import categImg3 from '../../../../assets/slider2-img3.jpg'
import categImg4 from '../../../../assets/slider2-img4.jpg'
import categImg5 from '../../../../assets/slider2-img5.jpg'
import categImg6 from '../../../../assets/slider2-img6.jpg'

export default function Categories() {
  let categories = JSON.parse(String(localStorage.getItem('categories')));
    const categoryImages = [categImg1, categImg2, categImg3, categImg4, categImg5, categImg6];

  return (
    <div>
      <Grid container spacing={1}>

        <Grid size={{ xs: 12, md: 11 }} sx={{ padding: '20px', marginX:'auto' }}>

          <Grid container spacing={5}>
            {categories.map((categ: any, index: number) => (
              <Grid key={categ._id} size={{ xs: 10, sm: 6, lg: 4 }} sx={{ margin: 'auto' }}>
                <Card sx={{ maxWidth: '100%', border: 'none', boxShadow: 'none', bgcolor: 'transparent' }}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        width='100%'
                        image={categoryImages[index % 6]}
                        alt="categ img"
                        sx={{ borderRadius: '10px' }}
                      />
                    <CardContent>
                      <Typography gutterBottom variant="h6" className='navBar-color text-center text-capitalize'>{categ.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Grid>

      </Grid>
    </div>
  )
}
