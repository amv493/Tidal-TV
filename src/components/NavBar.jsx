import { react, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, navIcons } from '../data/navlinks';
// import Logo from '../assets/Photos/tidal-tv.png';

export const NavBar = () => {



  return (
    <nav className='flex items-center justify-between gap-2 h-15 m-0 p-4 top-0 z-[100] bg-blue-700 text-white sticky'>
        <div className='inline-flex'>
            <div>
                <Link to={'/'} className='text-3xl'>
                    <h1>TIDAL TV</h1>
                </Link>
            </div>
            <ul className='inline-flex gap-5 mx-10 my-2'>
                {
                    navLinks.map(({name, path}, index)=>{
                        return(
                            <li key={name}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='inline-flex gap-3 m-10'>
             {
              navIcons.managements.map((item, index)=>{
                return(
                  <Link key={index} 
                  // target='_blank'
                  className='text-2xl m-2' to={item.link}>
                      <item.icon />
                  </Link>
                )
              })
            }
        </div>
    </nav>
  )
}
