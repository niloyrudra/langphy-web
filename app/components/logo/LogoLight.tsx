import Image from 'next/image';

const LogoLight = () => (
    <div className="flex items-center gap-2 mb-4">
        <a href="/">
            <Image
                src="/svg/logo/logo-light.svg"
                alt="Langphy Logo"
                width={334.87}
                height={77.87}
                loading="eager"
                preload
                // priority
            />
        </a>
    </div>
);

export default LogoLight;