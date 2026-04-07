import SectionBlock from '../SectionBlock';
import InfoTag from '../../InfoTag';
import Paragraph from '../../Paragraph';
import SectionTitle from '../../SectionTitle';

const TopSection = () => (
    <SectionBlock id="about-and-mission-langphy" className="md:pb-14">
        <div className="flex flex-col gap-4 items-center text-center order-1">
            <InfoTag info="ABOUT LANGPHY" />

            <SectionTitle>Learn German the Smart Way</SectionTitle>
            
            <Paragraph
                className="max-w-full text-justify"
                content="Langphy is a modern German language learning app designed to make learning clear, structured, and practical. Our goal is simple — to help learners understand German, not just memorize it."
            />
            <Paragraph
                className="max-w-full text-justify"
                content="Built as a mobile-first learning experience, Langphy combines grammar explanations, real-life examples, and interactive practice to help users develop real confidence in using German in everyday situations."
            />
        </div>

        <div className="flex flex-col gap-4 items-center text-center order-2">
            <InfoTag info="OUR MISSION" />

            <SectionTitle>
                Help you learn German with clarity and confidence.
            </SectionTitle>
            
            <Paragraph
                className="max-w-full text-justify"
                content="Our mission is to make learning German simple, structured, and accessible for everyone."
            />
            <Paragraph
                className="max-w-full text-justify"
                content="Many learners struggle because resources are scattered and unstructured. Langphy brings everything together into one focused platform, helping users follow a clear path from basic understanding to real-life communication."
            />
        </div>
    </SectionBlock>
);

export default TopSection;