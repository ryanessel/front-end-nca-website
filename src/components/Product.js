import React, { useState } from 'react';
import rightArrow from '../../src/images/arrow-imgs/right-arrow-svgrepo-com.svg'
import leftArrow from '../../src/images/arrow-imgs/left-arrow-svgrepo-com(2).svg'



export default function Product({ productTitle, productSlideImgs, productDescriptions, productDetails, productDetails2, productDetailsClasses, linkData, linksToDocuments, documentText, titleClass, customClass, whoToEmailMsg, rfqInstructions, embedRfqForm, children, }) {

  const [flag, setFlag] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const rightArrowClickHandler = () => {
    setFlag(flag === productSlideImgs.length - 1  ? 0 : flag + 1);
  }

  const leftArrowClickHandler = () => {
    setFlag(flag === 0 ? productSlideImgs.length - 1: flag - 1);
  }

  const toggleElemVsibility = () => {
console.log('isOpen?: ',isOpen)
    if (isOpen === true) {
        setIsOpen(!isOpen);
    }

}
  

  return (
    <div className='productComponentStyling'>
     {/* SLIDE SECTION START */}
     <div className='productTitleBox'>

   

     <h1 className={titleClass}>{productTitle}</h1>
     </div>
<div className='productBodySection'>

{/* TESTING */}
<div className='textButtonsTopBox'>
  {/* TESTING */}
    <div className='productImgViewerFlex productViewerBlockOverFlow '>
      
    {/* <button  className='imgViewerFwdBckBtn leftArrow'  onClick={leftArrowClickHandler}><img className="leftArrowImg" src={leftArrow}></img></button> */}
  
    <img className={`productImgsMainPhoto ${customClass}`} src={productSlideImgs[flag]}/>

     {/* <button  className='imgViewerFwdBckBtn rightArrow' onClick={rightArrowClickHandler}><img className='rightArrowImg' src ={rightArrow}></img></button> */}

     </div>

<div className='imgViewerTop'>
    <div className='imgViewerFlex'>
        {productSlideImgs.map((productImg, id) => {
          
            return (
                <img key={id} className={`imgViewerPreviewImgs ${id === flag ? 'selected' : null} `} onClick={()=> {setFlag(id); }} src={productImg}></img>   
              
            )
            
        })}
        
    </div>
    </div>
{/* -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
    <div className='testButtonBox'>

    <button  className='testBtnLeft'  onClick={leftArrowClickHandler}><img className="leftArrowImg" src={leftArrow}></img></button>
     <button  className='testBtnRight' onClick={rightArrowClickHandler}><img className='rightArrowImg' src ={rightArrow}></img></button>
     
     </div>
     {/* TESTING */}
     </div>
     {/* TESTING */}
     {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{console.log(flag)}

{/* SLIDE SECTION END */}


<h2>ABOUT THIS PRODUCT</h2>
 
<div className='productDesciptionSection'>
{productDescriptions.length > 0 && (productDescriptions.map((producDescrip, id) => {
return (
  <p key ={id} className='productDescriptions productDescripCentering'>
    {producDescrip}
  </p>
  )
}))}
</div>



   
        <ul className='productDescription1 productTextCentering'>
            { productDetails.length > 0 && (productDetails.map((productDetail, id) => {
                return (
                <li  className={`${productDetailsClasses && productDetailsClasses[0]}`} key={id}>{productDetail}</li>
                )
            }))}            
        </ul>
<br></br>
        <ul className='productDescription1 productTextCentering'>
            {(productDetails2 && productDetails2.length > 0 )&& (productDetails2.map((productDetail, id) => {
                return (
                <li className={''} key={id}>{productDetail}</li>
                )
            }))}            
        </ul>
        
       
    {linkData &&   
    <ul className='productDescription1 productTextCentering'>
            {(linkData)&& (linkData.map((linkObj, id) => {
                return (
                <li className={''} key={id}><a href={linkObj.link}>{linkObj.text}</a></li>
                )
            }))}            
        </ul>
      } 
        </div>
        
        {children}
        {/* don't need to map and if nothing exists it should show up if you set up the conditional for its existance! 
        If it doesn't exist it won't appear. This allows some customization
        */}
        {/* need nested flex box so you can make it a column */}
     
        <div className='documentBtnHolderTop' >
        <div className='dcoumentBtnHolder'>
          {/* might be better to {linksToDocuments && <content> }
              howver, it needs to wrap the div with the className "dcoumentBtnHolderTop"
          */}
      
    
        {linksToDocuments[0] && <a className={'documentBtn'} href={linksToDocuments[0]} target="_blank">{documentText && documentText[0]}</a>}
       {linksToDocuments[1] &&  <a className={'documentBtn'} href={linksToDocuments[1]} target="_blank">{documentText && documentText[1]}</a>}
        { linksToDocuments[2] && <a className={'documentBtn'} href={linksToDocuments[2]} target="_blank">{documentText && documentText[2]}</a>}

        { linksToDocuments[3] && <a className={'documentBtn'} href={linksToDocuments[3]} target="_blank">{documentText && documentText[3]}</a>}

        { linksToDocuments[4] && <a className={'documentBtn'} href={linksToDocuments[4]} target="_blank">{documentText && documentText[4]}</a>}

        { linksToDocuments[5] && <a className={'documentBtn'} href={linksToDocuments[5]} target="_blank">{documentText && documentText[5]}</a>}

        { linksToDocuments[6] && <a className={'documentBtn'} href={linksToDocuments[6]} target="_blank">{documentText && documentText[6]}</a>}

        { linksToDocuments[7] && <a className={'documentBtn'} href={linksToDocuments[7]} target="_blank">{documentText && documentText[7]}</a>}

        
        </div>
        </div>
 

        {rfqInstructions &&
        
        <div className='plidcoRfqInstructionsMainBox'>
        
       <div className='rfqInstrucitonsMiddleDivForColumnFlexBox'> 
       <h1 className='rfqTitleBox '>RFQ FORM REQUIRED INFO</h1>
        {rfqInstructions && 
        
          rfqInstructions.map((instruction) =>{
           return <div className='plidcoRfqInstructionsTable'>
              {instruction}
            </div>

          })
      
          }
          </div>
      </div>
        }
{/* TEST OBJ FOR EMBEDDING RFQ FORM */}
{/* this might need its own specific prop because each page may have the RFQ form at a different number.
    actually it should be the last item in the array always but so as not to get confused it might be better
    to just give it its own prop called rfqForm={rfqDataLink} or snth
    
    -Also, needs a class which will let it be hidden on the cellphone size or else its not viewable embeded anyway
*/}
{embedRfqForm && <div className='embedRfqFormMainDiv'>
  
<br/>

<button onClick={() => setIsOpen(!isOpen)} >Toggle RFQ FORM</button>
<br/>
{isOpen && (
<object className='embededPlidcoRfqForm' data={embedRfqForm} type="application/pdf" width="100%" height="100%">
      
  </object>)
  }
</div>}
  
{/* TEST OBJ FOR EMBEDDING RFQ FORM */}
{whoToEmailMsg &&
        <div className='whoToEmailBlurb'>    
        
          <span><strong>{whoToEmailMsg[0]}</strong></span> <a href={`mailto:${whoToEmailMsg[1]}`}>{whoToEmailMsg[1]}</a>

        </div> }

    </div>
  )
}
