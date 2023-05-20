import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GetAllUserData } from '../config/FirebaseMethod';

const Main = () => {

    const { state } = useLocation();
    const  Navigation = useNavigate()


 

    
let NodeName = "usersData"
let GetAllUserData=()=>{

    GetAllUserData(NodeName).then((res)=>{

        console.log(res)
    }).catch((err)=>{

        console.log(err)
    })
}


  return (
    <>
    <div className='a1' >
      <div className='flex' >
        <div className='mx-8  my-3'>
          <img src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/2d2a7a4342fc/assets/img/brand/logo_desktop_white.svg'/>
        </div>
        <div style={{height: '40px'}} className='flex mx-8 my-4'>
          
          
          <select className='py-2 text-gray-400 w-[100%] px-10 flex items-start justify-start outline-none rounded-lg '>
          <option className='text-black/5 pt-2' disabled selected value="">tacos, cheap dinner, Max's</option>
  <option value="option1">Restaurants</option>
  <option value="option2">Takeout</option>
  <option value="option3">Accountants</option>
  <option value="option3">food Options</option>
</select>
          <input className=' w-[100%] px-14 py-2 -mx-4  outline-none' placeholder='Sans Farisco CA' type='text'/>
          <button
      class="relative z-[2] flex items-center rounded-r bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
    </div>
    <div className='flex'>
    <div className='flex  pt-2'>
      <h1 className='text-white font-bold bg-opacity-0 px-2 my-4'>Yelp for Business</h1>
      <h1 className='text-white font-bold bg-opacity-0 px-2 my-4'>
        Write a review
      </h1>
      
    </div>
    <div className='flex ml-16'>
    <button onClick={() => Navigation('/login')}  className='text-white font-extrabold bg-opacity-0 mx-2 border-2 rounded-lg my-4 border-white px-3 h-[60%]'>
        Login
      </button>
      <button onClick={() => Navigation('/signup')}  className='bg-red-600 font-extrabold rounded-lg text-white mx-2  px-2 my-4 h-[60%] '>
        Signup
      </button>
    </div>
        </div>
        
      </div>
      <div className='font-extrabold text-white capitalize text-6xl absolute top-60 w-[40%] left-28 line-clamp-4'>
      Bringing class to cuisine.
      </div>
      <button onClick={() => Navigation('/restaurant')} className='bg-red-600 text-white py-3 px-6 rounded-xl font-extrabold absolute top-[60%] left-[10%]'>
        Explore
      </button>

    </div>
    <div>
      <h1 className='flex items-center justify-center py-8 text-4xl font-extrabold'>
        Recently Activity
      </h1>
      <div className='flex mx-20 pr-3 mr-2 '>
        <div className='shadow-lg bg-slate-400' style={{width: '360px', height:'326px'}}>
          <div className='flex px-4 py-4 '>
          <img className='rounded-full w-20 h-20' src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8'/>
          <div className='py-3 px-2'>
          <h1 className='font-bold'>
            321 pillay
          </h1>
          <h1>
            Added 1 photo
          </h1>
          </div>
          </div>
          <div>
            <h1 className='font-bold text-blue-600 px-5 -pt-2'>Hayes Valley Bakeworks</h1>
          </div>
          <div className=''>
            <img style={{height: '220px', width: '360px'}} className='pt-2' src='https://s3-media0.fl.yelpcdn.com/bphoto/tUE8XrnIXFKfEKg3qxyGZQ/300s.jpg'/>
          </div>
        </div>
        <div className='shadow-lg bg-slate-400' style={{width: '360px', height:'326px'}}>
          <div className='flex px-4 py-4 '>
          <img className='rounded-full w-20 h-20' src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8'/>
          <div className='py-3 px-2'>
          <h1 className='font-bold'>
            david ashhh 
          </h1>
          <h1>
            Added 1 photo
          </h1>
          </div>
          </div>
          <div>
            <h1 className='font-bold text-blue-600 px-5 -pt-2'>Hayes Valley Bakeworks</h1>
          </div>
          <div className=''>
            <img style={{height: '220px', width: '360px'}} className='pt-2' src='https://s3-media0.fl.yelpcdn.com/bphoto/tUE8XrnIXFKfEKg3qxyGZQ/300s.jpg'/>
          </div>
        </div>
        <div className='shadow-lg bg-slate-400' style={{width: '360px', height:'326px'}}>
          <div className='flex px-4 py-4 '>
          <img className='rounded-full w-20 h-20' src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8'/>
          <div className='py-3 px-2'>
          <h1 className='font-bold'>
            Ali khan
          </h1>
          <h1>
            Added 1 photo
          </h1>
          </div>
          </div>
          <div>
            <h1 className='font-bold text-blue-600 px-5 -pt-2'>Hayes Valley Bakeworks</h1>
          </div>
          <div className=''>
            <img style={{height: '220px', width: '360px'}} className='pt-2' src='https://s3-media0.fl.yelpcdn.com/bphoto/tUE8XrnIXFKfEKg3qxyGZQ/300s.jpg'/>
          </div>
        </div>
      </div>
    </div>
    <div className=' bg-slate-400 my-12 pb-10 !mb-0'>
    <div className='py-20 flex'>
      <div className='px-32'>
        <h1 className='font-bold text-black flex'>About</h1>
        <p className='py-1 text-sm'>About yelp</p>
        <p className='py-1 text-sm'>press</p>
        <p className='py-1 text-sm'>Investor Relations</p>
        <p className='py-1 text-sm'>Accessibility Statement</p>
        <p className='py-1 text-sm'>Terms of Service</p>
        <p className='py-1 text-sm'>Ad Choices</p>
        <p className='py-1 text-sm'>Your Privacy Choices</p>
      </div>
      <div className='px-10'>
        <h1 className='font-bold text-black flex py-3'>Career</h1>
        <p className='py-1 text-sm'>About yelp</p>
        <p className='py-1 text-sm'>press</p>
        <p className='py-1 text-sm'>Investor Relations</p>
        <p  className='py-1 text-sm'>Accessibility Statement</p>
        <p className='py-1 text-sm'>Terms of Service</p>
        <p className='py-1 text-sm'>Ad Choices</p>
        <p className='py-1 text-sm'>Your Privacy Choices</p>
      </div>
      <div className='px-10 text-sm'>
        <h1 className='font-bold text-sm text-black flex py-3'>Yelp for business</h1>
        <p className='py-1 text-sm'>About yelp</p>
        <p className='py-1 text-sm'>press</p>
        <p className='py-1 text-sm'>Investor Relations</p>
        <p  className='py-1 text-sm'>Accessibility Statement</p>
        <p className='py-1 text-sm'>Terms of Service</p>
        <p className='py-1 text-sm'>Ad Choices</p>
        <p className='py-1 text-sm'>Your Privacy Choices</p>
      </div>
      <div className='px-10'>
        <h1 className='font-bold text-black flex py-3'>Languages</h1>
        <p className='py-1 text-sm'>English</p>
       
      </div>

    </div>
    <div className='pl-20 text-sm'>Copyright © 2004–2023 Yelp Inc. Yelp, Yelp logo, Yelp burst and related marks are registered trademarks of Yelp.</div>
    </div>
    
    </>
  )
}

export default Main