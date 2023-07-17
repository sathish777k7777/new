import React, { useRef, useState } from 'react';
import './SliderDashboard.css'
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { ImMenu } from 'react-icons/im';
import { ImCancelCircle } from 'react-icons/im';
import { MdTransitEnterexit } from 'react-icons/md';

function SliderDashboadr(){
  const ref =useRef(0)
  const ref1 =useRef(0)
    const[count,setcount]=useState(1)
    const[show,setshow]=useState(false)
    const[level2,setlevel2]=useState('')
    const navigate = useNavigate();
    const Nevigate_Next=()=>{
        setcount(count+1)  
    }
    const Nevigate_Back=()=>{
        setcount(count-1)
    }
    useEffect(() => {
        
        navigate(`/slideNevigate/contacts/${count}`)

      }, [count]);
      const data='data';
      if(count==4){
        navigate('./',{state:count})
      }
    const Iconshow=()=>{
      console.log('clicked')
      ref.current.style.display='block';
    }
    const Iconhide=()=>{
      console.log('clicked')
      ref.current.style.display='none';
    }
    const Exit_Function=()=>{
      navigate('/',{state:count})
    }
    return(
    <>
    <div style={{ position: 'relative'}} className='slide_parent'>
        
        <div className='menu_button' onClick={Iconshow}><ImMenu size={50}/></div>
        <div className='Menu_icon' ref={ref} >
            <span className='icon_parent'>
             <div  ref={ref1} ><ImCancelCircle size={50}  onClick={Iconhide}/></div>
            </span>
            <span>
            <div onClick={Exit_Function} ><MdTransitEnterexit size={50}/></div>
            </span>

        </div>
        <div className='outlet'>
        <Outlet/>
     </div>
     <div className='level_button' style={{marginLeft:"35%"}}>
        <div className='back_button'>
         {count==1? <button style={{marginTop:"10px",color:"white",borderRadius:"5px",fontSize:"30px"}}
          disabled  onClick={Nevigate_Back} >Back</button>:<button style={{marginTop:"10px",backgroundColor:"red",color:"white",borderRadius:"5px",fontSize:"30px"}} onClick={Nevigate_Back}>Back</button>}
        </div>
        <div style={{textAlign:"right",marginLeft:"43%"}} className='next_button'>
          {count==3?  <button style={{marginTop:"10px",backgroundColor:"red",color:"white",borderRadius:"5px",fontSize:"30px"}}  onClick={Nevigate_Next}>finsh</button>: <button  style={{marginTop:"10px",backgroundColor:"red",color:"white",borderRadius:"5px",fontSize:"30px"}}   onClick={Nevigate_Next}>next</button>}
        </div>
     </div>
    
     </div>
    </>
    )
}
export default SliderDashboadr;