import React from "react";
import { FOOTER_DATA } from "@/app/utilities/staticData";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return <div className="footer"><div className="footerContainer flex gap-8">
        {FOOTER_DATA.map((element, idx) => <div key={idx} className="footerElement flex-1">
            {element.name && <h2 className="font-bold mb-4 footerHeader">{element.name}</h2>}
            {(element.data || element.images || []).map((ele, index) => {
                if(element.images?.length) {
                    return <Image src={ele} key={index} width={40} height={40} alt="follow Image" className="inline mr-2"/>
                } else if(element.links?.length) {
                    return <Link href={element.links[index]} key={index} className="block">{ele}</Link>
                } else {
                    return <div key={index}>{ele}</div>
                }
            })}
        </div>)}
    </div>
    <div className="footerBottom flex justify-between w-full">
            <div>© 2024 UClean. All rights reserved</div>
            <div className="flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms and conditions</span>
            </div>
    </div></div>;
}