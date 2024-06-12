import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/D-hose/A-E-SJ-Clear-1R.jpg'
import bHose from '../../images/printerPage-imgs/D-hose/B-E-SJ-Clear-2R.jpg'
import cHose from '../../images/printerPage-imgs/D-hose/C-soft-clear-table-smaller.png'

import DhoseInchData from '../../docs/printer-docs/d-hose-multiple-docs/inch_eng_E-SJnishiyama-profile-added.pdf'
import DhoseMmData from '../../docs/printer-docs/d-hose-multiple-docs/HAKKO_E-SJ_Flexible-Fluorine-ETFE-Resin-Tubing_June-2022.pdf'
import DhoseTestData from '../../docs/printer-docs/d-hose-multiple-docs/IJP-リーフレット-Data-英語版_最終データ_20200330.pdf'

export default function DHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Fluorine (ETFE) Resin Tubing Clear (HAKKO EIGHTRON) ");
  return (
    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

    <Product 
    
    productTitle={"Flexible Fluorine (ETFE) Resin Tubing Clear (HAKKO EIGHTRON)"}
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
       linksToDocuments={[DhoseInchData, DhoseMmData, DhoseTestData,]}
       documentText={['INCH SIZE DATA', 'MM SIZE DATA', 'TEST DATA' ]}
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
