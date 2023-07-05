import React from 'react'

import Product from '../../components/Product'
import extrudRub1 from '../../images/railcarPage-imgs/railcarProduct-imgs/Extruded-Rubber-1-1800x993B1.jpg'
import extrudRub2 from '../../images/railcarPage-imgs/railcarProduct-imgs/Extruded-Rubber-2-1800x800.jpg'
import extrudRub3 from '../../images/railcarPage-imgs/railcarProduct-imgs/Extruded-Rubber-3-1800x800.jpg'


export default function ExtrudedRubber() {
  return (

    <div className='productPageBgColor'>
    <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>
        {/* <Product/> is super useful
            If there isn't anything in the props things
            below then it just won't display; it only displays info if it has it!
            this way you can reuse this component as an template to simple make pages!
            
            we can make many mapped things in the <Product/> component but if we don't 
            put anything int the props then nothing will show up! this allows us to greatly customeize
            the page without affecting other instance of <Product/> 

            so pages can be relativliy different between each part! yay!

            lets avoid wrapping the .map funciton calls in other elements or else it will streach out the page unnessecarily!!! 
        */}
       <Product 

          productTitle={"EXTRUDED RUBBER"}
        
          productDescriptions={[
            "NISHIYAMA Corporation of America provides chloroprene and silicone extruded rubber products for the US rail car market. Specification engineered to comply with FST* and NFPA130 standards. For chloroprene we offer two kinds of hardness, durometer 67 and 75. For silicone we also offer two kinds of hardness, durometer 55 and 75. Available for custom profile door edges, window gaskets, tubes, and seals. Vulcanization adhesion is also in our field of specialty. Furthermore silicone sponge extrusion is available.", 
            "* Meets ASTM E162, E662, E1354, C1166, and BSS7239. Option for ASTM D2000 is also available."]}

          productDetails={[
             'Natural Rubber', 
             "CR", 
             "silicone",
             "Synthetic Rubber",
             "Flexible Plastics"
           ]}

   

           productSlideImgs={[ 
              extrudRub1,
              extrudRub2,
              extrudRub3
              ]}
              
       //use this to pass link to pdfs etc
           linksToDocuments={[]}


       >
          
       </Product>

    </div>
    </div>
  )
}
