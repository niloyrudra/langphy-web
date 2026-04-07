import Anchor from './_partials/Anchor'
import ActionButton from '../ActionButton';

const MobileNavList = ({onClick}: {onClick: () => void}) => (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-[#D5F6FF] border-t border-[#a8e8f8] px-6 py-6 flex flex-col gap-4 shadow-md">
        <Anchor route="/#how-works" onClick={onClick} name="How Langphy Works" />
        <Anchor route="/#features" onClick={onClick} name="Features" />
        <Anchor route="/about" onClick={onClick} name="About Us" />
        <Anchor route="/contact" onClick={onClick} name="Contact Us" />
        <ActionButton
            href="/#download"
            onClick={onClick}
            className="justify-center"
            title="Download The App Now"
        />
    </div>
);


export default MobileNavList;