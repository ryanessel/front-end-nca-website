import React from 'react'
import Product from '../../components/Product'
import heatShrink1 from '../../images/railcarPage-imgs/heatShrink-imgs/Heat-Shrink-Tube-1-1800x800.jpg'

export default function HeatShrink() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Heat Shrink");
  return (
    <div className='productPageBgColor'>
    <div className='heatShrinkPage productPagesPaddingToEscapeSpacing productPagesFormatter'>
        <Product
              productTitle={"Heat Shrink"}
        
              productDescriptions={[
                "NISHIYAMA Corporation of America provides a Halogen Free Flame Retardant Heat Shrink Tube for the rail car market. Specification engineered to comply with FST* and NFPA 130 standards. It can be used for products and places which require high flame retardant, such as passenger rail cars. It is also possible to cover and protect products at lower cost with heat shrinking, compared to the press fitting or dipping. We provide ID 0.079” – 1.575” ( 2.0 mm – 40.0 mm) after shrinking.",
                "*Meets NFPA130, ASTM E162, E662, and BSS7239."
            ]}
    
              productDetails={[
         
               
                 
                ]}

               
    
               productSlideImgs={[ 
                heatShrink1,
                         
                  ]}

                //  maybe use JSX here.
                  relatedItemsLinks={[]}
                  linksToDocuments={[]}
    
/>
    

    </div>
    </div>
  )
}
