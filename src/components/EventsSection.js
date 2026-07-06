import React from 'react'

export default function EventsSection({children}) {
  return ( 
  
  <div className='ncaEventsMain'>
    <div className="homeHorizontalRule" ></div>    
    <h1>NEWS & Events</h1>
    <div className="industriesSperator"></div>
    <div className='ncaEvents center'>
      {/* Children are in Home.js at the bottom inside <Event> </Event> */}
    {children}
    </div>
    </div>
  )
}
