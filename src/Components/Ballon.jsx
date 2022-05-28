import React,{useState} from 'react'

function Ballon({data}) {

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