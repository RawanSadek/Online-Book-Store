import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import AuthLayout from './Components/AuthLayout/AuthLayout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgot', element: <ForgotPassword /> }

      ]
    },
    {
      path: 'dashboard',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children:
      [
        {index: true, element: <Home/>},
        {path: 'home', element: <Home/>},
        {path: 'products', element: <Products/>},
        {path: 'cart', element: <Cart/>},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App




