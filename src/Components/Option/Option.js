import React from 'react';
import Feature from '../Feature/Feature';


const Option = ({ option }) => {
     const {features}=option
     return (
          <div className='bg-red-500 m-14 p-6 rounded-md '>
               <div>
                    <h2> <span className='text-6xl font-bold text-white'>{option.price}</span>
                         <span className='text-2xl text-gray-300'>/mon</span>
                    </h2>
                  <p className='text-3xl my-3 uppercase font-medium'>{option.name}</p>
               </div>
               {
                    features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
               }
               <button className='bg-green-500 w-full mt-4 py-2 text-white font-medium px-6'>Buy Now</button>
          </div>
     );
};

export default Option;