import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToBooks = ()=>{
    // localStorage.setItem("name","New Arrivals")
      navigate("/booksbycatagory",{state : {namee : "New Arrivals"}});
  }
  const navigateToBooks2 = ()=>{
    // localStorage.setItem("name","Box Sets")
      navigate("/booksbycatagory",{state : {namee : "Box Sets"}});
  }
  const navigateToBooks3 = ()=>{
    // localStorage.setItem("name","Best Sellers")
      navigate("/booksbycatagory",{state : {namee : "Best Sellers"}});
  }

  let drop1 = document.getElementById("drop1");
  let drop2 = document.getElementById("drop2");
  let drop3 = document.getElementById("drop3");
  let drop4 = document.getElementById("drop4");

  const drop1too = ()=>{
    navigate("/booksbycatagory",{state : {namee : drop1.innerHTML}});
  }
  const drop2too = ()=>{
    navigate("/booksbycatagory",{state : {namee : drop2.innerHTML}});
  }
  const drop3too = ()=>{
    navigate("/booksbycatagory",{state : {namee : drop3.innerHTML}});
  }
  const drop4too = ()=>{
    navigate("/booksbycatagory",{state : {namee : drop4.innerHTML}});
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger my-1">
        <div className="container-fluid">
          <div className=" navbar-collapse">
            <ul className="navbar-nav">
            <li className="nav-item dropdown mx-3">
                <span className="nav-link dropdown-toggle active cd lis"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Book
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><span id='drop1' className="dropdown-item cp" onClick={drop1too}>react js</span></li>
                  <li><span id='drop2' className="dropdown-item cp" onClick={drop2too}>Fiction</span></li>
                  <li><span id='drop3' className="dropdown-item cp" onClick={drop3too}>Law</span></li>
                  <li><span id='drop4' className="dropdown-item cp" onClick={drop4too}>Art &#38; Photography</span></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <span className="nav-link active cp lis" aria-current="page" onClick={navigateToBooks}>New Arrivals</span>
              </li>
              <li className="nav-item mx-3">
                <span className="nav-link active cp lis" onClick={navigateToBooks2}>Box Sets</span>
              </li>
              <li className="nav-item mx-3">
                <span className="nav-link active cp lis" onClick={navigateToBooks3}>Best Sellers</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar