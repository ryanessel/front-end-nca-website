import React from 'react'
import{ Link} from "react-router-dom";

export default function IndustriesMenuBox({hopToPageTop, collapseMenu }) {

  const linkToTop = () => {

    window.scroll(0, 0);

  }


  return (
    <div className='inudstriesMenuBox'>

        <div className='railCarLink industriesLinkItem'>
        <Link to="/industries/railcar" className='navListItem' onClick ={() => {collapseMenu(); linkToTop();}}> Railcar  </Link>
        </div>

        <div className='printerLink industriesLinkItem'>
        <Link to="/industries/printer"  className='navListItem' onClick ={() => {collapseMenu(); linkToTop();}}> Printer Equipment </Link>    
        </div>

        <div className='pipelineLink industriesLinkItem'>
        <Link to="/industries/pipelineEnergy"  className='navListItem' onClick ={() => {collapseMenu(); linkToTop();}}> Plant/Pipeline  </Link>  
        </div>

        <div className='constructionLink industriesLinkItem'>
        <Link to="/industries/construction" className='navListItem' onClick ={() => {collapseMenu(); linkToTop();}}> Construction </Link> 
        </div>

        <div className='itLink industriesLinkItem'>
        <Link to="/industries/informationTech" className='navListItem'  onClick ={() => {collapseMenu(); linkToTop(); }}>  IT  </Link>  
        </div>
        
    </div>
  )
}
