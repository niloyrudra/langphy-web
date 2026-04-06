import Link from 'next/link';
import { useMemo } from 'react'
import FooterWidgetHeader from './_partials/FooterWidgetHeader';

const FooterLinksWidget = () => {
    const footerLinks = useMemo(() => ([
        {href: "/terms-and-conditions", name: "Terms and Conditions"},
        {href: "/privacy-policy", name: "Privacy Policy"},
        {href: "/about", name: "About us"},
        {href: "/acknowledgment", name: "Acknowledgment"}
    ]), []);
    return (
        <div>
            <FooterWidgetHeader title="Links" />
            <ul className="space-y-2.5">
                {footerLinks.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className="text-white text-sm hover:text-white transition-colors">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinksWidget;