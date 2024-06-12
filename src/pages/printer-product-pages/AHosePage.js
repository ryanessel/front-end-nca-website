import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/A-hose/A-E-SJUS-BK-1.jpg'
import bHose from '../../images/printerPage-imgs/A-hose/B-ultra-soft-black-table.png'
import cHose from '../../images/printerPage-imgs/A-hose/C-ultra-soft-black-fittings-8.png'

import AhoseDataSheet from '../../docs/printer-docs/A-HAKKO_E-SJUS-BK_Flexible-Fluorine-ETFE-Resin-Tubing-Black-Ultra-Soft-Type_June-2022.pdf'

export default function AHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Fluorine (ETFE) Resin Tubing Black (Ultra Soft Type) (HAKKO EIGHTRON) ");

  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"FLEXIBLE FLUORINE (ETFE) RESIN TUBING BLACK (ULTRA SOFT TYPE) (HAKKO EIGHTRON)"}
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
           linksToDocuments={[AhoseDataSheet]}
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
