import React from 'react'

export default function EventsSection({children}) {
  return ( 
  
  <div className='ncaEventsMain'>
    <div className="homeHorizontalRule" ></div>    
    <h1>NEWS & Events</h1>
    <div className='ncaEvents center'>
    {children}
    </div>
    </div>
  )
}
