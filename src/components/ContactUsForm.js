import {useState, useRef} from 'react'
import axios from 'axios';


const API_URI = 'http://localhost:5005'

/*
firstName: '',
lastName: '',
email: '',
company: '',
phone: '',
city: '',
stateProvince: '',
country: '',
message: '',

*/

const defaultFormFields = {

      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      city: '',
      stateProvince: '',
      country: '',
      message: '',

}



export default function ContactUsForm() {

    const emailForm = useRef(null);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {

        firstName,
        lastName,
        email,
        company,
        phone,
        city,
        stateProvince,
        country,
        message

    } = formFields;
    const [successMessage, setSuccessMessage] = useState(undefined);
    const [errMsg, setErrMsg] = useState(undefined);
// "name" below refers to the <input> tag's key called name 
// forexample <input name="xyz"/> 
    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("INPUT CHANGE HANLDER: ", value)
        setFormFields({...formFields, [name]: value});
    }

    const restFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        const reqBody ={
            firstName,
            lastName,
            email,
            company,
            phone,
            city,
            stateProvince,
            country,
            message
        }
        
        console.log("CONTACT FORM REQ BODY: ", reqBody);

        axios.post(`${API_URI}/contact`, reqBody)
        .then((response) => {
            console.log("EMAIL RESPONSE: ", response);
            setSuccessMessage(<div className='bg-green-400 text-center'>Message Sent!</div>);
            restFormFields();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleTouchSubmit = (e) => {
        e.preventDefault();
        emailForm.current.submit();
    }




  return (

    <div className='contactUsBox flex items-center justify-center'>


    <div className="card w-11/12 md:w-2/3  bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
      
      
    <figure className="px-10 pt-10 text-4xl underline">
    {/* title goes here */}
    
    </figure>
    
      
      <div className="card-body items-right text-center">
    
    
     {/* put stuff here */}
     <div className='flex justify-center'>

    
     
     <div className='sign-up-container text-left'>
            

            <form ref={emailForm} onSubmit={handleContactFormSubmit}>
                <h2>Contact Us</h2>

        
                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='firstName' 
                placeholder='First Name'
                value={firstName} 
                onChange={handleChange}
                />

                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='lastName' 
                placeholder='Last Name'
                value={lastName} 
                onChange={handleChange}
                />
          
                <br/>

                <input
                type="text"
                className='input-form  border-2 border-indigo-600 rounded-md'
                name='email'
                placeholder='Email'
                value={email}
                onChange={handleChange}
                />

                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='company' 
                placeholder='Company'
                value={company} 
                onChange={handleChange}
                />
                <br/>


                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='phone' 
                placeholder='Phone #'
                value={phone} 
                onChange={handleChange}
                />

                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='city' 
                placeholder='City'
                value={city} 
                onChange={handleChange}
                />
                <br/>


                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='stateProvince' 
                placeholder='State/Province'
                value={stateProvince} 
                onChange={handleChange}
                />

                <input 
                type='text' 
                className='input-form border-2 border-indigo-600 rounded-md' 
                name='country' 
                placeholder='Country'
                value={country} 
                onChange={handleChange}
                />


                <br/>
                
                <textarea 
                type="text" 
                className="contactUsMsgBox input-form-message w-60 xl:w-96  border-2 border-indigo-600 rounded-md" 
                name="message" 
                placeholder='Message'
                value={message} 
                onChange={handleChange}
                />
                <br/>
                   

                <button className='btn btn-blue' > Submit </button>

                { successMessage && <h3 className="success-message rounded">{successMessage}</h3> }
            </form>


        </div>
        </div>
        <div className="card-actions">
        
        </div>
      </div>
    </div>
    
    
            
            
            
        </div>
  )
}
