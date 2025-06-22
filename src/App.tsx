import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import AuthLayout from './Modules/Shared/Components/AuthLayout/AuthLayout';
import NotFound from './Modules/Shared/Components/NotFound/NotFound';
import Login from './Modules/AuthModule/Components/Login/Login';
import Register from './Modules/AuthModule/Components/Register/Register';
import MasterLayout from './Modules/Shared/Components/MasterLayout/MasterLayout';
import ForgotPassword from './Modules/AuthModule/Components/ForgotPassword/ForgotPassword';
import Home from './Modules/HomeModule/Components/Home/Home';
import Books from './Modules/HomeModule/Components/Books/Books';
import Cart from './Modules/CartModule/Components/Cart/Cart';
import ResetPassword from './Modules/AuthModule/Components/ResetPassword/ResetPassword';
import ChangePassword from './Modules/AuthModule/Components/ChangePassword/ChangePassword';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import Profile from './Modules/HomeModule/Components/Profile/Profile';
import Categories from './Modules/HomeModule/Components/Categories/Categories';
import CategoryBooks from './Modules/HomeModule/Components/CategoryBooks/CategoryBooks';
import Book from './Modules/HomeModule/Components/Book/Book';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import OrderConfirmation from './Modules/CartModule/Components/OrderConfirmation/OrderConfirmation';

function App() {
  const stripe = loadStripe(
    'pk_test_51RcAun4JVprtu4zKzaohRHlKBmPzT8cYvIW7eEWIqt6ARWlVyrbpg2wZXG7kXSsVk1nNEKbKmW4DqlldqWSTE7BE00XN08Qmtg'
  )
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgot', element: <ForgotPassword /> },
        { path: 'reset', element: <ResetPassword /> },
        { path: 'change', element: <ChangePassword /> }

      ]
    },
    {
      path: 'dashboard',
      element: <ProtectedRoutes><MasterLayout /></ProtectedRoutes>,
      errorElement: <NotFound />,
      children:
        [
          { index: true, element: <Home /> },
          { path: 'home', element: <Home /> },
          {
            path: 'books',
            children: [
              { index: true, element: <Books /> },
              { path: ':bookId', element: <Book /> },
            ]
          },
          {
            path: 'categories',
            children: [
              { index: true, element: <Categories /> },
              { path: ':categName', element: <CategoryBooks /> }
            ]
          },
          { path: 'cart', element: <Cart /> },
          { path: 'confirmation', element: <OrderConfirmation /> },
          { path: 'profile', element: <Profile /> },
        ]
    }
  ])

  return (
    <>
      <ToastContainer />
      <Elements stripe={stripe}>
        <RouterProvider router={routes}></RouterProvider>
      </Elements>
    </>
  );
}

export default App




