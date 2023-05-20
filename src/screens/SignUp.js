import React, { useState } from 'react'
import { UserLogin } from '../config/FirebaseMethod'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    let navigation = useNavigate()

    const [model, setModel] = useState({
     
    })

    let SendFormData = () => {
    
        console.log(model)

        UserLogin( model)
            .then((res) => {
                console.log(res)
                navigation(`/main`,{
                    state:{obj:res},
                  });
            })
            .catch((err) => {
                console.log(err)
            })

    }

  return (
    <>
    <div className='flex bg-slate-400 py-5' >
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
    <button  className='text-white font-extrabold bg-opacity-0 mx-2 border-2 rounded-lg my-4 border-white px-3 h-[60%]'>
        Login
      </button>
      <button className='bg-red-600 font-extrabold rounded-lg text-white mx-2  px-2 my-4 h-[60%] '>
        Signup
      </button>
    </div>
        </div>
        
      </div>
    <div className='flex items-center justify-center py-10'>
    
                
                
                <div>
                <input className='shadow-lg m-2 border-2 border-black mr-8 rounded-lg py-1 px-20' type="email" placeholder='email.' onChange={(e)=>{setModel({ ...model,email : e.target.value })}}/>
                </div>
                <div>
                <input className='shadow-lg m-2 border-2 border-black rounded-lg py-1 px-2' type="password" placeholder='Password' onChange={(e)=>{setModel({ ...model,password : e.target.value })}}/>
                </div>
                <button className=' m-2  bg-red-600 py-2 rounded-lg px-8 my-1 text-black  font-bold' onClick={() => SendFormData()}>
                Login...
            </button>

            </div>
    </>
  )
}

export default SignUp