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
import Products from './Modules/HomeModule/Components/Products/Products';
import Cart from './Modules/CartModule/Components/Cart/Cart';
import ResetPassword from './Modules/AuthModule/Components/ResetPassword/ResetPassword';
import ChangePassword from './Modules/AuthModule/Components/ChangePassword/ChangePassword';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

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
      element: <ProtectedRoutes><MasterLayout/></ProtectedRoutes>,
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




