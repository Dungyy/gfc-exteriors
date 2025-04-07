// src/global.js
// Global constants and configurations for the GFC Exteriors website

import {
    FaTools,
    FaInfoCircle,
    FaAddressCard,
    FaFileInvoiceDollar,
    FaHome,
    FaTrashAlt,
    FaTint,
    FaLeaf,
    FaWater,
    FaTruck,
    FaPaintRoller,
    FaSnowflake,
    FaHardHat,
    FaThumbsUp,
    FaMoneyBillWave
} from "react-icons/fa";

import {
    MdOutlineCleaningServices,
    MdOutlineRoofing,
    MdOutlineFence,
    MdCleaningServices,
    MdHighQuality
} from "react-icons/md";

import { GiWindow } from "react-icons/gi";
import { BiSolidLandscape } from "react-icons/bi";

// Main navigation items (used in both desktop and mobile menus)
export const mainNavItems = [
    {
        name: 'Services',
        href: '#services',
        icon: <FaTools className="text-gfc-gold" size={16} />,
        mobileIcon: <FaTools className="text-gfc-gold" size={18} />
    },
    {
        name: 'About',
        href: '#about',
        icon: <FaInfoCircle className="text-gfc-gold" size={16} />,
        mobileIcon: <FaInfoCircle className="text-gfc-gold" size={18} />
    },
    {
        name: 'Contact',
        href: '#contact',
        icon: <FaAddressCard className="text-gfc-gold" size={16} />,
        mobileIcon: <FaAddressCard className="text-gfc-gold" size={18} />
    }
];

// Quote button (special navigation item)
export const quoteButton = {
    name: 'Get Free Quote',
    href: '#contact',
    icon: <FaFileInvoiceDollar size={16} />,
    mobileIcon: <FaFileInvoiceDollar size={18} />
};

// Categories for services filtering
export const categories = [
    { id: 'all', name: 'All Services', icon: <FaHome /> },
    { id: 'exterior', name: 'Exterior', icon: <FaPaintRoller /> },
    { id: 'landscaping', name: 'Landscaping', icon: <BiSolidLandscape /> },
    { id: 'seasonal', name: 'Seasonal', icon: <FaSnowflake /> },
    { id: 'maintenance', name: 'Maintenance', icon: <FaTools /> },
];

// About section features
export const teamFeatures = [
    {
        icon: <FaHardHat />,
        title: "Experienced Team",
        description: "Our professionals have years of industry experience."
    },
    {
        icon: <MdHighQuality />,
        title: "Quality Materials",
        description: "We use only the highest quality materials for lasting results."
    },
    {
        icon: <FaThumbsUp />,
        title: "Satisfaction Guaranteed",
        description: "Your complete satisfaction is our top priority."
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Competitive Pricing",
        description: "Quality service at fair and transparent prices."
    }
];


// Services offered (for services section)
export const serviceItems = [
    {
        id: 1,
        name: 'Pressure Washing',
        description: 'Restore your home\'s exterior with our professional pressure washing services.',
        details: 'Driveways, siding, decks, patios, and more.',
        category: 'exterior',
        icon: <FaWater className="text-gfc-gold" />,
    },
    {
        id: 2,
        name: 'Gutter Cleaning',
        description: 'Prevent water damage with regular gutter cleaning and maintenance.',
        details: 'Debris removal, downspout clearing, and minor repairs.',
        category: 'maintenance',
        icon: <MdOutlineCleaningServices className="text-gfc-gold" />,
    },
    {
        id: 3,
        name: 'Window Installation & Cleaning',
        description: 'Enhance your view with our window installation and cleaning services.',
        details: 'Interior and exterior, screens, tracks, and sills.',
        category: 'exterior',
        icon: <GiWindow className="text-gfc-gold" />,
    },
    {
        id: 4,
        name: 'Lawn Care',
        description: 'Keep your lawn looking its best with our professional care services.',
        details: 'Mowing, trimming, edging, and fertilization.',
        category: 'landscaping',
        icon: <FaLeaf className="text-gfc-gold" />,
    },
    {
        id: 5,
        name: 'Snow Removal',
        description: 'Stay safe during winter with prompt and reliable snow removal.',
        details: 'Driveways, walkways, and commercial properties.',
        category: 'seasonal',
        icon: <FaSnowflake className="text-gfc-gold" />,
    },
    {
        id: 6,
        name: 'Roof Cleaning',
        description: 'Extend the life of your roof with our specialized cleaning services.',
        details: 'Moss removal, algae treatment, and preventative care.',
        category: 'maintenance',
        icon: <MdOutlineRoofing className="text-gfc-gold" />,
    },
    {
        id: 7,
        name: 'Fence Installation',
        description: 'Enhance privacy and security with our quality fence installation.',
        details: 'Wood, vinyl, chain link, and custom designs.',
        category: 'exterior',
        icon: <MdOutlineFence className="text-gfc-gold" />,
    },
    // {
    //   id: 8,
    //   name: 'Electrical Repairs',
    //   description: 'Professional electrical services for a safe and efficient home.',
    //   details: 'Fixture installation, wiring, and troubleshooting.',
    //   category: 'maintenance',
    //   icon: <GiElectric className="text-gfc-gold" />,
    // },
    {
        id: 9,
        name: 'Seasonal Cleanup',
        description: 'Prepare your property for the changing seasons with our thorough cleanup.',
        details: 'Spring and fall cleanups, leaf removal, and bed preparation.',
        category: 'seasonal',
        icon: <MdCleaningServices className="text-gfc-gold" />,
    },
];

// Services for footer
export const services = [
    {
        name: 'Siding & Gutters',
        href: '#services',
        icon: <FaHome className="text-gfc-gold" />
    },
    {
        name: 'Junk Removal',
        href: '#services',
        icon: <FaTrashAlt className="text-gfc-gold" />
    },
    {
        name: 'Gutter Cleaning',
        href: '#services',
        icon: <FaTint className="text-gfc-gold" />
    },
    {
        name: 'Lawn Care',
        href: '#services',
        icon: <FaLeaf className="text-gfc-gold" />
    },
    {
        name: 'Pressure Washing',
        href: '#services',
        icon: <FaWater className="text-gfc-gold" />
    },
    {
        name: 'Dump Trailer Rental',
        href: '#services',
        icon: <FaTruck className="text-gfc-gold" />
    }
];

// Quick links for footer
export const quickLinks = [
    {
        name: 'Home',
        href: '/',
        icon: <FaHome className="text-gfc-gold" />
    },
    {
        name: 'About Us',
        href: '#about',
        icon: <FaInfoCircle className="text-gfc-gold" />
    },
    {
        name: 'Services',
        href: '#services',
        icon: <FaTools className="text-gfc-gold" />
    },
    // { name: 'Testimonials', href: '#testimonials', icon: <FaQuoteRight className="text-gfc-gold" /> },
    {
        name: 'Contact Us',
        href: '#contact',
        icon: <FaAddressCard className="text-gfc-gold" />
    }
];

// Business hours (for footer)
export const businessHours = [
    {
        day: 'Monday - Friday',
        hours: '8:00 AM - 6:00 PM'
    },
    {
        day: 'Saturday',
        hours: '9:00 AM - 4:00 PM'
    },
    {
        day: 'Sunday',
        hours: 'Closed'
    }
];

// Contact information (for footer and contact section)
export const contactInfo = {
    phone1: {
        name: 'Cesar',
        number: '320-226-2128',
        href: 'tel:+13202262128'
    },
    phone2: {
        name: 'Jose',
        number: '320-435-1703',
        href: 'tel:+13204351703'
    },
    email: {
        address: 'gfcexteriors@gmail.com',
        href: 'mailto:gfcexteriors@gmail.com'
    },
    location: 'Montevideo, MN and surrounding areas'
};