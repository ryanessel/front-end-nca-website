// will be part of a component which links to it's respective route page
import React from 'react'
import {Link} from "react-router-dom"
import railBanner from '../images/industry-page-banner-img/banner-railcar.jpg'

import extrudRub from '../images/railcarPage-imgs/Extruded_Rubber-1-320x200B.jpg'
import moldRub from '../images/railcarPage-imgs/Molded-Rubber-1-320x200.jpg'
import rubSheets from '../images/railcarPage-imgs/Rubber-Sheet-1-320x200.jpg'
import soundAbosorb from '../images/railcarPage-imgs/Sound-Absorber-1-320x200.jpg'
import forgedMet from '../images/railcarPage-imgs/Forged-Metal-1-1320x200-1.jpg'
import metFab from '../images/railcarPage-imgs/Metal-Fabrication-1-320x200.jpg'
import flexCon from '../images/railcarPage-imgs/Felexible-conduit-1-320x200.jpg'
import moldlessRub from '../images/railcarPage-imgs/Moldless-Rubber-1-320x200.jpg'
import heatShrink from '../images/railcarPage-imgs/Heat-Shrink-Tube-1-320x200.jpg'

export default function IndustryRailcar() {
   const changeTitle = (yourTitleString) => {
      document.title = yourTitleString;
    }
  
  changeTitle("Nishiyama | Railcar Industry");

   const linkToTop = () => {
      window.scroll(0, 0);
}

  return (
    <div className='industryRailCarMain fixIndustriesPageOverFlow'>
        
        
        
        <div className='industryRailCarBanner'>
           <div className='industryRailCarBannerCover textBorder'>RAILCAR INDUSTRY
           
           <div className="industryRailCarPageSeperator"></div>
           </div> 
          
        </div>
        
 


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>

      
        <div className='productLinkItem'>
         {/* put link around img and p */}
           <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={'/industries/railcar/extrudedRubber'}>
           <img src={extrudRub} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>   
           </Link> 
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/moldedRubber'}>
           <img src={moldRub} className='railProductsImgs'></img>
           <p>Molded Rubber</p>    
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/rubberSheets'}>
           <img src={rubSheets} className='railProductsImgs'></img>
           <p>Rubber Sheets</p> 
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/soundAbsorber'}>
           <img src={soundAbosorb} className='railProductsImgs'></img>
           <p>Sound Absorber</p> 
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={'/industries/railcar/forgedMetal'}>    
           <img src={forgedMet} className='railProductsImgs'></img>
           <p>Forged Metal</p>
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={"/industries/railcar/metalFabrication"}>
           <img src={metFab} className='railProductsImgs'></img>
           <p>Metal Fabrication</p>    
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={"/industries/railcar/flexibleConduits"}>
           <img src={flexCon} className='railProductsImgs'></img>
           <p>Flexible Conduits</p>
           </Link>    
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={"/industries/railcar/moldlessRubber"}>
           <img src={moldlessRub} className='railProductsImgs'></img>
           <p>Moldless Rubber</p>    
           </Link>
        </div>
        <div>
           <Link onClick={()=>{linkToTop()}} className='removeLinkStyling' to={"/industries/railcar/heatShrink"}>
           <img src={heatShrink} className='railProductsImgs'></img>
           <p>Heat Shrink Tube</p> 
           </Link>   
        </div>
   
</div>



    </div>
  )
}
