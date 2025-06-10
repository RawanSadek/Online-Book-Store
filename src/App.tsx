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
          { path: 'books', 
            children: [
              {index: true, element: <Books/>},
              {path: ':bookName', element: <Book/>},
            ]
           },
          {
            path: 'categories',
            children: [
              { index: true, element: <Categories /> },
              {path: ':categName', element: <CategoryBooks/>}
            ]
          },
          { path: 'cart', element: <Cart /> },
          { path: 'profile', element: <Profile /> },
        ]
    }
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App




