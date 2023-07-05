import React from 'react'
import MainPageSlideShow from '../components/MainPageSlideShow'
import MainPageIndustriesSection from '../components/MainPageIndustriesSection'
import Events from '../components/Events'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='ncaHome'> 
  
<MainPageSlideShow/>
<MainPageIndustriesSection/>
{/* ncaEvents center */}
<EventsSection>
  
 
   <Events 
     eventPostedDate={" December 1st 2023"}
     eventTitleAndDate={"OTC (OFFSHORE TRADE CONFERENCE)"}  
     eventBlurb={"We will attend OTC 2023 from May 1st - May 2nd"}   
   />

   <Events 
     eventPostedDate={" December 1st 2023"}
     eventTitleAndDate={"OTC (OFFSHORE TRADE CONFERENCE)"}  
     eventBlurb={"We will attend OTC 2023 from May 1st - May 2nd"}   
   />

   <Events 
     eventPostedDate={" December 1st 2023"}
     eventTitleAndDate={"OTC (OFFSHORE TRADE CONFERENCE)"}  
     eventBlurb={"We will attend OTC 2023 from May 1st - May 2nd"}   
   />

</EventsSection>
   </div>
  )
}
