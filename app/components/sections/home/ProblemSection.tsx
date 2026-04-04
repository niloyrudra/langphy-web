import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import SectionTitle from '../../SectionTitle';
import Section from '../Section';
import Image from 'next/image';

const ProblemSection = () => {
    return (
        <Section id="problems">
            <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto items-center gap-12 md:gap-16">
                {/* Copy – shown first on mobile */}
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
                    
                    <InfoTag info="The Problem" />

                    <SectionTitle className="text-left">
                        Learning German Shouldn't Feel<br className="hidden sm:block" />Overwhelming.
                    </SectionTitle>
                    
                    <Paragraph
                        content="Many learners struggle with German because learning resources are scattered. Grammar notes, vocabulary lists, and practice exercises often live in different apps, books, and videos. Without a clear structure, it becomes difficult to know what to learn next or how to apply it in real conversations."
                    />
                    <Paragraph
                        content="Langphy solves this problem by bringing structured lessons, explanations, and practice into one focused mobile experience."
                    />
                </div>
        
                {/* Blob illustration */}
                <div className="flex shrink-0 items-center justify-center order-2 w-full md:w-auto">
                    <Image
                        src="/svg/home-section-blobs/section-problem-blob.svg"
                        alt="Problem illustration"
                        width={600}
                        height={447}
                        loading="lazy"
                        className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto"
                    />
                </div>
            </div>
        </Section>
    );
}

export default ProblemSection