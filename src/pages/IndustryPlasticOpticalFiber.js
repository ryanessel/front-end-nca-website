import React from 'react'
import POF from '../images/pof-imgs/Main-Sepcifications-720x600.png'
import { Link } from 'react-router-dom';

export default function IndustryPlasticOpticalFiber() {

  const linkToTop = () => {
    window.scroll(0, 0);
}


  return (
    <div className='industryPlasticOpticalFiberMain fixIndustriesPageOverFlow'>
        
        
        
        <div className='industryPlasticOpticalFiberBanner'>
           <div className='industryPlasticOpticalFiberBannerCover textBorder'>POF (PLASTIC OPTICAL FIBER)
           
           <div className="industryPlasticOpticalFiberPageSeperator"></div>
           </div> 
          
        </div>
        
 


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>
{/* maybe <p>s need to have text aling left; may not matter though */}
        <div>
        <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/informationTech/pof"}>
           <img src={POF} className='railProductsImgs pofImgs'></img>
           <p>POF (PLASTIC OPTICAL FIBER)</p>
        </Link>    
        </div>


       
   
</div>



    </div>
  )
}