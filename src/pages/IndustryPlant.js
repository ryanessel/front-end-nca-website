// will be part of a component which links to it's respective route page
import React from 'react'
import FRR from '../images/plant-imgs/FLANGEREPAIR-RING.jpg'
import SS from '../images/plant-imgs/SplitSleeve.jpg'
import FRRSS from '../images/plant-imgs/Flange-Repair-SplitSleeve.jpg'
import SC from '../images/plant-imgs/SmithClamp-feature.jpg'
import { Link } from 'react-router-dom'

export default function IndustryPlant() {

   const linkToTop = () => {
      window.scroll(0, 0);
}

  return (
    <div className='industryPlantMain fixIndustriesPageOverFlow'>
        
        
        
        <div className='industryPlantBanner'>
           <div className='industryPlantBannerCover textBorder'>PLANT/PIPELINE
           
           <div className="industryPlantPageSeperator"></div>
           </div> 
          
        </div>
        
 


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>
{/* maybe <p>s need to have text aling left; may not matter though */}
        <div>

          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/pipelineEnergy/flangeRepairRing"}>
           <img src={FRR} className='railProductsImgs'></img>
           <p>Flange+Repair Ring (Plidco Products)</p>  
           </Link>

        </div>
        <div>

          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/pipelineEnergy/splitSleeve"}>
           <img src={SS} className='railProductsImgs'></img>
           <p>Split+Sleeve (Plidco Products)</p> 
           </Link>

        </div>
        <div>

          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/pipelineEnergy/flangeRepairSplitSleeve"}>
           <img src={FRRSS} className='railProductsImgs'></img>
           <p>Flange Repair Split+Sleeve (Plidco Products)</p>  
           </Link>

        </div>
        <div>

          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/pipelineEnergy/smithClamp"}>
           <img src={SC} className='railProductsImgs'></img>
           <p>Smith+Clamp (Plidco Products)</p>  
           </Link>

        </div>
       
   
</div>



    </div>
  )
}
