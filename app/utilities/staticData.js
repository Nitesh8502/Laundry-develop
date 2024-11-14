import drycleaning from '../images/drycleaning.jpg';
import icondrycleaning from '../images/icondrycleaning.png';
import laundryby1kg from '../images/laundryby1kg.webp';
import iconlaundryby1kg from '../images/iconlaundryby1kg.png';
import premiumlaundry from '../images/premiumlaundry.webp';
import iconpremiumlaundry from '../images/iconpremiumlaundry.png';
import steamironing from '../images/steamironing.jpg';
import iconsteamironing from '../images/iconsteamironing.png';
import quickservice from '../images/quickservice.webp';
import doorstep from '../images/doorstep.webp';
import affordable from '../images/affordable.webp';
import stateoftech from '../images/stateoftech.webp';
import savewater from '../images/savewater.webp';
import processlogo from '../images/processlogo.webp';
import professional from '../images/professional.webp';
import greencertified from '../images/greencertified.webp';
import ondemand from '../images/ondemand.webp';
import sanitized from '../images/sanitized.webp';
import custom from '../images/custom.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
const CAROUSEL_DATA = Object.freeze([
    {name: 'Dry Cleaning',
    img: drycleaning,
    icon: icondrycleaning,
    description: 'Eco Friendly I Expert Stain Removal'
    },
    {name: 'Laundry by Kg',
    img: laundryby1kg,
    icon: iconlaundryby1kg,
    description: 'Wash & Iron I Wash & Fold'
    },
    {name: 'Premium Laundry',
    img: premiumlaundry,
    icon: iconpremiumlaundry,
    description: 'Economical I Personalized Care'
    },
    {name: 'Steam Ironing',
    img: steamironing,
    icon: iconsteamironing,
    description: 'Sanitized & Smooth'
    }
])

const PROCESS_DATA = Object.freeze({
    leftSection: [
        {
            text: 'Quick Service',
            imgSrc: quickservice
        },
        {
            text: 'Doorstep Pick  up and Drop',
            imgSrc: doorstep
        },
        {
            text: 'Affordable per kilo pricing',
            imgSrc: affordable
        },
        {
            text: 'State-of-the-art  Technology',
            imgSrc: stateoftech
        },
        {
            text: 'We Save Water with  every wash',
            imgSrc: savewater
        }
    ],
    middleSection: [
        {
            imgSrc: processlogo
        }
    ],
    rightSection: [
        {
            text: 'Professional cleaning',
            imgSrc: professional
        },
        {
            text: 'Green Certified Detergents',
            imgSrc: greencertified
        },
        {
            text: 'On-demand service also available',
            imgSrc: ondemand
        },
        {
            text: '100% Sanitized Clothes',
            imgSrc: sanitized
        },
        {
            text: 'Custom packaging Fold or Hang!',
            imgSrc: custom
        }
    ]
});
const NAVIGATION = Object.freeze([
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: '/aboutus', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Pricing List', href: '/pricinglist', current: false },
  ]);
const FOOTER_DATA = Object.freeze([
    {
        data: [
            "UClean is India's largest Laundry & Dry Cleaning Chain with over 300+ stores spread across 85+ cities. we are also India's highest rated laundry brand."
        ]},
    {
        name : 'OUR SERVICES',
        data: [ "Dry Cleaning", "Laundry by Kg", "Premium Laundry", "Steam Ironing", "Shoe Cleaning", "Bag Cleaning", "Curtain Cleaning" ]
    },
    {
        name: 'PAGES',
        data: ['Home', 'About Us', 'Services', 'Pricing List', 'Order Now'],
        links: ['/', '/aboutus', '/services', '/pricinglist', 'order']
    },
    {
        name: 'CONTACT US',
        data : ['Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144001']
    },
    {
        name: 'FOLLOW US',
        images : [linkedin, facebook, twitter, instagram]
    }
])
const BUILD_ORDER = Object.freeze({
    steps: ['Build your Order', 'Schedule Pick up', 'Choose Address', 'Confirm'],
    laundryCart: [
        { 
            heading: 'DRY CLEANING',
            description: ['Formal wear, Ornamental', 'Blankets, Quilts, Curtains', 'Bags, Shoes, Soft Toys'],
            delivery: '3-5 Days',
            price: '₹25/PC',
            imageClass: 'dryCleaning'
        },
        { 
            heading: 'PREMIUM LAUNDRY KG',
            description: ['Formal wear', 'Bedsheets, Dohars', 'Delicates etc.'],
            delivery: '12-24 Hrs',
            price: '₹179/KG',
            imageClass: 'premiumCleaning'
        },
        { 
            heading: 'LAUNDRY - WASH & FOLD',
            description: ['Laundry by Kilo', 'Stack Packing', 'Intimate wear, Socks'],
            delivery: '1-2 Days',
            price: '₹79/KG',
            imageClass: 'laundryFold'
        },
        { 
            heading: 'LAUNDRY - WASH & IRON',
            description: ['Laundry by Kilo', 'Stack Packing', 'Vacuum Steam Iron'],
            delivery: '1-2 Days',
            price: '₹109/KG',
            imageClass: 'laundryIron'
        },
        { 
            heading: 'STEAM PRESS',
            description: ['Vacuum Steam Iron', 'Individually Packed- Hanger or Folded'],
            delivery: '12-24 Hrs',
            price: '₹17/PC',
            imageClass: 'steamPress'
        }
    ]
})
const SCHEDULE_PIC = Object.freeze({
    maxDays: 7,
    slots : [
        ['1PM - 3PM', '5PM - 7PM', '8PM - 9PM', '3PM - 5PM', '7PM - 9PM'],
        ['2PM - 4PM', '1PM - 3PM', '10AM - 11AM', '9AM - 10AM'],
        ['2PM - 3PM', '5PM - 6PM', '8PM - 10PM', '3PM - 4PM', '7PM - 8PM'],
        ['10PM - 11PM', '5PM - 7PM', '8PM - 9PM'],
        ['1PM - 3PM', '5PM - 8PM', '8PM - 9PM'],
        ['1PM - 3PM', '5PM - 7PM', '8PM - 9PM', '3PM - 5PM', '7PM - 9PM'],
        ['1PM - 3PM', '5PM - 7PM', '8PM - 9PM']
    ]
})
export { CAROUSEL_DATA, PROCESS_DATA, NAVIGATION, FOOTER_DATA, BUILD_ORDER, SCHEDULE_PIC };