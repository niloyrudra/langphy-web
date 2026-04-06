import Image from 'next/image'
import InfoTag from '../../InfoTag';
import SectionTitle from '../../SectionTitle';
import Paragraph from '../../Paragraph';
import SectionBlock from '../SectionBlock';

const OurTeamSection = () => (
    <SectionBlock className="bg-[#F9FAFB]" id="our-team">
        <div className="flex flex-col max-w-6xl w-full mx-auto items-center gap-6">

            <InfoTag info="MEET THE TEAM" className="bg-white text-[#142C57]" />

            <SectionTitle>
                A small team shaping a clearer, more<br className="hidden sm:block" />meaningful way to learn German
            </SectionTitle>

            <Paragraph
                className='max-w-4xl text-center mt-8'
                content="We combine design, technology, and real user insight to build a learning experience that feels intuitive, supportive, and effective. Every detail is crafted with care to help learners move forward with confidence."
            />
                
            {/* ── Niloy Rudra ── */}
            <div className="flex flex-col mt-20 md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
                {/* Blob – shown second on mobile (after copy), first on desktop */}
                <div className="flex shrink-0 items-center justify-center order-2 md:order-1 w-full md:w-auto">
                    <Image
                        src="/webp/section/niloy-rudra.webp"
                        alt="Niloy Rudra - Founder & Full-Stack Developer"
                        width={300}
                        height={349.06}
                        loading="lazy"
                        className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto"
                    />
                </div>
        
                {/* Copy */}
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1 md:order-2">
                    
                    <SectionTitle className="text-left">Niloy Rudra</SectionTitle>

                    <Paragraph className='text-[#142C57]' content="Founder & Full-Stack Developer" />

                    <Paragraph content="Responsible for building and scaling the platform, Niloy ensures Langphy is fast, reliable, and seamless. With expertise in modern web and mobile technologies, he brings the product to life with clean and efficient engineering." />
        
                    <a
                        href="https://www.linkedin.com/in/niloy-rudra-dev/"
                        target='_blank'
                        className="mt-3"
                    >
                        <Image
                            src="/svg/social-icons/linkedin-icon.svg"
                            alt="Linkedin Icon"
                            width={24}
                            height={24}
                        />
                    </a>

                </div>
            </div>

            {/* ── Kheya Nandi ── */}
            <div className="flex flex-col mt-20 md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
                {/* Copy – shown first on mobile */}
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
                    
                    <SectionTitle className="text-left">
                        Kheya Nandi
                    </SectionTitle>

                    <Paragraph className='text-[#142C57]' content="Co-Founder & Product Designer" />
                    
                    <Paragraph
                        content="Kheya leads the vision and design of Langphy, focusing on creating a calm, structured learning experience. With a strong background in product design, she simplifies complex systems and designs products that feel intuitive and human."
                    />

                    <a
                        href="https://www.linkedin.com/in/kheya-nandi/"
                        target="_blank"
                        className="mt-3"
                    >
                        <Image
                            src="/svg/social-icons/linkedin-icon.svg"
                            alt="Linkedin Icon"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
    
                {/* Blob illustration */}
                <div className="flex shrink-0 items-center justify-center order-2 w-full md:w-auto">
                    <Image
                        src="/webp/section/kheya-nandi.webp"
                        alt="Kheya Nandi - Co-Founder & Product Designer"
                        width={365}
                        height={399.69}
                        loading="lazy"
                        className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto"
                    />
                </div>
            </div>

        </div>
    </SectionBlock>
);


export default OurTeamSection;
