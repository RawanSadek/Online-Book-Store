// import "swiper/css/bundle";

import { Box } from "@mui/material";
import Item from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Shared/Components/NavBar/NavBar";

export default function Login() {
  let navigate = useNavigate()
  return (
    <>
    <div><NavBar /></div>
    <Box>
      <Item >
        home
      </Item>
      </Box> 
    </>
  )
}