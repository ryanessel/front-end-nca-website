// THIS IS NOT BEING RENDER THIS IS AN EXAMPLE OF HOW TO SET UP INDUSTY ITEM PAGES

import React from 'react'
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



  return (
    <div className='industryRailCarMain'>
        
        
        
        <div className='industryRailCarBanner'>
           <div className='industryRailCarBannerCover'>RAILCAR INDUSTRY
           
           <p>--put that blue dash here--</p>
           </div> 
          
        </div>
        
        {/* <img src={railBanner}></img> */}
        industryRailCarMain


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>

        <div>
           <img src={extrudRub} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={moldRub} className='railProductsImgs'></img>
           <p>Molded Rubber</p>    
        </div>
        <div>
           <img src={rubSheets} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={soundAbosorb} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={forgedMet} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={metFab} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={flexCon} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={moldlessRub} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
        <div>
           <img src={heatShrink} className='railProductsImgs'></img>
           <p>Extruded Rubber</p>    
        </div>
   
</div>



    </div>
  )
}
