import CTA from "@/app/components/CTAButton";
import Paragraph from "@/app/components/Paragraph";

const BrandSlogan = () =>  (
    <div className="flex flex-col gap-4 items-center text-center z-4 mb-4">
        <h1 className="font-poppins text-6xl md:text-4xl sm:text-2xl font-semibold leading-tight tracking-tight text-[#1751B6]">
            Learn German the<br />smart way
        </h1>
        <Paragraph
            className="text-base"
            content="Langphy is a mobile-first German language learning app designed to help you understand, practice, and confidently use German in real life."
        />
        <CTA title="Download on Google Playstore" href="#download" />
    </div>
);

export default BrandSlogan;