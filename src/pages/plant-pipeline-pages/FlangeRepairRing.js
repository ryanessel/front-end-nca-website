import React from 'react'

import aFRR from '../../images/plant-imgs/flange-repair-imgs/A-FLANGEREPAIR-RING-1.jpg'
import bFRR from '../../images/plant-imgs/flange-repair-imgs/B-Flange-Repair-Ring-Install-resized.jpg'
import cFRR from '../../images/plant-imgs/flange-repair-imgs/C-FLANGEREPAIR-RING-3.jpg'

import PlidcoBrochure from '../../docs/pipeline-docs/flange-repair-ring-docs/Plidco-brochure.pdf'
import FRRdataSheet from '../../docs/pipeline-docs/flange-repair-ring-docs/Flange-Repair-Ring-Catalog.pdf'
import FRRinstallation from '../../docs/pipeline-docs/flange-repair-ring-docs/FlangeRepair-Ring-Install-1.pdf'
import SealantGun from '../../docs/pipeline-docs/flange-repair-ring-docs/Sealant-Injection-Install.pdf'
import PlidcoRFQ from '../../docs/pipeline-docs/plidco-rfq-and-export-compliance/RFQ Form - QMF 151.pdf'


import Product from '../../components/Product'

export default function FlangeRepairRing() {
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | Flange+Repair Ring (Plidco Products) ");
  return (
    <div className='productPageBgColor'>
        <div className='productPagesFormatter productPagesPaddingToEscapeSpacing '>

        <Product 
        
        productTitle={"Flange+Repair Ring (Plidco Products)"}
        titleClass={'productTitle'}
        productDescriptions={[]}

          productDetails={[
             'The PLIDCO® Flange+Repair Ring is designed to seal the leaking gasket on the outside diameter of the flange set. This can be done with the pipeline still in service reducing costly shut downs. Once the PLIDCO® Flange+Repair Ring is torqued to the correct specification, the leak will follow the path of least resistance to the flange bolts. PLIDCO® solves this issue by injecting sealant through the injection ports to fill the gaps around the flange bolts.', 

             "The PLIDCO® Flange+Repair Rings incorporate steel GirderRings to hold packing in place during installation. The PLIDCO® Flange+Repair Rings are designed in accordance with ASME Section VIII, using pressure vessel code approved materials, such as, ASTM A516 Gr. 70, ASTM A193 Gr. B7, and ASTM A1949 Gr.2H. Other materials are available upon request.", 

             "PLIDCO® offers many packing/seal material types and sealant options in order to ensure proper compatibility with the pipeline contents. The PLIDCO® Flange+Repair Rings can be removed during the next scheduled turnaround, reconditioned, and put back in customer stock to be ready for the next emergency.",

             "The PLIDCO® Flange+Repair Ring is typically available in stock to be installed on standard flange sizes 1/2” through 24”, ASME B16.5 150# through 600#. Custom designed Flange+Repair Rings can be designed for almost all applications outside of this range. Larger or special sizes, higher temperature and pressure ratings available on application.",

             
             
           ]}


           productDetails2={[
            'PLIDCO products have been used for pipeline repair and maintenance for over 70 years.', 

            "PLIDCO products offer 5-year limited warranty, which is the best warranty in the industry.", 

            "Nishiyama Corporation of America is the authorized PLIDCO reseller for New York, New Jersey, Cconnecticut and Washington D.C.",

            "PLIDCO offers other pipeline repair products. Please see the PLIDCO brochure for further details.",

            
            
          ]}

          productDetailsClasses={['prodListItem', 'prodListBgColorGrey' ]}
         

           productSlideImgs={[ 
             aFRR,
             bFRR,
             cFRR
              ]}
              
       //use this to pass link to pdfs etc
           
        
           linksToDocuments={[PlidcoBrochure, FRRdataSheet, FRRinstallation, SealantGun, PlidcoRFQ]}
           documentText={['Brochure','Data Sheet', 'Installation', ' Sealant Gun', 'RFQ FORM' ]}
        

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

           whoToEmailMsg={[
            'Please email Ryan with any inquires related to these products: ',
            'ryan@nishiyama-usa.com'
          ]}

          embedRfqForm={PlidcoRFQ}
        
        >


        </Product>

        </div>
    </div>
  )
}
