import React from 'react';
import { NavLink } from "react-router-dom";


const Card = ({items}) => {
  return (
    <>
      <div className='menu_items container-fluid mt-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='card_container row my-xl-5 d-flex justify-content-center align-items-center'>
              {
                items.map((elem) => {
                  const {id,name,image,price,description} = elem;
                  return (
                    <div className='item1 d-flex justify-content-center col-11 col-md-6 col-lg-6 col-xl-5 m-4' key={id}>
                      <div className='row Item_inside d-flex justify-content-center align-items-center' >
                        <div className='col-12 col-md-12 col-lg-4 img_div container-fluid'>
                          <img src={image} alt="menuPic" className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-12 col-xl-8'>
                          <div className='main_title pt-4 pb-3'>
                            <h3>{name}</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
                          </div>
                          <div className='menu_price'>
                            <div className='price_book_divide d-flex justify-content-between'>
                              <h4>{price}</h4>
                              <NavLink to="/">
                                <button className='btn btn-success'>Order Now</button>
                              </NavLink>
                            </div>
                            <p className='mt-2 warning'>{description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;