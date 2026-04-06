import { ReactNode, useMemo } from "react";

type ContactMethods = {
    icon: ReactNode;
    label: string;
    value: string;
    href?: string | null;
}

const ContactMethodsSection = () => {
    const contactMethods: ContactMethods[] = useMemo(() => ([
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email Us",
            value: "support@langphy.com",
            href: "mailto:support@langphy.com",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Our Location",
            value: "Dhaka, Bangladesh",
            // href: "#",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: "Response Time",
            value: "Within 24 hours",
            // href: "#",
        },
    ]), []);

    return (
        <section className="w-full px-4 -mt-8 z-10 relative">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactMethods.map(({ icon, label, value, href }, index) => (
                    href
                        ? (
                            <a
                                key={label}
                                href={href}
                                className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl border border-zinc-100 shadow-sm px-6 py-8 hover:shadow-md hover:border-[#D5F6FF] transition-all group"
                            >
                                <div className="flex w-12 h-12 rounded-full bg-[#D5F6FF] items-center justify-center text-[#1B7CF5] group-hover:bg-[#1B7CF5] group-hover:text-white transition-colors">
                                    {icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
                                    <p className="text-sm font-semibold text-[#142C57]">{value}</p>
                                </div>
                            </a>
                        )
                        : (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl border border-zinc-100 shadow-sm px-6 py-8 hover:shadow-md hover:border-[#D5F6FF] transition-all group"
                            >
                                <div className="flex w-12 h-12 rounded-full bg-[#D5F6FF] items-center justify-center text-[#1B7CF5] group-hover:bg-[#1B7CF5] group-hover:text-white transition-colors">
                                    {icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
                                    <p className="text-sm font-semibold text-[#142C57]">{value}</p>
                                </div>
                            </div>
                        )
                    
                    
                ))}
            </div>
        </section>
    );
}

export default ContactMethodsSection;