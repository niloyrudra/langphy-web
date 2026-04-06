import { useMemo } from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './social';
import Link from 'next/link';
import Paragraph from './Paragraph';
import FooterBottomSection from './footer/FooterSocialList';
import LogoLight from './logo/LogoLight';
import FooterLinksWidget from './footer/FooterLinksWidget';
import FooterContactWidget from './footer/FooterContactWidget';
import FooterDownloadWidget from './footer/FooterDownloadWidget';
import FooterBrandWidget from './footer/FooterBrandWidget';

const Footer = () => (
    <footer className="w-full bg-[#142C57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <FooterBrandWidget />

                {/* Links */}
                <FooterLinksWidget />

                {/* Contact */}
                <FooterContactWidget />

                {/* Download App */}
                <FooterDownloadWidget />

            </div>

            {/* Social & copyright */}
            <FooterBottomSection />

        </div>
    </footer>
);
export default  Footer;
