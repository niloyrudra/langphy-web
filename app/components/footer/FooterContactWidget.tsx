import Link from 'next/link';
import { useMemo } from 'react'
import FooterWidgetHeader from './_partials/FooterWidgetHeader';
import PhoneIcon from '../icons/PhoneIcon';
import LocationIcon from '../icons/LocationIcon';
import MailIcon from '../icons/MailIcon';

const FooterContactWidget = () => {
    const footerContacts = useMemo(() => ([
        // {href: "tel:+8801111111111", icon: <PhoneIcon />, name: "+01 ## ## ## ##"},
        {href: "mailto:support@langphy.com", icon: <MailIcon />, name: "support@langphy.com"},
        {href: "https://maps.app.goo.gl/6jUhofwyqC6oXCkUA", icon: <LocationIcon />, name: "Dhaka, Bangladesh"}
    ]), []);
    return (
        <div>
            <FooterWidgetHeader title="Contact" />
            <ul className="space-y-3">
                {footerContacts.map((item, index) => (
                    <li className="flex items-start gap-3 text-white text-sm align-center" key={index}>
                        {item.icon}
                        <Link href={item.href} className="text-white text-sm hover:text-underline transition-all">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterContactWidget;



//         {/* <li className="flex items-center gap-2 text-white text-sm">
//             <svg className="w-4 h-4 shrink-0 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//             </svg>
//             +01 ## ## ## ##
//         </li> */}
//         <li className="flex items-center gap-2 text-white text-sm">
//             <svg className="w-4 h-4 shrink-0 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//             </svg>
//             support@langphy.com
//         </li>
//         <li className="flex items-start gap-2 text-white text-sm">
//             {/* <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//             </svg> */}
//             Dhaka, Bangladesh
//         </li>
//     </ul>
// </div>