import React from 'react'
import MainPageSlideShow from '../components/MainPageSlideShow'
import MainPageIndustriesSection from '../components/MainPageIndustriesSection'
import Events from '../components/Events'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'

export default function Home() {

  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Home");

  return (
    <div className='ncaHome'> 
  
<MainPageSlideShow/>
<MainPageIndustriesSection/>
{/* ncaEvents center */}
<EventsSection>
  

{/* 
Events Template Example: Do it Like Below Please

  eventPostedDate = Date Posted: December 1st 2023
  eventTitleAndDate = OTC (OFFSHORE TRADE CONFERENCE)
  eventBlurb = We will attend OTC 2023 from May 1st - May 2nd
  
 */}

 
   <Events 
     eventPostedDate={" TBD EVENT DATE"}
     eventTitleAndDate={"TBD EVENT TITLE"}  
     eventBlurb={"TBD EVENT INFO"}   
   />



</EventsSection>
   </div>
  )
}
