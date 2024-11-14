import React from "react";
import Heading from "./heading";
import ProcessSection from "./processSection";
export default function InfoSection() {
    return <div className="infoSection">
    <Heading className="infoHeader flex flex-col p-20 justify-center text-center text-3xl font-bold">INDIA’S NO. 1 LAUNDRY & DRY-CLEANING BRAND</Heading>
    <Heading className="flex flex-col p-20 justify-center text-center text-3xl font-bold">WHY UCLEAN?</Heading>
    <ProcessSection />
    </div>
}