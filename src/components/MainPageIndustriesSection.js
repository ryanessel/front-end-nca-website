import React from 'react'
import {Link} from 'react-router-dom';
import railImg from '../images/industry-img/railcar-industry.png';
import printerImg from '../images/industry-img/printer-equipment.png'
import plantImg from '../images/industry-img/plant-pipiline.png';
import constructionImg from '../images/industry-img/construction.jpg';
import pofImg from '../images/industry-img/pof.jpg'




export default function MainPageIndustriesSection() {



    const linkToTop = () => {

 
        window.scroll(0, 0);
    
}



    const homePageInustriesImg = {

        rail: railImg,
        print: printerImg,
        plant: plantImg,
        construct: constructionImg,
        pof: pofImg


    }


  return (
    <div className='homeIndustriesMainBox'>
        
        MainPageIndustriesSection



        <div>INDUSTREIS</div>
        <div className="industriesSperator"></div>
        <div className='industriesBoxHolder'>
        
            <div className='industriesItem railHomeBox'>
                <Link to="/industries/railcar" onClick={() => {linkToTop()}}>
                    <img src={homePageInustriesImg.rail} className='industriesClusterImage industriesImg1' />
                </Link>  
                <Link to="/industries/railcar" onClick={() => {linkToTop()}} className='homeIndustryText'>
                    <p >Railcar Indsutry</p>
                </Link>  

            </div>
            
            <div className='industriesItem printHomeBox'>
                <Link to="/industries/printer"  onClick={() => {linkToTop()}}>
                    <img src={homePageInustriesImg.print} className='industriesClusterImage industriesImg2' />
                </Link> 
                <Link to="/industries/printer" onClick={() => {linkToTop()}} className='homeIndustryText'>
                    <p className='homeIndustryText'>Printer Equipment</p>
                </Link> 
            </div>

            <div className='industriesItem pipeHomeBox'>
               <Link to="/industries/pipelineEnergy" onClick={() => {linkToTop()}}>
                    <img src={homePageInustriesImg.plant} onClick={() => {linkToTop()}} className='industriesClusterImage industriesImg3' />
                </Link> 
                <Link to="/industries/pipelineEnergy" className='homeIndustryText'>
                    <p className='homeIndustryText'>Plant/Pipeline</p>
                </Link>  
            </div>

            <div className='industriesItem construcitonHomeBox'>
                <Link to="/industries/construction" onClick={() => {linkToTop()}}>
                    <img src={homePageInustriesImg.construct} className='industriesClusterImage industriesImg4' />
                </Link> 
                <Link to="/industries/construction"  onClick={() => {linkToTop()}} className='homeIndustryText'>
                    <p className='homeIndustryText'>Construction Machinery</p>
                </Link>  
            </div>

            <div className='industriesItem construcitonHomeBox'>
                <Link to="/industries/informationTech"  onClick={() => {linkToTop()}} >
                    <img src={homePageInustriesImg.pof} className='industriesClusterImage industriesImg4' />
                </Link> 
                <Link to="/industries/informationTech"  onClick={() => {linkToTop()}} className='homeIndustryText'>
                    <p>POF (Plastic Optical Fiber)</p>
                </Link>  
            </div>



        </div>


     


   
      


        
    </div>
  )
}
