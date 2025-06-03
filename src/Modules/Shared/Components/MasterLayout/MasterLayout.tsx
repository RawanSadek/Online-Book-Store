import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Contact from '../Contact/Contact';


export default function MasterLayout() {
  return (
    <>
      <div><Contact /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </>
  )
}
