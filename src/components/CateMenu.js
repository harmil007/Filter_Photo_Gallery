import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const CateMenu = ({filterItem,catItems}) => {
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])
  return (
    <>
      <div className="container menu-tabs">
        <div className='menu-tab d-flex justify-content-around'>
        {
          catItems.map((cerElem,index) =>{
            return <button className='btn btn-warning' data-aos={"zoom-out"} key={index} onClick={() => filterItem(cerElem)}>{cerElem}</button>

          })
        }
          {/* <button className='btn btn-warning' onClick={() => filterItem("Breakfast")}>Breakfast</button>
          <button className='btn btn-warning' onClick={() => filterItem("Lunch")}>Lunch</button>
          <button className='btn btn-warning' onClick={() => filterItem("Evening")}>Evening</button>
          <button className='btn btn-warning' onClick={() => filterItem("Dinner")}>Dinner</button> */}
          {/* <button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button> */}
        </div>
      </div>
    </>
  )
}

export default CateMenu