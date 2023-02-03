import React, { useEffect, useState } from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom';

const Card = ({book}) => {
// console.log(book);

const navigate = useNavigate();

  return (
    <>
        {
          book.map((item,index)=>{

            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

            if(thumbnail!=undefined && amount!=undefined){
              return(
                <>
                  <div className="card" onClick={()=>{
                     navigate("/bookspecific", {state : {data : item}})
                    }
                    }>
                    <img src={thumbnail} alt="" />
                    <div className="bottom">
                      <p className="title">{item.volumeInfo.title}</p>
                      <p className="amount">&#8377;{amount}</p>
                    </div>
                  </div>
                </>
              )
            }
            
          })
        }
    </>
  )
}

export default Card;