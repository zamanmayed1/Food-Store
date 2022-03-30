import React from 'react';

const Errorpage = () => {
          return (
                    <div className='grid md:grid-cols-2 mt-10 md:w-2/4 mx-auto '>
                              <div>
                                        <img src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="" />
                              </div>
                              <div className='flex items-center justify-center'>
                                        <h1 className='text-3xl text-red-600 font-bold'>Page Not Found</h1>
                              </div>
                              
                    </div>
          );
};

export default Errorpage;