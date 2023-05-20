import React, { useState } from 'react'
import BAInput from '../components/BAInput'
import { UserSignup } from '../config/FirebaseMethod';

const Login = () => {

    const [model,setModel] = useState({});

        let createUser = () => {
            console.log(model);
            UserSignup(model)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            
        }




  return (
    <>
    <div className='py-6 shadow-lg'>
        <img className='pl-8' src='https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop.yji-7ef71bf77a3395dd1b44f31e354a2dbd.svg'/>

    </div>
    <div>
        <div className='w-[50%] flex items-center justify-center flex-col absolute top-[25%] pl-32 '>
            <h1 className='text-red-600 text-lg font-bold'>SignUp for Yelp</h1>
            <h1 className='text-black text-base font-semibold'>
                Connect with great local business
            </h1>
            <h1 className='text-xs py-3 w-[50%] pl-6 flex items-center justify-center'>
            By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.
            </h1>
            <div className='flex justify-center items-center flex-col'>
            
            <div>
                <input type="text" className='shadow-lg m-2 border-2 border-black rounded-lg py-1 px-2' placeholder='First name'/>
                <input className='shadow-lg m-2 border-2 border-black rounded-lg py-1 px-2' type="text" placeholder='Last name'/>
                </div>
                <div>
                <input className='shadow-lg m-2 border-2 border-black mr-8 rounded-lg py-1 px-20' type="email" placeholder='email'/>
                </div>
                <div>
                <input className='shadow-lg m-2 border-2 border-black rounded-lg py-1 px-2' type="text" placeholder='Zip code'/>
                </div>
                <button className=' m-2  bg-red-600 py-2 rounded-lg px-8 my-1 text-black  font-bold'>
                Sign Up
            </button>

            </div>

        </div>
        <div className='w-[50%] absolute left-[50%] top-[40%]'>
            <img src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png'/>

        </div>
        
    </div>

    <div className=' bg-slate-400 my-12 pb-10 !mb-0 absolute top-[100%] w-full'>
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

export default Login