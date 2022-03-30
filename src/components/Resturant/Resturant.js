import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Resturant = () => {
          const [searchText , SetSearcText] = useState('')
          const [meals , setMeals] =useState([])
          const searchedFood = e => {
                    SetSearcText(e.target.value);
          }
          useEffect(()=>{
                    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setMeals(data.meals))
          },[searchText])
          return (
                    <div >
                              <div>
                              <h1 className='text-3xl md:text-5xl  my-4 text-blue-600'>Fatobook Resturant</h1>
                              <p className='text-xl text-gray-500'>Make Your Day Awesome!</p>
                              <p>Search Result : {meals.length} </p>
                              </div>
                              <div>
                                        <input onChange={searchedFood} className='ring-2 md:w-1/4 rounded-full py-2 my-2 text-xl px-3' type="search"  placeholder='Search Your Fabourite'/>
                              </div>
                              <div className='grid  md:grid-cols-3 lg:grid-cols-4   gap-12 p-5 md:p-20'>
                                        {
                                          meals?.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals> )        
                                        }
                              </div>
                    </div>
          );
};

export default Resturant;