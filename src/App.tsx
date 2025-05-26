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

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> }

      ]
    },
    {
      path: 'dashboard',
      element: <MasterLayout />,
      errorElement: <NotFound />
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App




