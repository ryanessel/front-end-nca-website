//About Us will be Route in App.js
import React from 'react'
import ncaBranchesImg from '../images/nca-branches.png'
import MainPageIndustriesSection from '../components/MainPageIndustriesSection'

export default function AboutUs() {
  
  const changeTitle = (yourTitleString) => {
    document.title = yourTitleString;
  }

changeTitle("Nishiyama | About Us");


  return (
    <div className='aboutUsMainBox'>
      <h1>AboutUs</h1>
      <div className="aboutUsSperator"></div>
      <div className='aboutUsBlurbOneAndTwo'>
        <div className='aboutUsBlurbOne '>
          <h2 className='hqOutline'>Headquarters Outline</h2>
      
      <div className='ncCompanyOutline'>

     <p className='ncOutlineFirstParagaph'>      Our parent company, the Nishiyama Corporation, is located in Tokyo, Japan.
      The Nishiyama Corporation was founded in 1916 as a trading company specializing in industrial rubber products.
    </p>   

     <p>
     The NISHIYAMA CORPORATION has since expanded into a wide range of industries, from energy and  utilities to rail freight, construction machines, industrial equipment, telecommunications,  semiconductors, e-business and IT solutions.
     </p>

<p>
Today, we offer our clients a variety of specialized technologies in different areas, predicated on the challenges of succession and innovation involving the creation of new and exciting ideas.

</p>

<p>
We strive to always stay ahead of the times in order to meet the needs of our customers.

</p>

<p>

Through our expertise in specialized development and problem-solving in a variety of industries,  the Nishiyama Corporation continues to grow and evolve by providing customers with the best matched scenarios in terms of technology, services and cost.
</p>



 {/* <p>
The Nishiyama Corporation of America was established as the United States subsidary in 1982 .

 </p> */}

</div>


        </div>

        <hr className="vertRule"></hr>
        <div className='aboutUsBlurbTwo'>
        <h2 className='ncaHistory'>History of NCA </h2>
        {/* <h2>Nishiyama Corporation of America's Story</h2> */}
        <p>
          <li>
          <strong>1974:</strong> A representative office of NISHIYAMA CORPORATION, which is a wholesaler and distributor based in Tokyo Japan, was established near Times Square in NYC. 
          </li>
        </p>
        
        <p>
          <li>
          <strong>1975:</strong> Signed agreement becoming the sole distributor and exporter of PLIDCO (Pipeline Development Company) products to Japanese customers. Plidco's Flange Repair Ring was first item ever imported from USA to Japan by NISHIYAMA CORPORATION of AMERICA
          </li>
        </p>

        <p>
          <li>
          <strong>1982:</strong>NISHIYAMA CORPORATION OF AMERICA was incorporated in NY to become a wholly owned U.S subsidiary of its parent company: the NISHIYAMA CORPORATION.
          </li>
        </p>


<p>
  <li>
  <strong>1987:</strong> NISHIYAMA CORPORATION OF AMERICA's office location was moved to Great Neck NY.
  </li>
</p>
<p>
  <li>
  <strong>2003:</strong> Formed a strategic alliance with Bruckman Rubber Co., in NE to supply U.S. made rubber and plastic products.
  </li>
</p>


<p>
  <li>
  <strong>2005:</strong> Supplied parts for New York Subway (1,600 cars, one of the largest # of cars ever  constructed in one project.)
  </li>
</p>


<p>
  <li>
  <strong>2006:</strong> Signed agreement becoming sole distributor of Shilling Robotics Manipulator to Japanese government marine earth science & technology.
  </li>
</p>

<p>
  <li>
  <strong>2012:</strong> Became sole distributor of PLIDCO  products for the United States East Coast.
  </li>
</p>

<p>
  <li>
  <strong>2013:</strong> Started supplying bio-fuel hoses to one of the largest U.S construction machinery manufacturers.
  </li>
</p>

<p>
  <li>
  <strong>2016:</strong> Became sole distributor of Japanese ink-hose manufacturer.
  </li>
</p>








        </div>


      </div>
    


{/*NISHIYAMA BRANCH MAP */}

      <h3>NISHIYAMA GLOBAL NETWORK</h3>
    <img className='ncaBranchesPic' src ={ncaBranchesImg}></img>

    </div>
  )
}
