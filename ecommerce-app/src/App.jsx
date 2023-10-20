import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Errorcomponent from './components/errorHandling/ErrorComponent.jsx';
import Product from './components/Product/Product';
import Footer from './components/footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          {/* <Home />
          <Product />
          <Footer /> */}
        </>
      ),
      errorElement: <Errorcomponent />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
// export router;
