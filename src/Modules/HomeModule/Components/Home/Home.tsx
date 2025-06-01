// import "swiper/css/bundle";

import { Box } from "@mui/material";
import Item from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate()
  return (
    <>
    <Box>
      <Item onClick={()=>navigate('/change')} >
        home
      </Item>
      </Box> 
    </>
  )
}