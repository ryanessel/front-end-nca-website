//Contact Us will be Route in App.js
import React from 'react'
import ContactUsForm from '../components/ContactUsForm'

export default function ContactUs() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Contact Us");
  return (
    <div className='contactUsMainBox'>
    <h1>ContactUs</h1>

   
    <div className='contactUsFlexBox'>

  
    <iframe className='ncaGoogleMap'
      width="450"
      height="250"
 
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.2345336965107!2d-73.73070722403756!3d40.7853742090338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28996d6e94a69%3A0xef082b3e4826d08!2sNishiyama%20Corporation%20of%20America!5e0!3m2!1sen!2sus!4v1684856744301!5m2!1sen!2sus"
      allowFullScreen>
    </iframe>

    <ContactUsForm/>
    </div>

    </div>
  )
}



// /<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.2345336965107!2d-73.73070722403756!3d40.7853742090338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28996d6e94a69%3A0xef082b3e4826d08!2sNishiyama%20Corporation%20of%20America!5e0!3m2!1sen!2sus!4v1684856744301!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> / 