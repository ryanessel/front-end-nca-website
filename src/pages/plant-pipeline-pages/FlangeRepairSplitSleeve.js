import React from 'react'

import Product from '../../components/Product'

import aFRRSS from '../../images/plant-imgs/flange-repair-split-sleeve-imgs/Flange-Repair-SplitSleeve-1.jpg'

import PlidcoRFQ from '../../docs/pipeline-docs/plidco-rfq-and-export-compliance/RFQ Form - QMF 151.pdf'
import FRRSSDataSheet from '../../docs/pipeline-docs/flange-repair-split-sleeve-docs/Flange-Repair-Split-Sleeve-Catalog.pdf'
import FRRSSinstall from '../../docs/pipeline-docs/flange-repair-split-sleeve-docs/Flange-Repair-SplitSleeve-Install.pdf'
import PlidcoBrochure from '../../docs/pipeline-docs/flange-repair-split-sleeve-docs/Plidco-brochure.f847b80e159e6de4c77e-1.pdf'

export default function FlangeRepairSplitSleeve() {
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Flange+Repair Ring (Plidco Products)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'The PLIDCO® Flange Repair Split+Sleeve is used to fully encompass a flange set stopping the leak by sealing on the pipe beyond the flange welds. It has the ability to cover a wide variety of flange types and classes for both onshore and offshore applications.', 

             "It is safe, easy to install, and as an option, can be welded while the line is in service.", 

             "The PLIDCO® Flange Repair Split+Sleeve is hydrostatically tested to 1.5 times its working pressure and is designed using ASME Section VIII and API 6H.",

             "The design includes bolt induced bending stresses where applicable. Steel GirderRing holds the seal material in place to prevent displacement during installation. The body and seal design have over 60 years of proven success.",

             'The PLIDCO® Flange Repair Split+Sleeve can be used for a temporary or permanent repair. If not welded on the line, the fitting can be reconditioned by PLIDCO® Flange Repair and returned to customer stock.',
             'Buna-N packing is standard. Viton, Silicone, Kevlar, Hycar and other materials are available upon request.'

             
             
           ]}


           productDetails2={[
            'PLIDCO products have been used for pipeline repair and maintenance for over 70 years.', 

            "PLIDCO products offer 5-year limited warranty, which is the best warranty in the industry.", 

            "Nishiyama Corporation of America is the authorized PLIDCO reseller for New York, New Jersey, Cconnecticut and Washington D.C.",

            "PLIDCO offers other pipeline repair products. Please see the PLIDCO brochure for further details.",

            
            
          ]}

           productSlideImgs={[ 
             aFRRSS,
  
              ]}
              

              
       //use this to pass link to pdfs etc
           linksToDocuments={[PlidcoBrochure, FRRSSDataSheet, FRRSSinstall, PlidcoRFQ]}
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
