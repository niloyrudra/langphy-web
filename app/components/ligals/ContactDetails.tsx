import Link from "next/link";
import { useMemo } from "react";

const ContactDetails = () => {
    const contactDetails = useMemo(() => ([
        {label: "Development", contactName: "Niloy Rudra", href: "https://www.linkedin.com/in/niloy-rudra-dev/"},
        {label: "Design", contactName: "Kheya Nandi", href: "https://www.linkedin.com/in/kheya-nandi/"},
        {label: "Email", contactName: "support@langphy.com", href: "mailto:support@langphy.com"},
        {label: "Website", contactName: "langphy.com", href: "https://langphy.com//contact/"},
    ]), []);
    return (
        <ul className="list-none space-y-2">
            {
                contactDetails.map((item, index) => (
                    <li key={index}>
                        <div className="grid grid-flow-col grid-rows-1 grid-cols-6 gap-4">
                            <span className="grid grid-rows-subgrid col-span-2">{item.label}:</span>
                            <Link
                                className="grid grid-rows-subgrid col-span-4 font-bold underline text-[#142C57] italic"
                                href={item.href}
                                target="_blank"
                            >
                                {item.contactName}
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default ContactDetails;