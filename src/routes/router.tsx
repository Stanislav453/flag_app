import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from '../page/Home';
import { Detail } from '../page/Detail';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/country/:countryName',
        element: <Detail />,
      },
    ],
  },
]);

