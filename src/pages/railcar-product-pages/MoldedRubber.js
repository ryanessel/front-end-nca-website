import React from 'react'
import Product from '../../components/Product'
import moldedRubber1 from '../../images/railcarPage-imgs/moldedRubber-imgs/Molded-Rubber-1.jpg'
import moldedRubber2 from '../../images/railcarPage-imgs/moldedRubber-imgs/Molded-Rubber-2.jpg'

export default function MoldedRubber() {
  return (
    <div className='productPageBgColor'>
    <div className='moldedRubberPage productPagesPaddingToEscapeSpacing productPagesFormatter'>
    

<Product
              productTitle={"Molded Rubber"}
        
              productDescriptions={[
                "NISHIYAMA Corporation of America supplies chloroprene molded rubber products for the rail car market. Specification engineered to comply with FST* and NFPA130 standards. We offer two kinds of hardness, durometer 67 and 75, depending upon the application. Available for custom cable cleats, gaskets, and cushions.",
                "* Meets ASTM E162, E662, E1354, C1166, and BSS7239. Option for ASTM D2000 is also available."
            ]}
    
              productDetails={[
                 'SBR', 
                 "NBR", 
                 "CR",
                 "EPDM"
                ]}
    
               productSlideImgs={[ 
                 moldedRubber1,
                 moldedRubber2,
                 
                  ]}
                  linksToDocuments={[]}


/>

    </div>
    </div>
  )
}
