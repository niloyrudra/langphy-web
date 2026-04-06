import InfoTag from "../../InfoTag";
import Paragraph from "../../Paragraph";
import SectionTitle from "../../SectionTitle";
import SectionBlock from "../SectionBlock";

const MissionSection = () => (
    <SectionBlock id="our-mission"className="md:pt-14">
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left order-1">
            <InfoTag info="OUR MISSION" />

            <SectionTitle className="text-left">
                Help you learn German with clarity and confidence.
            </SectionTitle>
            
            <Paragraph
                className="max-w-full"
                content="Our mission is to make learning German simple, structured, and accessible for everyone."
            />
            <Paragraph
                className="max-w-full"
                content="Many learners struggle because resources are scattered and unstructured. Langphy brings everything together into one focused platform, helping users follow a clear path from basic understanding to real-life communication."
            />
        </div>
    </SectionBlock>
);

export default MissionSection;