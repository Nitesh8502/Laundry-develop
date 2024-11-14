import React, { useState } from "react";
import { GetContext } from "@/app/context/orderContextManager";
import Heading from "./heading";
import { BUILD_ORDER } from "@/app/utilities/staticData";
export default function LaundryCart({handleButtonChange}) {
    const { orderData } = GetContext();
    const [selectedServices, setSelectedServcies] = useState(orderData.servicesIndex || []);
    const handleCheckboxClick = (index) => {
        if(!selectedServices.includes(index)) {
            setSelectedServcies(prev => ([...prev, index]));
        } else {
            setSelectedServcies(prev => prev.filter(service => !(service===index)));
        }
    }
    function LaundryElement({card, index}) {
        return <div className="laundryElement flex cursor-pointer" onClick={() => handleCheckboxClick(index)}>
            <div className={`imageContainer ${card.imageClass}`}>
            </div>
            <div className="description flex-1">
                <h2 className="font-bold">{card.heading}</h2>
                {card.description.map((des, index) => <p key={index} className="text-stone-400">● {des}</p>)}
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="priceAndDelivery flex">
                    <p className="price mr-4">{card.delivery}</p>
                    <p>{card.price} onwards</p>
                </div>
            </div>
            <input type="checkbox" className="checkbox" checked={selectedServices.includes(index)} ></input>
        </div>;
    }
    return <div className="orderDescription">
        <Heading className='mx-auto w-full flex flex-col justify-center mt-20 text-center text-2xl font-bold'>BUILD YOUR LAUNDRY CART</Heading>
        {BUILD_ORDER.laundryCart.map((card, index) => <LaundryElement card={card} index={index} key={index}/>)}
        <div className="navigateButtons">
            <button className="button nextButton" onClick={() => handleButtonChange(true, selectedServices, 'laundryCart')}>Next {'->'}</button>
        </div>
    </div>;
}