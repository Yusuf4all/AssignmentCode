import React from 'react';
import './edibleGiftsStyle.css';
export const EdibleGifts = (props) => {
    return (
        <section id='edibleGifts'>
            <h1>Edible Gifts <button className='btn bg-success text-light'>VIEW ALL</button></h1>
            <ul className='d-flex'>
                <li> <div className='card'>
                    <div className='imgOfCard'><img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/edible-gift-row/fruit-basket-2-dec-2019.jpg' alt='' /></div>
                    <p>Fruit Basket</p>
                </div></li>
                <li>  <div className='card'>
                    <div className='imgOfCard'><img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/edible-gift-row/sweets-2-dec-2019.jpg' alt='' /></div>
                    <p>Sweets</p>
                </div></li>
                <li> <div className='card'>
                    <div className='imgOfCard'><img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/edible-gift-row/Chocolates-2-dec-2019.jpg' alt='' /></div>
                    <p>Chocolates</p>
                </div></li>
                <li><div className='card'>
                    <div className='imgOfCard'><img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/edible-gift-row/Edible-Arrangements-2-dec-2019.jpg' alt='' /></div>
                    <p>Edible Arrangements</p>
                </div></li>
                <li>  <div className='card'>
                    <div className='imgOfCard'><img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/edible-gift-row/jar-cakes-2-dec-2019.jpg' alt='' /></div>
                    <p>Jar Cakes</p>
                </div></li>
            </ul>
        </section>
    )
}