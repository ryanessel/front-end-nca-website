//NEED TO DO ROUTES



import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
// RAILCAR INDUSTRY IMPORTS
import IndustryRailcar from './pages/IndustryRailcar';
  import ExtrudedRubber from './pages/railcar-product-pages/ExtrudedRubber';
  import MoldedRubber from './pages/railcar-product-pages/MoldedRubber';
  import RubberSheets from './pages/railcar-product-pages/RubberSheets';
  import SoundAbsorber from './pages/railcar-product-pages/SoundAbsorber';
  import FrogedMetal from './pages/railcar-product-pages/FrogedMetal';
  import MetalFabrication from './pages/railcar-product-pages/MetalFabrication';
  import FlexibleConduits from './pages/railcar-product-pages/FlexibleConduits';
  import MoldlessRubber from './pages/railcar-product-pages/MoldlessRubber';
  import HeatShrink from './pages/railcar-product-pages/HeatShrink';

// PRINTER INDUSTRY IMPORTS
import IndustryPrinter from './pages/IndustryPrinter';
  import AHosePage from './pages/printer-product-pages/AHosePage';
  import BHosePage from './pages/printer-product-pages/BHosePage';
  import CHosePage from './pages/printer-product-pages/CHosePage';
  import DHosePage from './pages/printer-product-pages/DHosePage';
  import EHosePage from './pages/printer-product-pages/EHosePage';
  import FHosePage from './pages/printer-product-pages/FHosePage';
// PLANT INDUSTRY IMPORTS
import IndustryPlant from './pages/IndustryPlant';
  import FlangeRepairRing from './pages/plant-pipeline-pages/FlangeRepairRing';
  import SplitSleeve from './pages/plant-pipeline-pages/SplitSleeve';
  import FlangeRepairSplitSleeve from './pages/plant-pipeline-pages/FlangeRepairSplitSleeve';
  import SmithClamp from './pages/plant-pipeline-pages/SmithClamp';

import IndustryConstruction from './pages/IndustryConstruction';
import IndustryPlasticOpticalFiber from './pages/IndustryPlasticOpticalFiber';
  import Pof from './pages/it-pages/Pof';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* setup routes here */}
      <Routes>

        {/* GENERAL ROUTES */}
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/aboutUs"} element={<AboutUs/>}></Route>
        <Route path={"/contactUs"} element={<ContactUs/>}></Route>
       

        {/* INDUSTRIES ROUTES */}
        <Route path={"/industries/railcar"} element={<IndustryRailcar/>}></Route>
           {/* RAILCAR PRODUCTS PAGES */}
            <Route path={"/industries/railcar/extrudedRubber"} element={<ExtrudedRubber/>} ></Route>
            <Route path={"/industries/railcar/moldedRubber"} element={<MoldedRubber/>} ></Route>
            <Route path={"/industries/railcar/rubberSheets"} element ={<RubberSheets/>}></Route>
            <Route path={"/industries/railcar/soundAbsorber"} element={<SoundAbsorber/>}></Route>
            <Route path={"/industries/railcar/forgedMetal"} element={<FrogedMetal/>}></Route>
            <Route path={"/industries/railcar/metalFabrication"} element={<MetalFabrication/>}></Route>
            <Route path={"/industries/railcar/flexibleConduits"} element={<FlexibleConduits/>}></Route>
            <Route path={"/industries/railcar/moldlessRubber"} element={<MoldlessRubber/>}></Route>
            <Route path={"/industries/railcar/heatShrink"} element={<HeatShrink/>}></Route>




        <Route path={"/industries/printer"} element={<IndustryPrinter/>}></Route>
           {/* PRINTER PRODUCTS PAGES */}
           <Route path={"/industries/printer/a-hose"} element={<AHosePage/>} ></Route>
           <Route path={"/industries/printer/b-hose"} element={<BHosePage/>} ></Route>
           <Route path={"/industries/printer/c-hose"} element ={<CHosePage/>}></Route>
           <Route path={"/industries/printer/d-hose"} element={<DHosePage/>}></Route>
           <Route path={"/industries/printer/e-hose"} element={<EHosePage/>}></Route>
           <Route path={"/industries/printer/f-hose"} element={<FHosePage/>}></Route>

        <Route path={"/industries/pipelineEnergy"} element={<IndustryPlant/>}></Route>
           {/* PLANT PRODUCTS PAGES */}
           <Route path={"/industries/pipelineEnergy/flangeRepairRing"} element={<FlangeRepairRing/>}></Route>
           <Route path={"/industries/pipelineEnergy/splitSleeve"} element={<SplitSleeve/>}></Route>
           <Route path={"/industries/pipelineEnergy/flangeRepairSplitSleeve"} element={<FlangeRepairSplitSleeve/>}></Route>
           <Route path={"/industries/pipelineEnergy/smithClamp"} element={<SmithClamp/>}></Route>

        <Route path={"/industries/construction"} element={<IndustryConstruction/>}></Route>
           {/* CONSTRUCTION PAGES */}
         <Route path={"/industries/informationTech"} element={<IndustryPlasticOpticalFiber/>}></Route>
           {/* POF ROUTES */}
           <Route path={"/industries/informationTech/pof"} element={<Pof/>}></Route>
      </Routes>






    {/* <HelloBox/> */}
{/* <Footer/> needed as WELL! */}
<Footer/>
    </div>
  );
}

export default App;
