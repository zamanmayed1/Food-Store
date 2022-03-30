import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
      const {mealId}= useParams()
      const [detail , setDetail] = useState({})
      useEffect(()=>{
            let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
            fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.meals[0]))
      },[mealId])
          return (
                    <div className='bg-blue-50 mt-6 p-2  md:w-3/4/4 lg:w-3/4 mx-auto rounded-xl grid md:grid-cols-2'>
                         <div className="img block ">
                               <img className='w-full border-2 border-black' src={detail.strMealThumb} alt="" />
                         </div>
                         <div className="info py-5 p-3">
                               <h1 className='text-3xl font-bold'>{detail.strMeal}</h1>
                               <p className='font-thin my-3 '>{detail.strCategory}</p>
                               <p>{detail.strInstructions}</p>
                        </div>   
                    </div>
          );
};

export default Details;