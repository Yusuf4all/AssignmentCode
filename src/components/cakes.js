import React from 'react';
import './cakesStyle.css';
export const Cakes = (props) => {
    return (
        <section id='cakes'>
            <h1>Cakes Online <button className='btn bg-success text-light'>VIEW ALL</button></h1>
        <div className='d-flex'>
         <div className='card bigItem'>
                <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/Chocolate-cakes-2-dec-2019.jpg' alt='' />
            </div>
            <div className='smallItems'>
            <ul className="d-flex justify-content-end">
                <li>
                    <div className='card'>
                        <img src="https://i4.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/half-KG-cakes-2-dec-2019.jpg" alt='' />
                        <p>Half KG Cakes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/Eggless-cakes-2-dec-2019.jpg' alt='' />
                        <p>Eggless Cakes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i3.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/Mono-cakes-2-dec-2019.jpg' alt='' />
                        <p>Mono Cakes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i4.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/new-born-cakes-2-dec-2019.jpg' alt='' />
                        <p>New Born Cakes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/cartoon-cakes-2-dec-2019.jpg' alt='' />
                        <p>Cartoon Cakes</p>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <img src='https://i2.fnp.ae/assets/images/custom/new-home-page-design/all-cakes/Photocakes-2-dec-2019.jpg' alt='' />
                        <p>Photo Cakes</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
        </section>
    )
}