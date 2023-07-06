import React from 'react'
import Product from '../../components/Product'
import metalFab1 from '../../images/railcarPage-imgs/metalFabrication-imgs/Metal-Fabrication-1-1800x800.jpg'
import metalFab2 from '../../images/railcarPage-imgs/metalFabrication-imgs/Metal-Fabrication-2-1800x800-2.jpg'
import metalFab3 from '../../images/railcarPage-imgs/metalFabrication-imgs/Metal-Fabrication-3-1800x800.jpg'

export default function MetalFabrication() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Metal Fabrication");
  return (
    <div className='productPageBgColor'>
    <div className='metalFabricationPage productPagesPaddingToEscapeSpacing productPagesFormatter'>
        <Product
              productTitle={"Metal Fabrication"}
        
              productDescriptions={[
       
            ]}
    
              productDetails={[
                'Custom Shapes and Sizes',
                'Sand Blasting, Painting, Powder Coating (FST Compliant), and Plating Available', 
                'Available in Stainless Steel, Carbon Steel, Copper, and Aluminum', 
                'FST Compliant (ASTM E162, E662, and BSS7239) Powder Coating Insulation for Bus Bars is also Available',
               
                 
                ]}

            
    
               productSlideImgs={[ 
                metalFab1,
                metalFab2,
                metalFab3
                 
                  ]}
                  linksToDocuments={[]}
/>

        
    </div>
    </div>
  )
}
