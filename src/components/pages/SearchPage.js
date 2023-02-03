import React from 'react'
import { useLocation } from 'react-router-dom'
import BookOfCards from '../common/bookaccordian/BookOfCards'
import Footer from '../common/footer/Footer'
import Navbar from '../common/Navbar/Navbar'
import Uppernavbar from '../common/Navbar/Uppernavbar'

const SearchPage = () => {
    const location = useLocation();

  return (
    <div>
        <Uppernavbar/>
        <Navbar/>
        <div>
        <BookOfCards topic={location.state.topicname}/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default SearchPage