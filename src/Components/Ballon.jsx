import React,{useState} from 'react'

function Ballon({ 
  order,
  c1,
  c2,
  c3,
  c4,
  c5,
  setOrder,
  setC1,
  setC2,
  setC3,
  setC4,
  setC5,
}) {

  const [order,setOrder]=useState("")
  
//   if(data.num == "1"){
// document.getElementById("c1").color="red"
// document.getElementById("d1").display="block"
//   }
// const ids=()=>{
// document.getElementById("c1").color="red"
// console.log("clicked");
// }
  return (
    <>
    <div className='empty'>
    <div id='d1' className='ballon'></div>
        <div id='d2' className='ballon'></div>
        <div id='d3' className='ballon'></div>
        <div id='d4' className='ballon'></div>
        <div id='d5' className='ballon'></div>
    </div>
    <div>
        <div id='c1' className='ballon' onClick={ids}></div>
        <div id='c2' className='ballon'></div>
        <div id='c3' className='ballon'></div>
        <div id='c4' className='ballon'></div>
        <div id='c5' className='ballon'></div>
    </div>
    </>

  )
}

export default Ballon