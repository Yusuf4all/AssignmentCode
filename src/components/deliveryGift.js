import React from 'react';
import './deliveryGiftStyle.css';
export const DeliveryGift = (props) => {
    return (
        <section id='deliveryGift'>
            <h1>Gift Delivery <button className='btn bg-success text-light'>VIEW ALL</button></h1>
        <div className='d-flex'>
         <div className='card bigItem'>
                <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/same-day-delivery1-10-dec-2019.jpg' alt='' />
            </div>
            <div className='smallItems'>
            <ul className="d-flex justify-content-end">
                <li>
                    <div className='card'>
                        <img src="https://i2.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/experiential-gifiting-2-dec-2019.jpg" alt='' />
                        <p>Experiential Gifiting</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/soft-toys-2-dec-2019.jpg' alt='' />
                        <p>Soft Toys</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/perfumes-2-dec-2019.jpg' alt='' />
                        <p>Perfumes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/plants-2-dec-2019.jpg' alt='' />
                        <p>Plants</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/hampers-2-dec-2019.jpg' alt='' />
                        <p>Gift Hampers</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/gift-delivery/Accessories-2-dec-2019.jpg' alt='' />
                        <p>Accessories</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
        </section>
    )
}