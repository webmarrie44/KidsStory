import React , {useState} from 'react';
import '../Styles/Style.css'
import logo from '../img/elephantlogo.png'
const Navbar = () => {

  const [toggle,setToggle] = useState(false);
  function ToggleHandler(){
      setToggle(!toggle)
  }
   return(
       <div>
          <nav>
              <div className="logo">
              <img src={logo} alt="logo" />
              </div>
              <ul className={toggle ? 'active' : ""}>
                  <li className="nav-item"><a className ="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className ="nav-link" href="#">Story</a></li>
                  <li className="nav-item"><a className ="nav-link" href="#">Game</a></li>
                  <li className="nav-item"><a className ="nav-link" href="#">Homework</a></li>
                  <li className="nav-item"><a className ="nav-link" href="#">Q.A</a></li>
                  <li className="nav-item"><a className ="nav-link" href="#">Quiz</a></li>
                  
              </ul>
              <div className="toggle-button">
                <i onClick={ToggleHandler} className={toggle? "fas fa-times" : "fas fa-bars"  }></i>
              </div>
              
          </nav>
       </div>
   )
}
export default Navbar