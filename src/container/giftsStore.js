import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Header} from '../components/header';
import {Advertisement} from '../components/adver';
import {Bestgifts} from '../components/bestGifts';
import {AllFlowers} from '../components/flowers';
import {Cakes} from '../components/cakes';
import {FlowerCombo} from '../components/flowerCombo';
import {DeliveryGift} from '../components/deliveryGift';
import {PersonalisedGifts} from '../components/personalisedGifts';
import {EdibleGifts} from '../components/edibleGifts';
import {About} from '../components/about';
import {Footer} from '../components/footer';
export class GiftsStore extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <>
            <Header/>
            <div className='container-fluid'>
            <Advertisement/>
            <Bestgifts/>
            <AllFlowers/>
            <Cakes/>
            <FlowerCombo/>
            <DeliveryGift/>
            <PersonalisedGifts/>
            <EdibleGifts/>
            <About/>
            </div>
            <Footer/>
            </>
        )
    }
}