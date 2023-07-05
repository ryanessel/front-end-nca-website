import React from 'react'

import Product from '../../components/Product'

import aSC from '../../images/plant-imgs/smith-clamp-imgs/SmithClamp-1.jpg'

// DOCs
import PlidcoBrochure from '../../docs/pipeline-docs/smith-clamp/Plidco-brochure.pdf'
import SmithClampDataSheet from '../../docs/pipeline-docs/smith-clamp/Smith-Clamp-Catalog.pdf'
import SmithClampInstallationSheet from '../../docs/pipeline-docs/smith-clamp/SmithClamp-Install.pdf'
import PlidcoRFQ from '../../docs/pipeline-docs/plidco-rfq-and-export-compliance/RFQ Form - QMF 151.pdf'


export default function SmithClamp() {
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Smith+Clamp (Plidco Products)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'The PLIDCO® Smith+Clamp™ is light-weight and easy to handle which makes using it to shut-off high pressure pit-hole leaks simple and sensible. The exclusive pilot pin makes it possible to locate pit-hole leaks even if they can’t be seen which makes the Smith+Clamp™ the product you want to use in dark spaces or on submerged lines. The force screw exerts pressure directly on the sealing cone, rather than applying force with the draw bolts, which reduces the danger of caving in corroded pipe. This product can be used while the pipeline is in service.', 

             "The maximum allowable working (maop) pressure of a PLIDCO® Smith+Clamp™ is based on a 1/8” diameter pit-hole. Larger holes, up to ½” diameter, can be sealed at reduced pressures. Contact PLIDCO® for pressure recommendations.", 

             "Available in standard sizes 0.5” through 48”; 2000 maop. Custom sizes available upon request.",

             "Buna-N is standard packing for the cone. Viton, Silicone and other packing options are available upon request.",


             

             
             
           ]}


           productDetails2={[
            'PLIDCO products have been used for pipeline repair and maintenance for over 70 years.', 

            "PLIDCO products offer 5-year limited warranty, which is the best warranty in the industry.", 

            "Nishiyama Corporation of America is the authorized PLIDCO reseller for New York, New Jersey, Cconnecticut and Washington D.C.",

            "PLIDCO offers other pipeline repair products. Please see the PLIDCO brochure for further details.",

            
            
          ]}

           productSlideImgs={[ 
             aSC,
            
              ]}
              

              productDetailsClasses={['prodListItem', 'prodListBgColorGrey' ]}
       //use this to pass link to pdfs etc
           linksToDocuments={[PlidcoBrochure, SmithClampDataSheet, SmithClampInstallationSheet, PlidcoRFQ ]}
           documentText={['Brochure', 'Data Sheet', 'Installation', 'RFQ FORM']}
        
           whoToEmailMsg={[
            'Please email Ryan with any inquires related to these products: ',
            'ryan@nishiyama-usa.com'
          ]}
        
          rfqInstructions={[
            '- Urgency',
            '- Type Of Product',
            '- Diameter',
            '- End User',
            '- End User Location',
            '- Line contents/media',
          	'- MAOP',
          	'- MIN MAX TEMP',
          	'- Length of defect',
          	'- Whether there is H2S present in the line']}
          
            embedRfqForm={PlidcoRFQ}

        >




        </Product>

        </div>
    </div>
  )
}
