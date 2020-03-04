import React from 'react';
import './flowerComboStyle.css';
export const FlowerCombo = (props) => {
    return (
        <section id='flowerCombo'>
            <h1>Flower Combo <button className='btn bg-success text-light'>VIEW ALL</button></h1>
        <div className='d-flex'>
         <div className='card bigItem'>
                <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/flowers-n-cakes-2-dec-2019.jpg' alt='' />
            </div>
            <div className='smallItems'>
            <ul className="d-flex justify-content-end">
                <li>
                    <div className='card'>
                        <img src="https://i3.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/Flowers-n-chocolaates-2-dec-2019.jpg" alt='' />
                        <p>Flowers & Chocolaates</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/flower-n-Teddy-2-dec-2019.jpg' alt='' />
                        <p>Flowers & Soft Toys</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/flower-n-cards-2-dec-2019.jpg' alt='' />
                        <p>Flowers & Greeting Cards</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/flowers-n-dry-fruits-2-dec-2019.jpg' alt='' />
                        <p>Flowers & Dry Fruits</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/flowers-n-sweets-2-dec-2019.jpg' alt='' />
                        <p>Flowers & Sweets</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/flowers-n-cakes/Personalised-combos-2-dec-2019.jpg' alt='' />
                        <p>Flowers & Personalised </p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
        </section>
    )
}