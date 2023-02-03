import React, { useEffect, useState } from 'react';
import "./home.css";
import scheme1 from "../images/scheme1.jpg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon8 from "../images/icon8.png";
import icon7 from "../images/icon7.png";
import tarot from "../images/tarot.png";
import ad2 from "../images/81_inr.jpg";
import MedicalWeb from "../images/MedicalWeb.jpg";
import Navbar from '../common/Navbar/Navbar';
import Uppernavbar from '../common/Navbar/Uppernavbar';
import Slider from '../common/Slider';
import BookOfCards from '../common/bookaccordian/BookOfCards';
import Footer from '../common/footer/Footer';

const Home = () => {
  return (
    <>
            <header>
                <Uppernavbar></Uppernavbar>
                <Navbar/>
            </header>
            <main>
                <img src={scheme1} alt="abc" id='scheme1'/>
                <Slider></Slider>
                
                <div id="secslide">
                    <hr />
                        <div id="secondslider">
                            <div>
                                <img src={icon1} alt="1" />
                                <p className='iconame'>Best Seller</p>
                            </div>
                            <div>
                                <img src={icon8} alt="2" />
                                <p className='iconame'>Award Winners</p>
                            </div>
                            <div>
                                <img src={icon4} alt="3" />
                                <p className='iconame'>Box Sets</p>
                            </div>
                            <div>
                                <img src={icon7} alt="4" />
                                <p className='iconame'>International Best Sellers</p>
                            </div>
                            <div>
                                <img src={icon5} alt="5" />
                                <p className='iconame'>New Arrivals</p>
                            </div>
                            <div>
                                <img src={icon2} alt="6" />
                                <p className='iconame'>Fiction Books</p>
                            </div>
                            <div>
                                <img src={tarot} alt="7" />
                                <p className='iconame'>Tarot Cards</p>
                            </div>
                        </div>
                </div>
                <div id="ad">
                    <hr />
                    <img src={MedicalWeb} alt="" />
                    <hr />
                </div>
                <div>
                    <h1>Fiction</h1>
                    <BookOfCards topic="fiction"/>
                </div>
                <hr/>
                <div>
                    <h1>Art</h1>
                    <BookOfCards topic="art"/>
                </div>
                <hr/>
                <div id="ad2">
                    <img src={ad2} alt="" />
                </div>
                <hr/>
                <div>
                    <h1>Technology</h1>
                    <BookOfCards topic="technology"/>
                </div>
                
                <hr/>
                <div>
                    <h1>Physics</h1>
                    <BookOfCards topic="Physics"/>
                </div>
                
                <hr/>
                <div>
                    <h1>Adventure</h1>
                    <BookOfCards topic="adventure"/>
                </div>
                
                <hr/>
                <div>
                    <h1>Mind</h1>
                    <BookOfCards topic="mind"/>
                </div>
                
                <hr/>
                <div>
                    <h1>Life</h1>
                    <BookOfCards topic="life"/>
                </div>
                
                <hr/>
            </main>
            <Footer/>
        
    </>
  )
}

export default Home