import { usePathname } from 'next/navigation';
import Anchor from './_partials/Anchor'
import { useMemo } from 'react';

const DesktopNavList = () => {
    const pathName = usePathname();
    const navItems = useMemo(() => ([
        { name: "How It Works", href: "/#how-works" },
        { name: "Features", href: "/#features" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ]), []);

    console.log(pathName)
    return (
        <ul className="hidden md:flex flex-row flex-1 justify-center space-x-4 text-sm font-medium">
            {
                navItems.map((item, index) => {
                    const isActive = pathName.startsWith(item.href);
                    return (
                        <li key={index}>
                            <Anchor route={item.href} name={item.name} isActive={isActive} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default DesktopNavList;