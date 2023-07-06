import React from 'react'
import Product from '../../components/Product'
import metal1 from '../../images/railcarPage-imgs/forgedMetal-imgs/Forged-Metal-1-1800x800-1.jpg'
import metal2 from '../../images/railcarPage-imgs/forgedMetal-imgs/Forged-Metal-2-1800x800.jpg'
import metal3 from '../../images/railcarPage-imgs/forgedMetal-imgs/Forged-Metal-3-1800x800.jpg'

export default function FrogedMetal() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Forged Metal");
  
  return (
    <div className='productPageBgColor'>
    <div className='forgedMetalPage productPagesPaddingToEscapeSpacing productPagesFormatter'>

<Product
              productTitle={"Forged Metal"}
        
              productDescriptions={[
       
            ]}
    
              productDetails={[
                'Custom Shapes and Sizes',
                'One-piece Construction and Made of Several Diameter Knurled Stainless Steel Rod', 
                'The Aluminum Foil Protects the Material Against Penetration from Liquids, Ensuring     that the Product Meets the Highest Hygiene Requirements ', 
                'Sand Blasting, Painting, Powder Coating, and Plating Available',
                'Available in Stainless Steel or Carbon Steel Materials',
                 
                ]}

              
    
               productSlideImgs={[ 
                metal1,
                metal2,
                metal3
                 
                  ]}

                  linksToDocuments={[]}

    
/>

        


    </div>
    </div>
  )
}
