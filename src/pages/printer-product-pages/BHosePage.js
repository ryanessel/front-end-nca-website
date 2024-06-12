import React from 'react'

import Product from '../../components/Product'
import aHose from '../../images/printerPage-imgs/B-hose/A-E-SJUS-1.jpg'
import bHose from '../../images/printerPage-imgs/B-hose/B-ultra-soft-clear-table-mm.png'
import cHose from '../../images/printerPage-imgs/B-hose/C-ultra-soft-clear-table-OG-fittings-2.png'

import BhoseDataSheet from '../../docs/printer-docs/B-HAKKO_E-SJUS_Flexible-Fluorine-ETFE-Resin-Tubing-Ultra-Soft-Type_June-2022.pdf'

export default function BHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Fluorine (ETFE) Resin Tubing Clear (Ultra Soft Type) (HAKKO EIGHTRON) ");
  return (
    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

    <Product 
    
    productTitle={"Flexible Fluorine (ETFE) Resin Tubing Clear (Ultra Soft Type) (HAKKO EIGHTRON)"}
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
       linksToDocuments={[BhoseDataSheet]}
       documentText={['Data Sheet' ]}
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
