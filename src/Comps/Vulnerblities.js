// import React from 'react'
// import { CircleLoader } from 'react-spinners';

import React, { useEffect, useState } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import Vul1 from './Vul1';


const Vulnerblities = () => {

  const[loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     setTimeout(()=>{
        setLoading(false)
     },9000)
  },[])

  return (
    <div className='flex justify-center items-end h-[50vh] text-2xl'>
        {/* <div className="scanning-loader">
            <CircleLoader color="#007bff" size={300} />
        </div> */}

<>
    {loading?
      <div className='flex justify-center items-center h-[100px]'>
      <CircleLoader
      color={'blue'}
      loading={loading}
      size={400}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> 

      </div>  :
      <div>
        <Vul1 />
      </div>
  
  }
   </>
      
    </div>
  )
}

export default Vulnerblities
