import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import Card from './components/common/bookaccordian/Card';
import BookOfCards from './components/common/bookaccordian/BookOfCards';
import BooksByCatagory from './components/pages/BooksByCatagory';
import BookSpecific from './components/pages/BookSpecific';
import { useState } from 'react';
import SearchPage from './components/pages/SearchPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/cardsOfBooks",
    element: <BookOfCards/>,
  },
  
  {
    path: "/booksbycatagory",
    element: <BooksByCatagory/>
  },
  {
    path: "bookspecific",
    element: <BookSpecific/>
  },
  {
    path: "searchpage",
    element: <SearchPage/>
  }
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
