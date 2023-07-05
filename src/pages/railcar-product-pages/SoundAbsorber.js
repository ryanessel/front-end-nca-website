import React from 'react'
import Product from '../../components/Product'
import soundAbsorber1 from '../../images/railcarPage-imgs/soundAbsorber-imgs/Sound-Absorber-1-1800x800.jpg'
import soundAbsorber2 from '../../images/railcarPage-imgs/soundAbsorber-imgs/Sound-Absorber-2-1200x800.jpg'

export default function SoundAbsorber() {
  return (
    <div className='productPageBgColor'>
    <div className='soundAbsorberPage productPagesPaddingToEscapeSpacing productPagesFormatter'>
        
<Product
              productTitle={"Sound Absorber"}
        
              productDescriptions={[
       
            ]}
    
              productDetails={[
                'No Long-term Moisture Retention and Very Good Protection Against Water Splashes',
                'In Vibration Tests, the Fiber Composite Showed No Tendency to Break Up', 
                'The Aluminum Foil Protects the Material Against Penetration from Liquids, Ensuring     that the Product Meets the Highest Hygiene Requirements ', 
                'Excellent Sound Absorption Values',
                'Specification Engineered to Comply with FST Standard (ASTM E162, E662, and BSS7239).',
                 
                ]}
    
               productSlideImgs={[ 
                soundAbsorber1,
                soundAbsorber2
                 
                  ]}
                  linksToDocuments={[]}


/>

    </div>
    </div>
  )
}
