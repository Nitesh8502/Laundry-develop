import React from "react";
import { PROCESS_DATA } from "@/app/utilities/staticData";
import Image from "next/image";
export default function ProcessSection() {
    const {leftSection, middleSection, rightSection} = PROCESS_DATA;
    function Section({sectionName, sectionData, isMiddle, isEnd}) {
        return <div className={sectionName}>
            {sectionData.map((step, index) => {
                return <div key={index} className={`relative flex ${isEnd ? 'justify-end' : 'justify-start'}`}>
                    {isEnd ? <p className="w-40 flex justify-center items-center">{step.text}</p> : null}
                    <Image className={`${isMiddle ? 'logoImage' : 'processImage'}`} src={step.imgSrc} alt={'image'}/>
                    {!isEnd ? <p className="w-40 flex justify-center items-center">{step.text}</p> : null}
                </div>;
            })}
        </div>
    }
    return <div className='flex processSection mx-auto w-fit py-12'>
        <Section sectionName='leftSection' isEnd={true} sectionData={leftSection}/>
        <Section sectionName='middleSection flex flex-col justify-center p-3' isMiddle={true} sectionData={middleSection}/>
        <Section sectionName='rightSection' sectionData={rightSection}/>
    </div>;
}