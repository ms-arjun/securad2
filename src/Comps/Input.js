import React, { useState, useEffect} from 'react'
import Mob from './Mob';
import CircleLoader from "react-spinners/CircleLoader";

const Input = () => {

    const [tvName, setTvName] = useState("")
    const [tvNameDis, setTvNameDis] = useState(false)
    const [isVisible, setIsVisible] = useState(false);



    const handleClick = ()=>{
        alert('make sure can we connect')
        setTvNameDis(`please wait, we are connecting your device ( ${tvName} )`)
        setIsVisible(!isVisible);
        
    }



   


  return (
    <>
        <div>
            <div className='w-[100%] h-[70vh] flex justify-evenly items-center flex-col'>
                <div>
                    <p className='sm:text-6xl text-3xl'>Enter Your Device Name</p>
                </div>
                <form action="">
                    <input type="text"  
                    className='border-2 border-cyan-600 sm:w-[400px] w-[250px] h-[50px] text-center'
                    value={tvName}
                    onChange={e=>setTvName(e.target.value)}
                    name='inputval'
                     />
                </form>
                <div>
                    
                    <button 
                         className='text-white w-[200px] rounded-2xl bg-blue-500 mt-[50px] h-[50px]'
                         onClick={handleClick}>Confirm</button>
                
                </div>
                <span className='sm:text-2xl text-[16px]'>{tvNameDis}</span>
        
            </div>

        <div>

        </div>
        {isVisible && <Mob />}
        </div>
       

     
  
        
    </>
  )
}

export default Input