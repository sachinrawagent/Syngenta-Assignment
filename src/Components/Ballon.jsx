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
  const handleColor = (color) => {
    setOrder((order) => {
      return order.filter((elem, index) => {
        return elem.color !== color;
      });
    });
  };

  const handleFilter = (color) => {
    if (color === "c1") {
      setC1({
        color: "d1",
      });
    } else if (color === "c2") {
      setC2({
        color: "d2",
      });
    } else if (color === "c3") {
      setC3({
        color: "d3",
      });
    } else if (color === "c4") {
      setC4({
        color: "d4",
      });
    } else if (color === "c5") {
      setC5({
        color: "d5",
      });
    }
  };
  return (
    <>
    <div className='empty'>
    {order.map((e, index) => (
          <>
            <div
              id={e.color}
              onClick={() => handleColor(e.color) || handleFilter(e.color)}
              className="ballons"
            >
              a
            </div>
          </>
        ))}
    </div>
      <div>
        <div id={c1.color === "c1" ? "d1" : "c1"} className="ballon"></div>
        <div id={c2.color === "c2" ? "d2" : "c2"} className="ballon"></div>
        <div id={c3.color === "c3" ? "d3" : "c3"} className="ballon"></div>
        <div id={c4.color === "c4" ? "d4" : "c4"} className="ballon"></div>
        <div id={c5.color === "c5" ? "d5" : "c5"} className="ballon"></div>
      </div>
    </>

  )
}

export default Ballon