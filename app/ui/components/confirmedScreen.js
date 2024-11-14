import React  from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import success from '@/app/images/success.png';
export default function ConfirmedScreen() {
    const router = useRouter();
    return <div className='confirmedScreen mx-auto w-fit my-5 p-5'>
        <div className='header flex items-center gap-2 text-xl'>
            <div className='font-bold'>Order Confirmed</div>
            <div className='headerBorder flex-1'></div>
        </div>
        <Image src={success} alt={'succes img'} width={100} height={100} className='mx-auto block my-5'/>
        <div className='flex flex-col gap-5 text-lime-500 mt-5'>
            <h1 className='mx-auto w-fit text-lime-500'>YOUR ORDER IS PLACED!</h1>
            <p className='mx-auto w-fit'>The store team will contact you shortly!</p>
            <p className='mx-auto w-fit'>Thank You</p>
            <button onClick={() => router.push('/')} className='backHome button nextButton'>Back to Home</button>
        </div>
    </div>
};