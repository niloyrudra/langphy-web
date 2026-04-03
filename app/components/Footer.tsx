import { useMemo } from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './social';
import Link from 'next/link';

export default function Footer() {
    const socials = useMemo(() => ([
        { name: "facebook", icon: <FacebookIcon /> },
        { name: "instagram", icon: <InstagramIcon /> },
        { name: "linkedin", icon: <LinkedinIcon /> },
        { name: "youtube", icon: <YoutubeIcon /> },
    ]), []);
    
    return (
        <footer className="w-full bg-[#142C57] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/svg/logo/logo-light.svg"
                                alt="Langphy Logo"
                                width={334.87}
                                height={77.87}
                                loading="eager"
                                preload
                                // priority
                            />
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A structured German language learning app designed for real-life communication.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                            Links
                        </h4>
                        <ul className="space-y-2.5">
                            {["Terms and Conditions", "Privacy Policy", "About us", "Acknowledgment"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                    {item}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                            Contact
                        </h4>

                        <ul className="space-y-3">
                            {/* <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 shrink-0 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                +01 ## ## ## ##
                            </li> */}
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 shrink-0 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                support@langphy.com
                            </li>
                            <li className="flex items-start gap-2 text-gray-400 text-sm">
                                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#3B9EE8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div>
                        <h4 className="font-semibold text-white mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                            Download App
                        </h4>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-black border border-gray-700 rounded-xl px-4 py-2.5 hover:border-gray-500 transition-colors"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.18 23.76c.3.17.64.24.98.24.37 0 .75-.1 1.08-.3l12.45-7.19-2.89-2.89-11.62 10.14zM.24 1.5C.09 1.82 0 2.18 0 2.57v18.86c0 .39.09.75.24 1.07l.12.11 10.57-10.57v-.25L.36 1.39.24 1.5zm18.3 10.12L15.69 9.77l-2.89 2.89 2.89 2.89 2.89-1.67c.82-.48.82-1.26-.04-1.76zM4.14.54L16.59 7.73l-2.89 2.89-2.89-2.89L4.14.54z" />
                            </svg>

                            <div>
                                <div className="text-[10px] text-gray-400">GET IT ON</div>
                                <div className="text-sm font-semibold leading-tight">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Social & copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">Copyright © 2026 Langphy</p>
                    <div className="flex items-center gap-4">
                        {socials.map(({ name, icon }) => (
                            <a
                                key={name}
                                href="#"
                                aria-label={name}
                                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#1A6BCC] flex items-center justify-center transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
