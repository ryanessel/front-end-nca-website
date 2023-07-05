import React from 'react'

import Product from '../../components/Product'

import aSS from '../../images/plant-imgs/split-sleeve-imgs/A-SplitSleeve-1.jpg'
import bSS from '../../images/plant-imgs/split-sleeve-imgs/B-SplitSleeve-2.jpg'
import cSS from '../../images/plant-imgs/split-sleeve-imgs/C-SplitSleeve-3.1.jpg'

import PlidcoBrochure from '../../docs/pipeline-docs/split-sleeve-docs/Plidco-brochure-1.pdf'
import SSdataSheet from '../../docs/pipeline-docs/split-sleeve-docs/Split-Sleeve-Catalog.pdf'
import SSinstalltion from '../../docs/pipeline-docs/split-sleeve-docs/SplitSleeve-Install.pdf'
import PlidcoRFQ from '../../docs/pipeline-docs/plidco-rfq-and-export-compliance/RFQ Form - QMF 151.pdf'

export default function SplitSleeve() {
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Split+Sleeve (Plidco Products)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'The PLIDCO® Split+Sleeves are repair fittings that can be used to seal leaks caused by corrosion or damage on onshore and subsea pipelines.', 

             "The PLIDCO® Split+Sleeves are easy and safe to install. The leak is sealed once the fitting is fully torqued on the line. For a permanent repair, the fitting can be welded to the pipeline while it is under flow. Fittings not welded to the line can be removed, reconditioned by PLIDCO® and put back in the customers safety stock.", 

             "Steel GirderRings prevent displacement & damage of packing during installation.",

             "Standard working pressure is 1000 maop. Fittings are tested to 1.5 times the design pressure.",

             'Available from stock in API pipe sizes 1-1/2 through to 48-1/2 inch. Higher working pressures, longer lengths and other sizes available on request',
             
             'Buna-N packing is standard, other packing materials available.',
             
             'Custom emergency repair fittings are an option when a stock fitting is not applicable'
             

             
             
           ]}


           productDetails2={[
            'PLIDCO products have been used for pipeline repair and maintenance for over 70 years.', 

            "PLIDCO products offer 5-year limited warranty, which is the best warranty in the industry.", 

            "Nishiyama Corporation of America is the authorized PLIDCO reseller for New York, New Jersey, Cconnecticut and Washington D.C.",

            "PLIDCO offers other pipeline repair products. Please see the PLIDCO brochure for further details.",

            
            
          ]}

           productSlideImgs={[ 
             aSS,
             bSS,
             cSS
              ]}
              

              productDetailsClasses={['prodListItem', 'prodListBgColorGrey' ]}
       //use this to pass link to pdfs etc
           linksToDocuments={[ PlidcoBrochure, SSdataSheet, SSinstalltion, PlidcoRFQ]}
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
