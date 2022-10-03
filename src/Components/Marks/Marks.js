import React from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const Marks = () => {
const data = [
  {
    name: 'Page A',
    marks: 4000,
    Quiz: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    marks: 3000,
    Quiz: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    marks: 2000,
    Quiz: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    marks: 2780,
    Quiz: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    marks: 1890,
    Quiz: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    marks: 2390,
    Quiz: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    marks: 3490,
    Quiz: 4300,
    amt: 2100,
  },
];


     return (
          <div>
               <LineChart width={500}height={400}data={data}>
                    <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                     <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
               </LineChart>
          </div>
     );
};

export default Marks;