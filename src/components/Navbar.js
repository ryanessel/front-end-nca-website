import { useState } from 'react';
import {Link} from 'react-router-dom'
import ncaWiteLogo from '../images/nishiyama-white-logo.png'
import test from '../images/map-icon2.svg'

import IndustriesMenuBox from './IndustriesMenuBox';


// ADD DASIY UI AND TAILWIND FOR FORMATTING STUFF.
export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

const preventReload = (e) => {

e.preventDefault();

}

const linkToTop = () => {

 
        window.scroll(0, 0);
    
}

const closeIndustryMenu = () => {

    if (isOpen === true) {
        setIsOpen(!isOpen);
    }

}

  return (
    <div className='navBar'>

{/* HEADER TOP */}
    <div className='navBarTop'>

    <Link to="https://nca-ecommerce-front-end.onrender.com/customerLogin" className="orderHakkoTubes">
  ORDER HAKKO TUBES HERE!
</Link>
        <div className='navTopPhoneAndMap navTop1'> ☏: 516-466-7570</div>
        <div className='navTopPhoneAndMap navTop2'> <img className='mapMarker' target="_blank" src={test}/>:<a className='ncaGmapLink' href="https://www.google.com/maps/place/Nishiyama+Corporation+of+America/@40.7853772,-73.7320644,17z/data=!3m2!4b1!5s0x89c289971611db27:0x29654836a99a7fc1!4m6!3m5!1s0x89c28996d6e94a69:0xef082b3e4826d08!8m2!3d40.7853732!4d-73.7294895!16s%2Fg%2F1tq6k_k5">111 Great Neck Road, Suite 510, Great Neck, NY 11021 </a></div>
    </div>
   
{/* HEADER BOTTOM */}
    <div className='navBarBottom'>
   
  

   
    <div className='ncaLogoBox'>
        <Link to="/" onClick={() => {linkToTop(); closeIndustryMenu()}}  ><img className='ncaWhiteLogo glow-effect' src={ncaWiteLogo} alt="Logo" /></Link>
    </div>
{/* UL will be links later */}

    <ul className='navUnorderedList'>
       
    <Link to="/ " onClick={() => {linkToTop(); closeIndustryMenu()}} className='navListItem'> Home </Link>


       <Link to="/aboutUs " onClick={() => {linkToTop(); closeIndustryMenu()}} className='navListItem'> About Us </Link>
       {/* "Industries" will be a fold-out menu with links */}

<div className='menuBoxForRelative'>

       <button className='navListItem industriesButton' onClick={() => setIsOpen(!isOpen)}>INDUSTRIES</button>


       

       {/* <Link to="/nothing" className='navListItem'> <button className='industriesButton navListItem' onClick={() => setIsOpen(!isOpen)}> INDUTRIES</button></Link> */}

    {isOpen && (

<div>

<IndustriesMenuBox  hopToPageTop={linkToTop} collapseMenu={closeIndustryMenu}  />

</div>

    )}

</div>

       <Link to="/contactUs" onClick={() => {linkToTop();
            closeIndustryMenu();
    
    }} className='navListItem'> Contact Us </Link>
       
    </ul>
    
    </div>

       
        
      


    </div>
  )
}
