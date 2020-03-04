import React from 'react';
import './headerStyle.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Header = (props) => {
    return (
        <header>
            <div id='contact' className="d-flex justify-content-end">
                <p>Call Us +918802130906 | AED <i className="fas fa-caret-down"></i></p>
            </div>
            <div className='mainHeader '>
                <ul >
                    <li className='logo'><button><img src='https://i4.fnp.ae/assets/images/logo-fnpae.png' alt='not found' /></button></li>
                    <li className='search'> <input type='text' placeholder='Search flowers,cakes,gifts etc.' /><button ><i className="fas fa-search"></i></button></li>
                    <li className='clock'><img src='https://image.useinsider.com/fnp/defaultImageLibrary/Clock-eyfxGQCCW7u9VbHIaOYM1569422185.gif' alt='not found' />
                        <p>Need Today?</p></li>
                    <li className='help right'><button><i className="far fa-question-circle"></i><span>Help</span></button></li>
                    <li className='corporate right'><button><i className="far fa-building"></i><span>Corporate</span></button></li>
                    <li className='cart right'><button><i className="fas fa-shopping-cart"></i><span>Cart</span></button></li>
                    <li className='account right'><button><i className="fas fa-user-circle"></i><span>Account</span></button></li>
                </ul>
            </div>
            <div className='navigation'>
                <ul className='d-flex'>
                    <li className='active women'>WOMEN'S DAY
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>

                    <li className='birthday'>BIRTHDAY
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                 <li className='anniversary'>ANNIVERSARY
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='flowers'>FLOWERS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='cakes'>CAKES
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='personalised'>PERSONALISED
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section>
                    </li>
                    <li className='plants'>PLANTS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='other'>OTHER GIFTS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='occations'>OCCATIONS
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='cities'>BY CITIES
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='outside'>OUTSIDE UAE
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li>
                    <li className='stength'>OUT STRENGTH
                    <section className='dropDown'>
                            <a href='#'> All gifs </a>
                            <a href='#'> All flowers </a>
                            <a href='#'> Shop by emirate </a>
                            <a href='#'> Dubai </a>
                            <a href='#'> Abu dhabi </a>
                        </section></li> 
                </ul>
            </div>
        </header>
    )
}