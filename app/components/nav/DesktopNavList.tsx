import Anchor from './_partials/Anchor'

const DesktopNavList = () => (
    <ul className="hidden md:flex flex-row flex-1 justify-center space-x-4 text-sm font-medium">
        <li>
            <Anchor route="/#how-works" name="How Langphy Works" />
        </li>
        <li>
            <Anchor route="/#features" name="Features" />
        </li>
        <li>
            <Anchor route="/about" name="About Us" />
        </li>
        <li>
            <Anchor route="/contact" name="Contact Us" />
        </li>
    </ul>
);

export default DesktopNavList;