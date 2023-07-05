// will be part of a component which links to it's respective route page
import React from 'react'
import soundAbosorb from '../images/railcarPage-imgs/Sound-Absorber-1-320x200.jpg'
import forgedMet from '../images/railcarPage-imgs/Forged-Metal-1-1320x200-1.jpg'

import { Link } from 'react-router-dom'

export default function IndustryConstruction() {
  
   const linkToTop = () => {
      window.scroll(0, 0);
}


  return (
    <div className='industryConstructionMain fixIndustriesPageOverFlow'>
        
        
        
        <div className='industryConstructionBanner'>
           <div className='industryConstructionBannerCover textBorder'>CONSTRUCTION
           
           <div className="industryConstructionPageSeperator"></div>
           </div> 
          
        </div>
        
 


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>
{/* maybe <p>s need to have text aling left; may not matter though */}
      <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/forgedMetal'}>    
           <img src={forgedMet} className='railProductsImgs'></img>
           <p>Forged Metal</p>
           </Link>
        </div>
        
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/soundAbsorber'}>
           <img src={soundAbosorb} className='railProductsImgs'></img>
           <p>Sound Absorber</p> 
           </Link>
        </div>


       
   
</div>



    </div>
  )
}
