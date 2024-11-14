import React, {useState} from "react";
import Heading from "./heading";
import { GetContext } from "@/app/context/orderContextManager";
import homeIcon from '../../images/homeIcon.png';
import Image from 'next/image';
export default function ChooseAddress({handleButtonChange}) {
    const { orderData } = GetContext();
    const [addedAddress, setAddedAdress] = useState(orderData?.addedAddress || []);
    const [selectedAddress, setSelectedAddress] = useState(orderData?.selectedAddress || 0);
    const handleButtonClick = () => {
        const value = document.getElementsByClassName('addAdress')[0].value;
        if(value) {
            document.getElementsByClassName('addAdress')[0].value = '';
            setAddedAdress(prev => ([...prev, value]));
        }
    }
    const handleKeyDown = (e) => {
        if(e.key==='Enter'){
            handleButtonClick();
        }
    }
    return <div className="chooseAddress">
        <Heading className="mx-auto w-full flex flex-col justify-center mt-20 text-center text-2xl font-bold">CHOOSE ADDRESS</Heading>
        {(addedAddress || []).map((address, index) => {
            return <div className="address addressContainer flex justify-between items-center gap-5" key={index} onClick={() => setSelectedAddress(index)}>
                <Image src={homeIcon} width={50} height={50} alt="home Icon"/>
                <div className="name flex-1">{address}</div>
                <input type="radio" className="checkAddress" checked={index===selectedAddress} />
            </div>
        })}
        <div className="flex w-full justify-between gap-10 addressContainer">
            <input type="text" className="addAdress" onKeyDown={handleKeyDown}/>
            <button className="addAddress nextButton button" onClick={handleButtonClick}>Add Address</button>
        </div>
        <div className="navigateButtons">
            <button className="button backButton" onClick={() => handleButtonChange()}>{'<-'} Prev</button>
            <button className="button nextButton" onClick={() => handleButtonChange(true, {addedAddress: addedAddress, selectedAddress : selectedAddress}, "chooseAddress")}>Next {'->'}</button>
        </div>
    </div>;
};