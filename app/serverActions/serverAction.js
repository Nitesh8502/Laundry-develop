'use server';
import { cookies } from "next/headers";
import { Resend } from 'resend';
import { convertsDaysInSeconds } from "../utilities/helpers";
import EmailTemplate from "../utilities/emailTemplate";

async function setUserDataInCookie(data) {
    const cookie = cookies();
    Object.keys(data).map( key => {
        cookie.set(key, data[key], {
            maxAge: convertsDaysInSeconds(process.env.COOKIE_EXPIRY_DAYS || 30)
        });
    });
}

async function getDataFromCookie() {
    const cookie = cookies();
    return {name: cookie.get('name')?.value, mobileNumber: cookie.get('mobileNumber')?.value, mail: cookie.get('mail')?.value};
}

async function sendConfirmationEmail() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const cookie = cookies();
    try {
        await resend.emails.send({
            from: process.env.DOMAIN_EMAIL_ADDRESS || 'Tomar@resend.dev',
            to: cookie.get('mail')?.value,
            subject: 'Congrats! Order Placed',
            react: EmailTemplate({userName: cookie.get('name')?.value})
        });
    } catch(e) {
        console.log(e);
    }
}
export { setUserDataInCookie, getDataFromCookie, sendConfirmationEmail };