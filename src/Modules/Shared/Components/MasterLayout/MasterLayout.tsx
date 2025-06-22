import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';
import { useEffect } from 'react';


export default function MasterLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Contact />
        <NavBar />
      </div>

      <div style={{ paddingTop: '140px' /* adjust based on Contact + NavBar height */ }}>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}
