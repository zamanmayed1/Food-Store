import React from 'react';

const Contact = () => {
          return (
                    <div className='lg:w-2/4 bg-blue-200 mx-auto p-12 rounded-xl my-2 '>
                              <h2 className='text-2xl font-mono font-bold '> Cantact With Us</h2>
                              <input className='h-9 w-2/3 px-2 font-xl font-serif my-2' type="email" name="" id="" placeholder='Enter Your Email' />
                              <input className='h-9 w-2/3 px-2 font-xl font-serif my-2' type="tel" name="" id="" placeholder='Enter Your Phone Number' />
                              <input className='h-9 w-2/3 px-2 font-xl font-serif my-2' type="text" name="" id="" placeholder='Enter Your First Name' />
                              <input className='h-9 w-2/3 px-2 font-xl font-serif my-2' type="text" name="" id="" placeholder='Enter Your Last Name' /><br />
                              <textarea  className='p-2 text-xl my-2 font-mono w-2/3' name="" id="" placeholder='Enter Your Text'></textarea><br />
                              <button className='px-6 font-bold text-white py-2 bg-green-600'>Submit</button>
                    </div>
          );
};

export default Contact;