import React, { useMemo } from 'react'
import Paragraph from '../Paragraph';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../social';

const FooterBottomSection = () => {
    const socials = useMemo(() => ([
        { name: "facebook",     href: "https://www.facebook.com/people/Langphy/61583059209391/",    icon: <FacebookIcon /> },
        { name: "instagram",    href: "https://www.instagram.com/langphy.app/",                     icon: <InstagramIcon /> },
        { name: "linkedin",     href: "https://www.linkedin.com/company/langphy/",                  icon: <LinkedinIcon /> },
        { name: "youtube",      href: "https://www.youtube.com/@LangphyOfficial",                   icon: <YoutubeIcon /> },
    ]), []);
    return (
        <div className="mt-12 pt-8 border-t border-[#19468F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Paragraph className="text-white" content="Copyright © 2026 Langphy" />
            <div className="flex items-center gap-4">
                {socials.map(({ name, href, icon }) => (
                    <a
                        key={name}
                        href={href}
                        aria-label={name}
                        target="_blank"
                        className="flex items-center justify-center"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterBottomSection;