import CircleLoader from "react-spinners/CircleLoader";
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Mob = () => {

  const[loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     setTimeout(()=>{
        setLoading(false)
     },9000)
  },[])



  return (
    <>

{loading?
      <div className='flex justify-center items-center h-[100px] mt-10'>
      <CircleLoader
      color={'blue'}
      loading={loading}
      size={200}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> 

      </div>  :
    
    <div>
  
    <div className='flex justify-center items-center flex-row'>

      <div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.MIkmmF0Chl5-fb4oWHP8QwHaHa&pid=Api&P=0&h=180" alt="" />
      </div>

      <div>
        <ul>
            <li>Oppo A58 4G</li>
            <li>BODY	Dimensions	165.7 x 76 x 8 mm (6.52 x 2.99 x 0.31 in)
Weight	192 g (6.77 oz)
Build	Glass front, plastic frame, plastic back
SIM	Dual SIM (Nano-SIM, dual stand-by)</li>
            <li>DISPLAY	Type	IPS LCD, 550 nits (typ), 680 nits (HBM)
Size	6.72 inches, 109.0 cm2 (~86.6% screen-to-body ratio)
Resolution	1080 x 2400 pixels, 20:9 ratio (~392 ppi density)</li>
            <li>
            PLATFORM	OS	Android 13, upgradable to Android 14, ColorOS 14
Chipset	Mediatek MT6769 Helio G85 (12nm)
CPU	Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)
GPU	Mali-G52 MC2
            </li>
            <li>
            MAIN CAMERA	Dual	50 MP, f/1.8, (wide), AF
2 MP, f/2.4, (depth)
Features	LED flash, HDR, panorama
Video	1080p@30fps
            </li>
        </ul>
      </div>
    </div>

<div className='flex justify-center items-center'>
  <div className='px-6 py-4 rounded-xl mx-10 bg-blue-500 text-white'>
    <Link to='/vulnerblities'>
         <button onClick={()=>alert('approval alert')}>check vulnerabilities</button> 
     </Link> 
     </div> 
</div>
</div>
}
    </>
    
  )
}

export default Mob
