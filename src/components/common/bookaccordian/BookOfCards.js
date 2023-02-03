import React, { useEffect, useState } from 'react'
import Card from './Card.js';
import "./bookOfCards.css";
import { useNavigate } from 'react-router-dom';



const BookOfCards = ({topic}) => {

  const [bookData,setData] = useState([]);


  useEffect(()=>{
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${topic}&key=AIzaSyCT3nnei-re7SU3ZidzmLOK4YBuJn3iEkM`).then((res)=>res.json()).then((response)=> {
        setData(response.items);
      });
  },[])





  
    
  return (
    <>  


      
    <div className="maindv">
    <Card book={bookData}/>
    </div>
    
          
    </>
  )
}

export default BookOfCards;