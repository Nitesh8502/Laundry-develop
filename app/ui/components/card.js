'use client';
import React from "react";
import Image from "next/image";

export default function Card({card}) {
    return <div className="card rounded-lg">
        <Image className='cardImage rounded-t-lge' src={card.img} height={265} width={397} alt={'image'}/>
        <Image className="icon" src={card.icon} alt={'image'}/>
        <p className="text-center mb-2 font-bold">{card.name}</p>
        <p className="text-center">{card.description}</p>
        <p className="text-center text-blue-400 mt-3">Learn More</p>
    </div>
}