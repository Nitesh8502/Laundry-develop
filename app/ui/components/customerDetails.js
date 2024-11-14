import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setUserDataInCookie } from "@/app/serverActions/serverAction";

export default function CustomerDetails() {
    const router = useRouter();
    const [formData, setFormData] = useState({name: '', mobileNumber: '', mail: ''})
    const [error, setError] = useState({name: false, mobileNumber: false, mail: false});
    const handleNameChange = (value, data, errorData) => {
        if(!value) {
            errorData.name = true;
        } else {
            errorData.name = false;
        }
        data.name = value;
    };
    const handleMobileNumberChange = (value, data, errorData)=> {
        let pattern = /^\d{10}$/;
        if(pattern.test(parseInt(value))) {
            errorData.mobileNumber = false;
        } else {
            errorData.mobileNumber = true;
        }
        data.mobileNumber = value;
    };
    const handleEmailChange = (value, data, errorData) => {
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(pattern.test(value)) {
            errorData.mail = false;
        } else {
            errorData.mail = true;
        }
        data.mail = value;
    }
    const handleSignUp = async (e) => {
        const inputEleArray = Object.values(e?.currentTarget?.parentNode?.getElementsByTagName('input')) || [];
        const data = {};
        const errorData = {};
        inputEleArray.forEach((input, index) => {
            switch(index) {
                case 0:
                    handleNameChange((input.value || '').trim(), data, errorData);
                    break;
                case 1:
                    handleMobileNumberChange((input.value || '').trim(), data, errorData);
                    break;
                case 2:
                    handleEmailChange((input.value || '').trim(), data, errorData);
                    break;
            }
            setError(prev => ({...prev, ...errorData}));
            setFormData(prev => ({...prev, ...data}));
        });
        if(!Object.values(errorData).find(ele => !!ele)) {
            // set data in cookie only and save operation in db will be done at order place only
            await setUserDataInCookie(data);
            router.push('/order');
        }
    };
    const Element = ({children, addClass, ...props}) => {
        return <div><p className="py-4 font-bold">{children}</p><input className={`w-full rounded p-2 outline:none focus:shadow-2xl focus:outline-none`}{...props}/></div>;
    }
    return <div className="flex flex-col gap-5 customerDetails">
        <p className="font-bold text-center border-b-2 border-stone-800	 py-2">Enter Details</p>
        <Element defaultValue={formData.name}>Name</Element>
        <p className="text-red-600">{error.name&&'*Please enter Name'}</p>
        <Element defaultValue={formData.mobileNumber}>Mobile No.</Element>
        <p className="text-red-600">{error.mobileNumber&&'*Please enter Mobile Number Correctly!'}</p>
        <Element defaultValue={formData.mail}>Email:</Element>
        <p className="text-red-600">{error.mail&&'*Please enter Email correctly!'}</p>
        <button className="orderButton mx-auto text-center" onClick={handleSignUp}>Sign Up</button>
    </div>
}