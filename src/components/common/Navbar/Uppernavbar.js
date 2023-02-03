import React, { useState } from 'react';
import "./uppernavbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from 'react-router-dom';


const Uppernavbar = () => {

  const [search,setSearch] = useState();
  const navigate = useNavigate();

  const gotoHome = ()=>{
    navigate("/")
  }

  const searchbook = (evt)=>{
    if(evt.key==="Enter"){
      navigate("/searchpage",{state : {topicname : search}});
    }
  }

  return (
    <>   
    <div className="navtop">
                    <img src={logo} alt="" id='logo' onClick={gotoHome} />
                    <div className="searchbar">
                        <input className='searchinput' type="text" placeholder='   Search by Title, Author, Publisher or ISBN' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchbook}/>
                        <button className='searchbtn'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="loginbar">
                        <input className='logininput' type="text" placeholder='   Hello, User' disabled />
                        <button className='loginbtn' ><i className="fa-solid fa-user"></i></button>
                    </div>
                </div>
                
    </>
  )
}

export default Uppernavbar