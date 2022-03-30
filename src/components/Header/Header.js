import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <div className='bg-indigo-50 p-8 sticky top-0 md:flex md:px-14 justify-between z-10'>
                             <div className="logo">
                                       <h2 className='text-blue-600 text-4xl  mb-4 font-bold'>Fato<span className='bg-blue-600 text-white'>B</span>ook</h2>
                              </div> 
                              <div className="nav flex  font-mono font-bold text-2xl ">
                                        <Link className='mx-8' to={'/'}>Home</Link>
                                        <Link className='mx-8' to={'/about'}>About</Link>
                                        <Link className='mx-8' to={'/contact'} >Contact</Link>
                              </div>
                    </div>
          );
};

export default Header;