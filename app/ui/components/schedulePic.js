import React, { useState } from "react";
import Heading from "./heading";
import { GetContext } from "@/app/context/orderContextManager";
import { SCHEDULE_PIC } from "@/app/utilities/staticData";
import { getDays } from "@/app/utilities/helpers";

export default function SchedulePic({handleButtonChange}) {
    const { orderData } = GetContext();
    const [selectedDate, setSelectedDate] = useState(orderData?.dateData?.date || 0);
    const [selectedSlot, setSelectedSlot] = useState(orderData?.dateData?.slot || 0);

    return <div className="schedulePic">
        <Heading className="mx-auto w-full flex flex-col justify-center mt-20 text-center text-2xl font-bold">SELECT PICK-UP DATE & TIME</Heading>
        <div className="flex justify-center dates">
            { getDays().map((day, index) => {
                return <div className={'flex flex-1 flex-col mr-8 items-center justify-center date' + (selectedDate===index ? ' selected' : '')}
                onClick={() => {setSelectedDate(index);
                    setSelectedSlot(-1);}} key={index}>
                    <span className="number">{day.day}</span>
                    <span className="name">{day.name}</span>
                </div>
              })
            }
        </div>
        <div className="timeSlotsContainer mx-auto">
            <h1 className="timeSlotHeading text-1xl p-3 text-center">AVAILABLE SLOTS</h1>
            <div className="timeSlots">
                {SCHEDULE_PIC.slots[selectedDate].map((slot, index) => {
                    return <span className={"slot" + (selectedSlot===index ? ' selected' : '')} key={index} onClick={() => setSelectedSlot(index)}>{slot}</span>
                })}
            </div>
        </div>
        <div className="navigateButtons">
            <button className="button backButton" onClick={() => handleButtonChange()}>{'<-'} Prev</button>
            <button className="button nextButton" onClick={() => handleButtonChange(true, {date: selectedDate, slot: selectedSlot}, "schedulePic")}>Next {'->'}</button>
        </div>
    </div>
};