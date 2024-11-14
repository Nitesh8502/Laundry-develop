import React from 'react';
import Image from 'next/image';
import home from './images/home.webp';
import Carousel from './ui/components/carousel';
import InfoSection from './ui/components/infoSection';
import UserReviews from './ui/components/userReviews';
import OrderSection from './ui/components/orderSection';
import { CAROUSEL_DATA } from './utilities/staticData';
import Heading from './ui/components/heading';

export default function NavBarPages() {
    return <div>
        <Image className='w-full max-h-96'src={home} alt='Image' />
        <OrderSection />
        <Heading className='flex flex-col justify-center mt-20 text-center text-3xl font-bold'>OUR SERVICES</Heading>
        <Carousel data={CAROUSEL_DATA} />
        <InfoSection />
        <UserReviews />
    </div>
}