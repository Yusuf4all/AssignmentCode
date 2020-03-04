import React from 'react';
import './bestGiftsStyle.css';
export const Bestgifts = (props) => {
    return (
        <section id='bestGifts'>
            <div id='subHead'>
                <h1>Fresh Flowers & Perfect Gifts for all Occasions</h1>
                <p>1 Hour Delivery in Dubai, Abu Dhabi & 3 Hours Delivery across Emirates. 5000+ Gift Ideas for your Beloved</p>
            </div>
            <div className='bestGiftItems'>
                <h1>Best Selling Gifts <button className='btn bg-success text-light'>VIEW ALL</button></h1>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-3  '>
                        <div className='card'>
                            <div className='imgOfCard'><img src='https://i4.fnp.ae/images/pr/l/mixed-flowers-in-square-glass-vase_1.jpg' alt=''/></div>
                           <p>Mixed Flowers In Square Glass Vase</p>
                            <span>AED 169</span>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3  '>
                        <div className='card'>
                            <div className='imgOfCard'><img src='https://i1.fnp.ae/images/pr/l/four-portion-marble-cake_1.jpg' alt=''/></div>
                            <p>Four Portion Marble Cake</p>
                            <span>AED 99</span>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3  '>
                        <div className='card'>
                            <div className='imgOfCard'><img src='https://i2.fnp.ae/images/pr/l/passionate-8-red-roses-box_1.jpg' alt=''/></div>
                            <p>Passionate 8 Red Roses Box</p>
                            <span>AED 129</span>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3  '>
                        <div className='card'>
                            <div className='imgOfCard'><img src='https://i3.fnp.ae/images/pr/l/beautiful-roses-bouquet-with-chocolate-fudge-cake_1.jpg' alt=''/></div>
                            <p>Beautiful Roses Bouquet With Chocolate Fudge</p>
                            <span>AED 189</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}