import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/E-hose/A-E-PD-1.jpg'
import bHose from '../../images/printerPage-imgs/E-hose/B-E-PD-2.jpg'
import cHose from '../../images/printerPage-imgs/E-hose/C-E-PD-3.jpg'

import EhoseFittingData from '../../docs/printer-docs/E-mm_eng_E-PDnishiyama-profile-added.pdf'

export default function EHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Fluorine (PVDF) Resin Tubing Clear (HAKKO EIGHTRON) ");
  return (
    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

    <Product 
    
    productTitle={"Flexible Fluorine (PVDF) Resin Tubing Clear (HAKKO EIGHTRON)"}
    titleClass={'productTitle'}
    productDescriptions={[]}

      productDetails={[
        'For Industrial Ink-Jet Printers (For UV Ink Supplying tubes) -※ONLY FOR PRINTERS',  

       
       ]}

       productSlideImgs={[ 
         aHose,
         bHose,
         cHose
          ]}
          
   //use this to pass link to pdfs etc
       linksToDocuments={[EhoseFittingData]}
       documentText={['FITTING DATA' ]}
       whoToEmailMsg={[
        'Please email sales with any inquires related to these products: ',
        'sales@nishiyama-usa.com'
      ]}
    >

    </Product>

    </div>
</div>
  )
}
