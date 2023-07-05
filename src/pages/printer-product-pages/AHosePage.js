import React from 'react'

import Product from '../../components/Product'

import aHose from '../../images/printerPage-imgs/A-hose/A-E-SJUS-BK-1.jpg'
import bHose from '../../images/printerPage-imgs/A-hose/B-ultra-soft-black-table.png'
import cHose from '../../images/printerPage-imgs/A-hose/C-ultra-soft-black-fittings-8.png'

import AhoseDataSheet from '../../docs/printer-docs/A-HAKKO_E-SJUS-BK_Flexible-Fluorine-ETFE-Resin-Tubing-Black-Ultra-Soft-Type_June-2022.pdf'

export default function AHosePage() {
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Nut Type Fittings for Multi-Layer Tubing (HAKKO EIGHTRON)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'For Pipes such as Industrial Machines and Molding Machines', 
             "For Pipes such as Precision Machines and Semiconductor-related Equipment", 
             "For Pipes of Beverage, Cosmetics, Pharmaceutical, and Alcohol",
             "Manufacturing Equipment of Chemicals, Waste Oil, Waste Fluids, and Organic Solvents",
             
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
