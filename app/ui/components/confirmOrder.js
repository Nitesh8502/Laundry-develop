import React from 'react';
import Heading from './heading';
import { GetContext } from "@/app/context/orderContextManager";
import { getDate } from '@/app/utilities/helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConfirmOrder({handleButtonChange}) {
    const { orderData } = GetContext();
    const notify = () => toast("Order is Under Process!");
    const handleConfirmButtonChange = (e) => {
        const inputEleArray = Object.values(e?.currentTarget?.parentNode?.parentNode?.getElementsByTagName('input')).map(ele => ele.value.trim()) || [];
        if(inputEleArray.filter(ele => !!ele).length) {
            notify();
        }
        handleButtonChange('confirm', inputEleArray, 'confirmOrder');
    }
    function OrderDetails() {
        const selectedServices  = orderData.servicesNames;
        return <div className='p-5'>{selectedServices.map((service, index) => {
            return <div key={index} className='serviceContainer flex gap-5 m-5 items-center'>
                <label className='flex-1'>{service} :</label>
                <input type="number" className='serviceInput' defaultValue={orderData?.servicesData?.[index] || ''}/>
            </div>
        })}</div>
    }
    function CustomerDetailSection({placeHolder, value}) {
        return <div className='customDetailSection flex gap-5 mx-10 mb-5 font-bold'>
            <div className='key flex-1'>{placeHolder}</div>
            <div className='value flex-1 text-lime-400'>{value}</div>
        </div>;
    }
    return <div className='confirmOrder'>
        <Heading className="mx-auto w-full mt-10 text-center text-2xl font-bold">Confirm Order</Heading>
        <div className='orderSummery p-5'>
            <Heading className="mx-auto w-full py-5 text-center text-1xl font-bold">ORDER SUMMARY</Heading>
            <Heading className="mx-auto w-full text-center">Enter pieces for respective service!</Heading>
            <OrderDetails />
            <CustomerDetailSection placeHolder={'Pic up Date :'} value={getDate(orderData.dateData.date)}/>
            <CustomerDetailSection placeHolder={'Pic up Time :'} value={orderData.slotName}/>
            <CustomerDetailSection placeHolder={'Pic up Address :'} value={orderData.selectedAddressName}/>
        </div>
        <div className="navigateButtons">
            <button className="button backButton" onClick={() => handleButtonChange()}>{'<-'} Prev</button>
            <button className="button nextButton" onClick={(e) => handleConfirmButtonChange(e)}>Confirm</button>
        </div>
        <ToastContainer  toastStyle={{ backgroundColor: "black", color: '#fff' }} />
    </div>
};