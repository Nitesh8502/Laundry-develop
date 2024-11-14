'use client';
import React from 'react';
import Card from './card';

export default function Carousel({data}) {
    function CarouselButton({children, ...props}) {
        return <button {...props}>{children}</button>;
    }
    const handleScroll = (direction) => {
        const element = document.getElementsByClassName('listing')[0];
        const scrollLeft  = element.clientWidth - element.scrollLeft;
        if(direction) {
            if(scrollLeft) {
                element.scrollLeft += Math.min(scrollLeft, 200);
            }
        } else if(element.scrollLeft) {
            element.scrollLeft -= Math.min(scrollLeft, 200);
        }
    }
    return <div className='carouselParent flex mx-auto'>
        {/* <CarouselButton className='leftArrow my-auto mx-2.5 text-green-400' */}
        {/* onClick={e => handleScroll(false)}>{'<'}</CarouselButton> */}
        <div className='carousel overflow-y-hidden pb-40 pt-20' onCl>
        <div className='listing flex'>
        {data.map((card, index) => <Card key={index} card={card}/>)}
        </div>
        </div>
        {/* // <CarouselButton className='rightArrow my-auto mx-2.5 text-green-400' */}
        {/* // onClick={e => handleScroll(true)}>{'>'}</CarouselButton> */}
    </div>;
}