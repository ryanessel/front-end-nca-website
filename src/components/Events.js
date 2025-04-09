import React from 'react'

export default function Events({ eventPostedDate, eventTitleAndDate, eventDate, eventBlurb, children}) {



  return (
    <div className='eventsVariableComponent center'>
        
      {eventPostedDate &&  <p><strong>Date Posted:</strong>{eventPostedDate} </p>}
       <h2>{eventTitleAndDate}</h2> 
       <div>{eventDate}</div>
       <div className="eventsComponentSeperator"></div>
       <p>{eventBlurb}</p>
       {/* test; format */}
       <p>{children}</p>  {/* gets the stuf between the "EventsSection" component tag*/}
       





    </div>
  )
}
