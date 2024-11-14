import React from "react";
import { BUILD_ORDER } from "@/app/utilities/staticData";

export default function OrderSteps({activeIndex}) {
    return <div className="orderSteps flex justify-evenly mt-10">{BUILD_ORDER.steps.map((step, index) => {
        return <div key={index} className={`flex flex-col justify-center items-center gap-2 ${activeIndex >= index ? '' : 'opacity-35'}`}>
            <span className="dot">⬤</span>
            <span>{step}</span>
        </div>
    })}
    </div>
};