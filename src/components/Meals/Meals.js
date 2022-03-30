import React from 'react';
import { useNavigate } from 'react-router-dom';
const Meals = (props) => {
          const {strMeal, strMealThumb ,strCategory ,strInstructions ,strTags,idMeal}= props.meal
          let navigate = useNavigate()
          const  singleMeal =()=>{
                    navigate(`/details/${idMeal}`);
          }
          return (
                    <div className='ring-2 ring-indigo-50 shadow-sm rounded-xl p-2 pb-4 relative' >
                              <img className='w-full rounded-xl' src={strMealThumb} alt="" />
                             <h1 className='text-2xl my-2'> {strMeal} </h1> 
                             <p className='bg-indigo-100 rounded-xl font-thin'>{strCategory}</p>
                             <h4 className='font-sans text-sm text-gray-700 my-2 '>
                                       {strInstructions.slice(0,50)}
                             </h4>
                             <p className='text-xl font-bold'>
                                      Tags :  <small className='text-gray-600'>{strTags ? strTags : 'Not Tag Found'}</small>
                             </p><br />
                             <div className='mt-3'>
                                       <button onClick={singleMeal}  className=' absolute  bottom-0 left-0 w-full  py-2 bg-green-500 rounded-md  text-blue-800 font-mono font-bold '>View Details</button>
                             </div>
                    </div>
          );
};

export default Meals;