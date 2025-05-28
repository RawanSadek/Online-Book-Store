import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function MasterLayout() {
  return (
    <>
      <div><Header/></div>
      <div><Outlet/></div>
      <div><Footer/></div>
    </>
  )
}
