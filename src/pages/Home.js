import React from 'react'
import MainPageSlideShow from '../components/MainPageSlideShow'
import MainPageIndustriesSection from '../components/MainPageIndustriesSection'
import Events from '../components/Events'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
import eventHelpImg from '../images/event-imgs/printing-united-expo-2025/link-explain-suppliment.png'
import colorPrintUnitedLogo from '../images/event-imgs/printing-united-expo-2025/printing-united-expo-color-transparent.png'


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
  eventBlurb = {`We will attend OTC 2023 from May 1st - May 2nd`}
  
 */}

 
   <Events 

     eventTitleAndDate={"PRINTING UNITED EXPO 2025"}  

   >

<div>
  <img src={colorPrintUnitedLogo} alt="Print United Logo" style={{ width: '300px', height: 'auto' }} />
</div>


 <div>
  The Nishiyama Corporation of America is proud to announce our participation in Printing United Expo 2025! 
  Come visit us at Booth #2582. We're excited to connect 
  with industry professionals and showcase our products
  </div>
<hr></hr>
  <div>
    <b>Event Date(s):</b>  Oct. 22-24, 2025
  </div>

  <div>
    <b>Event Location: </b>  Orlando, FL
  </div>

  <div>
    <b>Booth Number: </b>  2582
  </div>
<div>
  <b>Website</b> Locate Booth <a href='https://pru25.mapyourshow.com/8_0/exhview/index.cfm?orsearchtype0=booth&orsearchvalue0=2582&orsearchdisplay0=Booths&orsearchvaluedisplay0=2582#0'>Here!</a>

</div>

<br></br>
<div>
  <b>*Link Note: </b>After clicking on the link, please click our comapny name which will be listed on the right side of the page and it will take you to our booth as seen below:
 <img src ={eventHelpImg}/>
</div>



       {/* put links i here or custom */}
       {/* EXAMPLE BELOW */}
       {/* <a href='https://www.google.com/'>Website goes to google.com</a> */}
       
    </Events>






</EventsSection>
   </div>
  )
}
