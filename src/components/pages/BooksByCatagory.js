import React from 'react'
import { useLocation } from 'react-router-dom';
import BookOfCards from '../common/bookaccordian/BookOfCards'
import Footer from '../common/footer/Footer';
import Navbar from '../common/Navbar/Navbar'
import Uppernavbar from '../common/Navbar/Uppernavbar'
import "./booksbycatagory.css";

const BooksByCatagory = () => {

  const location = useLocation();
  console.log(location.state.namee)
  return (
    <>
        <Uppernavbar/>
        <Navbar/>
        <h2 id="heading">{location.state.namee}</h2>
        <div id="maindiv">
            <BookOfCards topic="latest"/>
            <hr />
            <BookOfCards topic="fresh"/>
            <hr />
            <BookOfCards topic="home"/>
            <hr />
            <BookOfCards topic="skills"/>
            <hr />
            <BookOfCards topic="future"/>
            <hr />
            <BookOfCards topic="yoga"/>
            <hr />
            <BookOfCards topic="addiction"/>
            <hr />
            <BookOfCards topic="coding"/>
            <hr />
            <BookOfCards topic="marketing"/>
            <hr />
            <BookOfCards topic="digitalworld"/>
            <hr />
            <BookOfCards topic="mental"/>
            <hr />
            <BookOfCards topic="future"/>
            <hr />

        </div>
        <Footer/>
    </>
  )
}

export default BooksByCatagory