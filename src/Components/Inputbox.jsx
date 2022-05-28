import React from 'react'

function Inputbox() {
  return (
    <div className='box'>
        <input type="number" placeholder="enter number"/>
        <br/>
        <button style={{width:"150px",fontWeight:"bolder"}}>shoot</button>
    </div>
  )
}

export default Inputbox