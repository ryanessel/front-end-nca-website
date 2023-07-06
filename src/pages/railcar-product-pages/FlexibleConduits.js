import React from 'react'
import Product from '../../components/Product'
import flexCon1 from '../../images/railcarPage-imgs/flexibleConduit-imgs/Felexible-conduit-1-1800x800.jpg'
import flexCon2 from '../../images/railcarPage-imgs/flexibleConduit-imgs/Felexible-conduit-2-1800x800-1.jpg'
import flexCon3 from '../../images/railcarPage-imgs/flexibleConduit-imgs/Felexible-conduit-3-1800x800.jpg'

export default function FlexibleConduits() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flexible Conduits");
  return (
    <div className='productPageBgColor'>
    <div className='flexibleConduitsPage productPagesPaddingToEscapeSpacing productPagesFormatter'>


<Product
              productTitle={"Flexible Conduits"}
        
              productDescriptions={[
                "KCR Flexible Conduits are watertight. The rubber sheathing material is made from CSM (Chlorosulfonated Polyethylene). CSM is durable and resistant against ozone deterioration. Specification engineered to comply with FST* and NFPA130 standards. Assembled with various types of fittings.",
                "*Meets standards ASTM E162, E662, E1354, C1166, and BSS7239."
            ]}
    
              productDetails={[
         
               
                 
                ]}
    
     

               productSlideImgs={[ 
                flexCon1,
                flexCon2,
                flexCon3
                 
                  ]}
                  linksToDocuments={[]}
/>

    </div>
    </div>
  )
}
