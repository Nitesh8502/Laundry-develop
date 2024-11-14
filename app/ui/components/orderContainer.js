import React, { useEffect, useState } from "react";
import { GetContext } from "@/app/context/orderContextManager";
import OrderSteps from "./orderSteps";
import LaundryCart from "./laundryCart";
import SchedulePic from "./schedulePic";
import ChooseAddress from "./chooseAddress";
import ConfirmOrder from "./confirmOrder";
import ConfirmedScreen from "./confirmedScreen";
import FailedScreen from './failedScreen';
import { BUILD_ORDER, SCHEDULE_PIC } from "@/app/utilities/staticData";
import { getPicUpDate } from '@/app/utilities/helpers';
import { getDataFromCookie, sendConfirmationEmail } from '@/app/serverActions/serverAction';

export default function OrderContainer({activeIndex, setActiveIndex}) {
    const { orderData, setOrderData } = GetContext();
    const [errorData, setErrorData] = useState('');
    useEffect(() => {
        setErrorData('');
    },[activeIndex]);

    function handleLaundryChange(data) {
        if(!data?.length) {
            setErrorData('Please Select any one Service !');
            throw new Error('no Service Selected!');
        }
        const servicesNames = BUILD_ORDER.laundryCart.map(service => service.heading).filter((serviceName, index) => data.includes(index));
        setOrderData(prev => {
            return {...prev, servicesIndex: data, servicesNames: servicesNames};
        })
    };

    function handleSchedulePic(data) {
        if(Object.values(data).length!==2) {
            setErrorData('Please Pic any one Slot !');
            throw new Error('no SchedulePic is Done!');
        }
        const slot = SCHEDULE_PIC.slots[data.date][data.slot];
        setOrderData(prev => {
            return {...prev, dateData: data, slotName: slot };
        })
    }

    function handleChooseAddress({addedAddress, selectedAddress}) {
        if(!addedAddress?.[selectedAddress]) {
            setErrorData('Please Pic any one address !');
            throw new Error('no address was choosen!');  
        }
        setOrderData(prev => {
            return {...prev, addedAddress: addedAddress, selectedAddress: selectedAddress,
                 selectedAddressName: addedAddress[selectedAddress] };
        });
    }
    async function getDataForOrder(data) {
        const orderDetails = await getDataFromCookie();
        orderDetails.selectedAddress = orderData.selectedAddressName;
        orderDetails.date = getPicUpDate();
        orderDetails.picUpTime = orderData.slotName;
        const services = {};
        orderData.servicesNames.map((service, index) => {
            services[service] = data[index];
        });
        orderDetails.services = services;
        return orderDetails;
    };

    async function handleConfirmOrder(data) {
        await setOrderData(prev => {
            return {...prev, servicesData: data || []};
        })
        if(Object.values(data || {}).filter(ele => !!ele).length!==(orderData?.servicesNames || []).length){
            setErrorData('Please enter Pieces for respective Services !');
            return;
        }
        try {
            let resultFromApi = await fetch('/api/placeOrder', {
                method:'POST',
                cache: 'no-cache',
                body: JSON.stringify(await getDataForOrder(data))
            });
            resultFromApi = await resultFromApi.json();
            if(resultFromApi?.result) {
                setActiveIndex(prev => prev+1);
                await sendConfirmationEmail();
            } else {
                setActiveIndex(prev => prev+2);
            }
        } catch(e) {
            console.log(e);
        }
    }

    function handleButtonChange(isNext, data, type) {
        if(type) {
            try {
                switch(type) {
                    case 'laundryCart':
                        handleLaundryChange(data);
                        break;
                    case "schedulePic":
                        handleSchedulePic(data);
                        break;
                    case "chooseAddress":
                        handleChooseAddress(data);
                        break;
                    case "confirmOrder":
                        handleConfirmOrder(data);
                        break;
                }
            } catch(e) {
                return;
            }
        }
        if(isNext===true) {
            setActiveIndex(prev => prev + 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else if(isNext==='confirm') {
            // do something for confirm Button
        } else {
            setActiveIndex(prev => prev - 1);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };
    return <div className="orderContainer">
        <OrderSteps activeIndex={activeIndex} />
        {activeIndex===0 && <LaundryCart handleButtonChange={handleButtonChange} />}
        {activeIndex===1 && <SchedulePic handleButtonChange={handleButtonChange} />}
        {activeIndex===2 && <ChooseAddress handleButtonChange={handleButtonChange} />}
        {activeIndex===3 && <ConfirmOrder handleButtonChange={handleButtonChange} />}
        {activeIndex===4 && <ConfirmedScreen />}
        {activeIndex===5 && <FailedScreen />}
        {errorData && <p className="errorData">{errorData}</p>}
    </div>
}