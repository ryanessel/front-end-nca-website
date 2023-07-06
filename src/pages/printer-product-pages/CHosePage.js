import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/C-hose/A-E-SJ-Black-1R.jpg'
import bHose from '../../images/printerPage-imgs/C-hose/B-E-SJ-Black-2R.jpg'
import cHose from '../../images/printerPage-imgs/C-hose/C-black-reg-table-2.png'

import ChoseInchData from '../../docs/printer-docs/c-hose-multiple-docs/inch_eng_E-SJ-BKnishiyama-profile-added.pdf'
import ChoseMmData from '../../docs/printer-docs/c-hose-multiple-docs/small-version-HAKKO_E-SJ-BK_Flexible-Fluorine-ETFE-Resin-Tubing-Black_June-2022_5314637.pdf'
import ChoseTestData from '../../docs/printer-docs/c-hose-multiple-docs/IJP-リーフレット-Data-英語版_最終データ_20200330.pdf'

export default function CHosePage() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Fluorine (ETFE) Resin Tubing Black (HAKKO EIGHTRON) ");
  return (
    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

    <Product 
    
    productTitle={"Flexible Fluorine (ETFE) Resin Tubing Black (HAKKO EIGHTRON)"}
    titleClass={'productTitle'}
    productDescriptions={[]}

      productDetails={[
         'For Industrial Ink-Jet Printers (For UV Ink Supplying Pipes)', 
         'For Transferring UV-based Paints and Solvents of the Painting Equipment', 
         'For Transferring Chemicals used in Laboratory Equipment',
         ' For Transferring Chemicals used in Semiconductor-Related Devices and Flat-Panel Display (FPD) Manufacturing Devices',
         'For Filling Line of UV Paints and UV-based Adhesives',
       
       ]}

       productSlideImgs={[ 
         aHose,
         bHose,
         cHose
          ]}
          
   //use this to pass link to pdfs etc
       linksToDocuments={[ChoseInchData, ChoseMmData, ChoseTestData]}
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
