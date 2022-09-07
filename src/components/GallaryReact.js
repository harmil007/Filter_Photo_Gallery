import React, { useEffect, useState } from 'react';
import "./styles/GallaryReact.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./menu"
import CateMenu from "./CateMenu"
import Card from "./card.js"
import AOS from 'aos';
import "aos/dist/aos.css";



const allCateValues = [...new Set(Menu.map((curElm) => curElm.category)),"all"];
console.log(allCateValues);

const GallaryReact = () => {
  const [items,setItems] = useState(Menu);
  const [catItems,setCatItems] = useState(allCateValues);
  
  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])

  const filterItem = (catItem) =>{
  if(catItem === "all"){
    setItems(Menu);
    return;
  }

    const updatedItems = Menu.filter((elem) => {
      return elem.category === catItem;
    });
    setItems(updatedItems);
  }

  return (

    <div className='mainpage'>
      <h1 className="pt-5 main-heading text-center" data-aos={"zoom-out"}>Order Your Favourite Dish</h1>
      <hr />
      <CateMenu filterItem={filterItem} catItems={catItems} />
      <Card items={items} />
    </div>

  )
}

export default GallaryReact;