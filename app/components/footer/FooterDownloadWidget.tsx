import Image from 'next/image';
import FooterWidgetHeader from './_partials/FooterWidgetHeader';
import Link from 'next/link';

const FooterDownloadWidget = () => (
    <div>
        <FooterWidgetHeader title="Download App" />
        <Link
            href="https://play.google.com/store/apps/details?id=com.langphy.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
        >
            <Image
                src="/svg/download-button.svg"
                alt="Google Play Store App Download Button"
                width={130.67}
                height={38.44}
            />
        </Link>
    </div>
);

export default FooterDownloadWidget;