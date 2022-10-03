import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
     const [open, setOpen] = useState(false);

     const routes = [
          {id:1,name:'Home',path:'./home'},
          {id:2,name:'About',path:'./about'},
          {id:3,name:'Shop',path:'./shop'},
          {id:4,name:'Contact',path:'./contact'},
     ]
     return (
          <div>
               <nav className=' bg-slate-400 text-lime-900	 w-full'>
                    <div onClick={() => setOpen(!open)} className="h-6 w-6  md:hidden text-black">

                      {
                         open ?
                               <XMarkIcon />
                              : <Bars3Icon />
                    }
                    </div>
                  
                  
                    
                    <ul className={`md:flex justify-center bg-slate-400   absolute  md:static duration-500  w-full ${open ? 'top-6':'top-[-170px]'}`}>
                        
                      {
                        routes.map( route=><Link key={route.id} route={route}></Link>)      
                      }
                    </ul>
               </nav>
          </div>
     );
};

export default NavBar;