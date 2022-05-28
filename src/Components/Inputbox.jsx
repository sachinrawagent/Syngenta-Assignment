import React, { useState } from 'react'
import Ballon from './Ballon';

function Inputbox() {
    const [data,setData]=useState({
        num:''
    });
    const get=(e)=>{
        const {className,value}=e.target;
        setData({...data,[className]:value,})
    }
    const submit=(e)=>{
        e.preventDefault();
        // if(data ==="1"|| data ==="2"|| data==="3"|| data==="4"|| data==="5"){
        //     alert("wrong");
        // }
        // else{
        //     console.log(data);
        // }
        console.log(data);
    }
  return (
      <>
     
    <div className='box'>
        <input type="number" className='num' onChange={get} value={data.num} placeholder="enter number" required/>
        <br/>
        <button style={{width:"150px",fontWeight:"bolder"}} onClick={submit}>shoot</button>
    </div>
    <Ballon data={data}/>
    </>
  )
}

export default Inputbox