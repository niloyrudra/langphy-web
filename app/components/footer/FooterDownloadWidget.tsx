import Image from 'next/image';
import FooterWidgetHeader from './_partials/FooterWidgetHeader';

const FooterDownloadWidget = () => (
    <div>
        <FooterWidgetHeader title="Download App" />
        <a
            href="#"
            className="inline-flex items-center"
        >
            <Image
                src="/svg/download-button.svg"
                alt="Google Play Store App Download Button"
                width={130.67}
                height={38.44}
            />
        </a>
    </div>
);

export default FooterDownloadWidget;