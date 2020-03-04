import React from 'react';
import './flowersStyle.css';
export const AllFlowers = (props) => {
    return (
        <section id='flowers'>
            <h1>All Flowers <button className='btn bg-success text-light'>VIEW ALL</button></h1>
        <div className='d-flex'>
         <div className='card bigItem'>
                <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/roses-2-dec-2019.jpg' alt='' />
            </div>
            <div className='smallItems'>
            <ul className="d-flex justify-content-end">
                <li>
                    <div className='card'>
                        <img src="https://i1.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/mixed-flowers-2-dec-2019.jpg" alt='' />
                        <p>Mixed Flowers</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/Tulips-2-dec-2019.jpg' alt='' />
                        <p>Tulips</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/lilies-2-dec-2019.jpg' alt='' />
                        <p>Lilies</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/hand-bouquet-2-dec-2019.jpg' alt='' />
                        <p>Hand Bouquet</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/FLowers-in-a-box-2-dec-2019.jpg' alt='' />
                        <p>Flowers in a Box</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/all-flowers/Premium-Flowers-2-dec-2019.jpg' alt='' />
                        <p>Premium Flowers</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
        </section>
    )
}