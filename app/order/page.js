'use client';
import React , {useState} from "react";
import Image from "next/image";
import order from '../images/buildorder.webp';
import schedulepic from '../images/schedulepic.jpg';
import chooseAdress from '../images/chooseAdress.jpg';
import orderSummery from '../images/orderSummery.jpg';
import Heading from "../ui/components/heading";
import OrderContainer from "../ui/components/orderContainer";
export default function OrderNow() {
    const images = [order, schedulepic, chooseAdress, orderSummery, orderSummery, orderSummery];
    const [activeIndex, setActiveIndex] = useState(0);
    return <div>
        <Image className='w-full max-h-96'src={images[activeIndex]} alt='Image' />
        {activeIndex===0 && <Heading className='absolute top-32 mx-auto w-full flex flex-col justify-center mt-20 text-center text-3xl font-bold text-slate-100'>Build Order</Heading>}
        <OrderContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>;
}