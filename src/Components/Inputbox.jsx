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
    const [order, setOrder] = useState([]);
    const [c1, setC1] = useState({});
    const [c2, setC2] = useState({});
    const [c3, setC3] = useState({});
    const [c4, setC4] = useState({});
    const [c5, setC5] = useState({});
    const submit=(e)=>{
        e.preventDefault();
        var prodItems;
        if (data.num === "1") {
          prodItems = {
            color: "c1",
          };
          setC1({
            color: "c1",
          });
        } else if (data.num === "2") {
          prodItems = {
            color: "c2",
          };
          setC2({
            color: "c2",
          });
        } else if (data.num === "3") {
          prodItems = {
            color: "c3",
          };
          setC3({
            color: "c3",
          });
        } else if (data.num === "4") {
          prodItems = {
            color: "c4",
          };
          setC4({
            color: "c4",
          });
        } else if (data.num === "5") {
          prodItems = {
            color: "c5",
          };
          setC5({
            color: "c5",
          });
        }
    
        setOrder([...order, prodItems]);
        
    }
  return (
      <>
      <Ballon
        order={order}
        setOrder={setOrder}
        setC1={setC1}
        setC2={setC2}
        setC3={setC3}
        setC4={setC4}
        setC5={setC5}
        c1={c1}
        c2={c2}
        c3={c3}
        c4={c4}
        c5={c5}
      />
    <div className='box'>
        <input type="number" className='num' onChange={get} value={data.num} placeholder="enter number" required/>
        <br/>
        <button style={{width:"150px",fontWeight:"bolder"}} onClick={submit}>shoot</button>
    </div>
    
    </>
  )
}

export default Inputbox