import React, { useState } from 'react'
import Navbar from '../common/Navbar/Navbar'
import BookOfCards from '../common/bookaccordian/BookOfCards'
import Uppernavbar from '../common/Navbar/Uppernavbar'
import thumb from '../images/thumb.jpg'
import "./bookspecific.css";
import Footer from '../common/footer/Footer'
import { useLocation } from 'react-router-dom'

const BookSpecific = ({}) => {
    const location = useLocation();
    let item = location.state.data;
    console.log(item)
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
        <Uppernavbar/>
        <Navbar/>
        <div id='mdiv'>
            <div id="dpfather">
                <img id="dp" src={thumbnail} alt="" />
            </div>
            <div id="datafather">
                <h3 className="bookName redd"><i>{item.volumeInfo.title}</i></h3>
                <p className='author d-flexx'>Author : {item.volumeInfo.authors} , publisher : {item.volumeInfo.publisher} </p>
                <hr />
                <h3 className='newprice d-flexx'><span className='redd'>&#8377; 749</span></h3>
                <h5 className='originalprice d-flexx'><del>&#8377; 995</del></h5>
                <p className='d-flexx'>Avilable</p>
                <p className='d-flexx'>Ships within 2-4 Business Days</p>
                <p className='d-flexx details'>&#8377;39 shipping in India per item and low cost Worldwide.</p>
                <div className="btnnn d-flexx">
                    <button className='btn1'>Buy Now</button>
                    <button className='btn2'>Add to Wishlist</button>
                </div>
            </div>
        </div>
        <div className="about">
            <h5 className='d-flexx redd'>About the Book</h5>
            <p className='d-flexx'>{item.volumeInfo.description}</p>
        </div>
        <hr />
        <BookOfCards topic="fiction"/>
        <BookOfCards topic="science"/>
        <BookOfCards topic="math"/>
        <Footer/>
    </div>
  )
}

export default BookSpecific