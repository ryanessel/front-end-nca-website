// will be part of a component which links to it's respective route page
import React from 'react'
import ETFEblackSoft from '../images/printerPage-imgs/A-E-SJUS-BK.jpg'
import ETFEclearSoft from '../images/printerPage-imgs/B-E-SJUS-0.jpg'
import ETFEblack from '../images/printerPage-imgs/C-E-SJ-I.D.×O.D.-BK-3.jpg'
import ETFEclear from '../images/printerPage-imgs/D-E-SJ-I.D.×O.D.-1-1.jpg'
import PVDFclear from '../images/printerPage-imgs/E-E-PD.jpg'
import nutFittings from '../images/printerPage-imgs/F-Hakko-fitting-0.jpg'
import { Link } from 'react-router-dom'

export default function IndustryPrinter() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Printer Eequipment");

   const linkToTop = () => {
      window.scroll(0, 0);
}



  return (
    <div className='industryPrinterMain fixIndustriesPageOverFlow'>
        
        
        
        <div className='industryPrinterBanner'>
           <div className='industryPrinterBannerCover textBorder'>PRINTER EQUIPMENT
           
           <div className="industryPrinterPageSeperator"></div>
           </div> 
          
        </div>
        
 


{/* PROPER WAY TO DISPLAY ALL INDUTRIES' ITEMS!!!! */}

<div className='table centerDiv'>
{/* maybe <p>s need to have text aling left; may not matter though */}
        <div>

          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/a-hose"}>
           <img src={ETFEblackSoft} className='railProductsImgs'></img>
           <p>Flexible Fluorine (ETFE) Resin Tubing Black (Ultra Soft Type) (HAKKO EIGHTRON)</p>   
           </Link> 
        </div>
        <div>
         
          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/b-hose"}>
           <img src={ETFEclearSoft} className='railProductsImgs'></img>
           <p>Flexible Fluorine (ETFE) Resin Tubing Clear (Ultra Soft Type) (HAKKO EIGHTRON)</p>
           </Link>    
        </div>
        <div>
         
          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/c-hose"}>
           <img src={ETFEblack} className='railProductsImgs'></img>
           <p>Flexible Fluorine (ETFE) Resin Tubing Black (HAKKO EIGHTRON)</p> 
           </Link>   
        </div>
        <div>
         
          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/d-hose"}>
           <img src={ETFEclear} className='railProductsImgs'></img>
           <p>Flexible Fluorine (ETFE) Resin Tubing Clear (HAKKO EIGHTRON)</p>
           </Link>    
        </div>
        <div>
         
          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/e-hose"}>
           <img src={PVDFclear} className='railProductsImgs'></img>
           <p>Flexible Fluorine (PVDF) Resin Tubing Clear (HAKKO EIGHTRON)</p>
           </Link>    
        </div>
        <div>
         
          <Link onClick={()=>{linkToTop()}}  className='removeLinkStyling' to={"/industries/printer/f-hose"}>
           <img src={nutFittings} className='railProductsImgs'></img>
           <p>Nut Type Fittings for Multi-Layer Tubing (HAKKO EIGHTRON)</p>
           </Link>    
        </div>
        
   
</div>



    </div>
  )
}
