import React from 'react'
import Product from '../../components/Product'
import moldlessRub1 from '../../images/railcarPage-imgs/moldlessRubber-imgs/Moldless-rubber-1-1800x1200.jpg'
import moldlessRub2 from '../../images/railcarPage-imgs/moldlessRubber-imgs/Moldless-rubber-2-1800x1200.jpg'
import moldlessRub3 from '../../images/railcarPage-imgs/moldlessRubber-imgs/Moldless-rubber-3-1800x1200.jpg'




export default function MoldlessRubber() {
  return (
    <div className='productPageBgColor'>
    <div className='moldlessRubberPage productPagesPaddingToEscapeSpacing productPagesFormatter'>
    <Product
              productTitle={"Moldless Rubber"}
        
              productDescriptions={[

            ]}
    
              productDetails={[
                "Can build wide range of shapes without metal mold",
                "No minimum order",
                "Great Variety of Stocked Materials",
                "No Tooling Cost",
                "Quick delivery"             
                 
                ]}
    
               productSlideImgs={[ 
                moldlessRub1,
                moldlessRub2,
                moldlessRub3
                 
                  ]}
                  linksToDocuments={[]}
/>
    
    </div>
    </div>
  )
}
