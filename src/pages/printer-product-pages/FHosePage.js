import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/F-hose/A-Hakko-fitting-1.jpg'
import bHose from '../../images/printerPage-imgs/F-hose/B-Hakko-fitting-2.jpg'
import cHose from '../../images/printerPage-imgs/F-hose/C-Hakko-fitting-3.jpg'

import FhoseFittingData from '../../docs/printer-docs/F-eng_E-FTS-F2018-6nishiyama-profile-added.pdf'

export default function FHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Nut Type Fittings for Multi-Layer Tubing (HAKKO EIGHTRON) ");
  return (
    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

    <Product 
    
    productTitle={"Nut Type Fittings for Multi-Layer Tubing (HAKKO EIGHTRON)"}
    titleClass={'productTitle'}
    productDescriptions={[]}

      productDetails={[
         'For Pipes such as Industrial Machines and Molding Machines', 
         'For Pipes such as Precision Machines and Semiconductor-related Equipment', 
         'For Pipes of Beverage, Cosmetics, Pharmaceutical, and Alcohol',
         'Manufacturing Equipment of Chemicals, Waste Oil, Waste Fluids, and Organic Solvents',
    
       
       ]}

       productSlideImgs={[ 
         aHose,
         bHose,
         cHose,
          ]}
          
   //use this to pass link to pdfs etc
       linksToDocuments={[FhoseFittingData]}// for blank prop, use [] with nothing in it.
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
