import React from 'react'

import Product from '../../components/Product'

import PofSpecs from '../../images/it-imgs/pof-imgs/Main-Sepcifications.png'

export default function Pof() {
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Nut Type Fittings for Multi-Layer Tubing (HAKKO EIGHTRON)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'Various Lengths', 
             "Factory automation equipment, office automation equipment, electrical or railway equipment, robots used for manufacturing, plant networks, arcade game machines", 
             
           ]}

        
           linkData={[
            {link: 'https://www.hitachi-ite.co.jp/english/products/hylink/index.html',
             text: 'Hitachi’s POF page. '
            },

            {link: 'https://www.hitachi-ite.co.jp/english/index.html',
             text: 'Hitachi’s General page.  '
            },                    
                    ]}

           productSlideImgs={[ 
             PofSpecs,

              ]}
              customClass={"pofSliderImage"}
       //use this to pass link to pdfs etc
         
          
           whoToEmailMsg={[
            'Please email sales with any inquires related to these products: ',
            'sales@nishiyama-usa.com'
          ]}

            linksToDocuments={[]}
        
        >




        </Product>

        </div>
    </div>
  )
}
