import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './adverStyle.css';
export const Advertisement = (props) => {
    return (
        <section id='adver'>
            <div className ='advertisement'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active imgOfslide">
                        <img className="d-block w-100" src="https://i1.fnp.ae/assets/images/custom/new-home-page-design/top-banners/top-big-banners/Womens-day-destop-banners02-28-feb-2020.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item imgOfslide">
                        <img className="d-block w-100" src="https://www.thespruce.com/thmb/Y8pEQ1V-qI2wTD3IdXA4kMAxlao=/2015x1488/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-907964814-5c7dbb3cc9e77c00011c8423.jpg" alt="Second slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='Cards'>
                <div className="card">
                    <img src="https://i1.fnp.ae/assets/images/custom/new-home-page-design/top-banners/top-right-banners/1-hour-gifts-delivery-17-feb-2020.jpg" alt="Card cap" />
                </div>
                <div className="card">
                    <img src="https://i1.fnp.ae/assets/images/custom/new-home-page-design/top-banners/top-right-banners/-28-feb-2020.jpg" alt="Card  cap" />
                </div>
            </div>
            </div>
            <div className='features'>
                <ul className='d-flex  justify-content-around'>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/same-day.png' alt=''/>
                        <p>Same Day</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Combos.png' alt=''/>
                        <p>Combos</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Flowers.png' alt=''/>
                        <p>Flowers</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Bdy.png' alt=''/>
                        <p>Birthday</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Chocolates.png' alt=''/>
                        <p>Chocolates</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Balloon.png' alt=''/>
                        <p>Balloons</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Mid-Night.png' alt=''/>
                        <p>Mid Night</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Sale.png' alt=''/>
                        <p>Deals</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Perfume.png' alt=''/>
                        <p>Perfume</p>
                    </li>
                    <li>
                        <img src='https://i1.fnp.ae/assets/images/custom/new-home-page-design/occassionList/Hamper-17-feb-2020.png' alt=''/>
                        <p>Gift Hampers</p>
                    </li>

                </ul>
            </div>
            <div className='featureList'>
                <ul className='d-flex  justify-content-around'>
                    <li><i className="far fa-check-circle"></i><span>Delivering Emotions Since 1994</span></li>
                    <li><i className="far fa-clock"></i><span>We Deliver, On Time - Every Time!</span></li>
                    <li><i className="fas fa-shield-alt"></i><span>100% Secure Payment</span></li>
                    <li><i className="far fa-smile"></i><span>100% Smile Guaranteed</span></li>
                </ul>
            </div>
        </section>
    )
}