import './App.css'
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function App(){

  const location = useLocation();
  const navigate = useNavigate();
  const data=location.state;
      console.log(data)
  const Nevigate_slide=()=>{
    navigate("/slideNevigate");
  } 
  const Nevigate_slide1=()=>{
 
    console.log('click1')
  }
  const Nevigate_slide2=()=>{
    navigate('/slideNevigate/contacts/2')
    console.log('click2')
  }
  const Nevigate_slide3=()=>{
    navigate('/slideNevigate/contacts/3')
    console.log('click3')
  }
  return(
    <>
    <div style={{backgroundColor:"blue",width:"100%",height:"100vh"}}>
     <button className='Level_button' onClick={Nevigate_slide}>level1</button>
      <div>
      { data ==4  ?<button className='Level_button2' onClick={Nevigate_slide3}>level2</button>:null}
      {data ==3 ?<button className='Level_button2'onClick={Nevigate_slide3}>current slide3</button>:null}
      { data ==2 ?<button className='Level_button2'onClick={Nevigate_slide2}>current slide2</button>:null}
  { data ==1 ?<button className='Level_button2'onClick={Nevigate_slide1}>current slide1</button>:null}
      </div>
      </div>
    </>
  )
}
export default App;



