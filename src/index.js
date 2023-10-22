
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Github from './components/github/Github';
import Error from './components/error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path: 'github',
        element: <Github/>
      },
      {
        path:'*',
        element: <Error/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}/>
);
