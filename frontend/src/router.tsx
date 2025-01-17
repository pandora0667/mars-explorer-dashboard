import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import WeatherPage from './pages/weather/WeatherPage';
import GalleryPage from './pages/gallery/GalleryPage';
import NewsPage from './pages/news/NewsPage';
import ApodPage from './pages/apod/ApodPage';
import MainPage from './pages/main/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/weather',
        element: <WeatherPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/apod',
        element: <ApodPage />,
      },
    ],
  },
]); 