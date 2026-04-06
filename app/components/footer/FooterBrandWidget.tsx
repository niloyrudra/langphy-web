import Paragraph from '../Paragraph';
import LogoLight from '../logo/LogoLight';

const FooterBrandWidget = () => (
    <div className="col-span-1 sm:col-span-2 lg:col-span-1">      
        <LogoLight />
        <Paragraph
            className="leading-relaxed max-w-xs text-white"
            content="A structured German language learning app designed for real-life communication."
        />
    </div>
);

export default FooterBrandWidget;