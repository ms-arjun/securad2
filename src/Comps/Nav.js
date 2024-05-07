import React, { useState } from 'react'
import Input from './Input'



const Nav = () => {

  return (
    <>
        <div className='w-[full] h-[100px] grid grid-cols-[40%,60%] '>
            <div> 
             <div className='flex flex-row  justify-center items-center w-full'>
                      <div>
                        <img src='https://tse1.mm.bing.net/th?id=OIP.sgdkBE1tGgdWavXAGfgz9gHaIj&pid=Api&P=0&h=180' alt="" className='w-[80px]  h-[50px]' />
                      </div>
                      <div>
                        <span className='sm:text-4xl text-2xl ml-5'> SMART DEVICE SECURITY </span>  
                      </div>
             </div>
            </div>
        </div>
        <div>
              <Input />
        </div>
    </>
  )
}

export default Nav