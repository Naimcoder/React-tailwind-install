import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {

     const [phone, setPhone] = useState([])

     useEffect(() => {
          // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
          //      .then(res => res.json())
          //      .then(data => console.log(data))
          axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
               .then(data => {
                    const phoneloaded = data.data.data;
                    const phoneData = phoneloaded.map(phone => {
                         const parts = phone.slug.split('-');
                         const price = parseInt(parts[1]);
                         const singlePhone = {
                              name: phone.phone_name,
                              price: price
                         }
                         return singlePhone
                    })
                    console.log(phoneData)
                    setPhone(phoneData)
               });
          
     },[])
     return (
          <div>
            <BarChart width={500} height={400} data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                     <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
            </BarChart>
          </div>
     );
};

export default PhoneBar;