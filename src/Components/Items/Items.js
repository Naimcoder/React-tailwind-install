import React from 'react';
import Option from '../Option/Option';

const Items = () => {
     const products = [
          {
               id: 1, name: 'free', price: 0, features: [
                    'Awesome Feature',
                    'Extra Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai Feature',
                    'Ajaira Feature'
          ]},
          {id:2,name:'medium',price: 9.99,features: [
                    'Everythink on Free',
                    'Extra Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai Feature',
                    'Ajaira Feature'
          ]},
          {id:3,name:'premium',price:19.99,features: [
                    'Everything on premium',
                    'Extra Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai Feature',
                    'Ajaira Feature'
          ]}
     ]
     return (
          <div>
               <h2 className='text-6xl font-bold bg-indigo-500 p-12'>Best deal of the town</h2>
               <div className=' grid md:grid-cols-3 gap-3'>
               {
               products.map(option=><Option key={option.id} option={option}></Option>)
               }
             </div>
          </div>
     );
};

export default Items;