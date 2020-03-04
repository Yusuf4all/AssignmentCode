import React from 'react';
import './personalisedGiftStyle.css';
export const PersonalisedGifts = (props) => {
    return (
        <section id='personalised'>
            <h1>Send Personalised Gifts <button className='btn bg-success text-light'>VIEW ALL</button></h1>
            <ul className='d-flex'>
                <li> <div className='card'>
                    <div className='imgOfCard'><img src='https://i4.fnp.ae/images/pr/l/mixed-flowers-in-square-glass-vase_1.jpg' alt='' /></div>
                    <p>Mugs</p>
                </div></li>
                <li>  <div className='card'>
                    <div className='imgOfCard'><img src='https://i1.fnp.ae/images/pr/l/four-portion-marble-cake_1.jpg' alt='' /></div>
                    <p>Cusion</p>
                </div></li>
                <li> <div className='card'>
                    <div className='imgOfCard'><img src='https://i2.fnp.ae/images/pr/l/passionate-8-red-roses-box_1.jpg' alt='' /></div>
                    <p>Photo Frame</p>
                </div></li>
                <li><div className='card'>
                    <div className='imgOfCard'><img src='https://i3.fnp.ae/images/pr/l/beautiful-roses-bouquet-with-chocolate-fudge-cake_1.jpg' alt='' /></div>
                    <p>Photo Cakes</p>
                </div></li>
                <li>  <div className='card'>
                    <div className='imgOfCard'><img src='https://i3.fnp.ae/images/pr/l/beautiful-roses-bouquet-with-chocolate-fudge-cake_1.jpg' alt='' /></div>
                    <p>Combos</p>
                </div></li>
            </ul>



        </section>
    )
}