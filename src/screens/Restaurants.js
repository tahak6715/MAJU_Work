import { Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllResturantData } from "../config/FirebaseMethod";

export default function Restaurants(){


    const [value,CurrentValue] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    let navigation = useNavigate()
    const nodeName = "users"
    let GetDataOfInstitute = () => {
        GetAllResturantData(nodeName)
        .then((res) => {
          // console.log(res);
          CurrentValue([...res])
          setIsLoading(false)
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false)
          });
      };

    useEffect(() => {
        GetDataOfInstitute();
      }, []);
      console.log(value)
    
    return(

        <>
        <div className='flex bg-slate-400 py-6' >
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
        <h1>
        <div className="font-bold text-lg py-4 pl-8">
                    Trending Restaurants...
                </div>
            {value.map((item,index) => {
                return <>
                
                <div className="py-4 mx-3 flex shadow-2xl" style={{width: '70%', height: '200px'}}>
                    <div className=" w-[140px] pl-4">
                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/B0DqXHqXvGSRyetqoZ4VyQ/348s.jpg"/>

                    </div>
                    <div className="px-4 pt-4 font-bold">
                        {index}. {item.Name}
                        <div>
                            Closed Until {item.ClosingHours}:{item.ClosingMinute} {item.AMPMCLOSING}
                        </div>
                        <div className="py-1 !font-light">
                        {item.description}
                        </div>

                    </div>
                    
                </div>
                
                </>
            })}
        </h1>

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