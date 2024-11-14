'use client';
import React, { useState } from "react";
import Heading from "./heading";
import CustomerDetails from './customerDetails';
import { getDataFromCookie } from '@/app/serverActions/serverAction';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OrderSection() {
    const [showcustom, setShowCustomer] = useState(false);
    const router = useRouter();
    const notify = (text) => toast(text || "Verifying your Details!");
    const handleShowCustomerDetails = async () => {
        notify();
        const customerDetails = await getDataFromCookie();
        if(Object.values(customerDetails).length) {
            router.push('/order');
            return;
        }
        notify('take a moment to sign up!');
        setShowCustomer(true);
    }
    return <div className="absolute margin w-full flex flex-col justify-center items-center gap-5 top-32">
        <Heading className='flex flex-col justify-center mt-20 text-center text-3xl font-bold text-slate-100'>Find your nearest Laundromat!</Heading>
        <button className="orderButton" onClick={() => handleShowCustomerDetails(true)}>Order Now</button>
        {showcustom && <CustomerDetails/>}
        <ToastContainer  toastStyle={{ backgroundColor: "black", color: '#fff' }} />
    </div>;
}