import React from 'react'
import Product from '../../components/Product'
import rubberSheets from "../../images/railcarPage-imgs/rubberSheets-imgs/Rubber-Sheet-1-1640x800.jpg"

export default function RubberSheets() {
  return (
    <div className='productPageBgColor'>
    <div className='rubberSheetsPage productPagesPaddingToEscapeSpacing productPagesFormatter'>

<Product
              productTitle={"Rubber Sheets"}
        
              productDescriptions={[
                "NISHIYAMA Corporation of America offers chloroprene rubber sheet products for the rail car market. Specification engineered to comply with FST* and NFPA130 standards. Custom die-cuts are available for packings, shims, gaskets, and strips with adhesive tape. EPDM + CR blended sponge rubber sheets with PSA are also available.",
                "* Meets ASTM E162, E662, E1354, C1166, and BSS7239. Option for ASTM D2000 is also available.",
                "We also have the ability to supply all commercial grade industrial rubber materials including:"
            ]}
    
              productDetails={[
                'Natural Rubber',
                'SBR', 
                'NBR', 
                'CR',
                'EPDM',
                'Silicone', 
                'Butyl', 
                'Urethane',

                 
                ]}
    
               productSlideImgs={[ 
                rubberSheets
                 
                  ]}
    
                  linksToDocuments={[]}

/>



    </div>
    </div>
  )
}
