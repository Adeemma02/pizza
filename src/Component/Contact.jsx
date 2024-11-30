import {React, useState} from 'react'
import { FaTwitter, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';


const Contact = () => {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      console.log('Form Data Submitted:', formData);
      setSubmitted(true);
  
      // Reset form fields after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      alert(`Thank you, ${formData.name}! Your message has been submitted successfully.`);
    }
  
  return (
    <div className='bg-gray-800 grid place-items-center  h-lvh pt-20 px-5 w-lvw'>
        <div className=''>
        <form onSubmit={handleSubmit} className='w-full  bg-slate-100 lap:w-[550px] rounded-lg py-10 flex flex-col gap-3 px-6' >
            <div className='flex gap-4 items-center outline-none '>
            <label htmlFor="name" >Name</label>
            <input type='text'
             required
              className='py-1 px-2 focus:outline-none w-full rounded-md'
               placeholder='Fill your name'
             id="name"
             name="name"
             value={formData.name}
             onChange={handleChange} />
            </div>
            <div className='flex gap-4 items-center outline-none '>
            <label htmlFor="email">Email</label>
            <input type='email'
             required 
             className='py-1 px-2 focus:outline-none w-full rounded-md'
              placeholder='Fill your email' 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}/>
            </div>
            <div className=''>
            <label htmlFor="message" className='mb-4'>Message</label>
            <textarea
             required 
             placeholder="What's your message"
             id="message"
             name="message"
             className='py-1 px-2 mt-2 focus:outline-none w-full rounded-md h-40'
             value={formData.message}
             onChange={handleChange}/>
            <div class="text-center mt-3">
  <button class="bg-red-800 text-white px-4 py-2 rounded-lg inline-block">
    Send Message
  </button>
</div>
            </div>
        </form>
        <div className='absolute bottom-12 tablet:bottom-4  w-400px  text-xl '>
        <div className='flex flex-wrap text-gray-300  w-400px justify-evenly'>
        <div className='w-[50px]'>
        <a
        href="https://x.com/Hade_emm?t=vt3jpUSmFXeELp9Zm3WhYw&s=09"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
<FaTwitter />
      </a> 
        </div>
        <div className='w-[50px]'>
        <a
        href="https://ng.linkedin.com/in/emmanuel-adesemowo-170ab1240"  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
   <FaLinkedinIn />
      </a> 
        </div>
        <div className='w-[50px]'>
          <a href="tel:+2348054988178">
          <FaPhone />
          </a>
        </div>
        <div className='w-[50px]'>
          <a href="mailto:emm.bolu@gmail.com">
          <FaMessage /> 
          </a>
        </div>
        </div>
        </div>
        
       
        </div>
    </div>
  )
}

export default Contact