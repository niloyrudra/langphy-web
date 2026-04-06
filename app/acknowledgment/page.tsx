import Link from "next/link";
import Section from "../components/ligals/Section";
import SubSection from "../components/ligals/SubSection";
import Paragraph from "../components/Paragraph";
import HeroBanner from "../components/sections/HeroBanner";
import Main from "../components/sections/Main";
import ContactDetails from "../components/ligals/ContactDetails";

const AcknowledgmentPage = () => (
    <Main>
        <HeroBanner
            title="LANGPHY"
            infoMessage="Effective Date: July 1, 2025 | Version 1.0"
        >
            Disclaimer & Acknowledgment
        </HeroBanner>

        {/* Intro */}
        <Section className="mt-20">
            <Paragraph content="This Disclaime and Acknowledgment supplements the Terms of Service and Privacy Policy of Langphy. It sets out important limitations and clarifications users should understand before relying on the application or its content for any purpose beyond personal language learning." />
        </Section>

        {/* Section-1 */}
        <Section title="1. About the Application and Its Team">
            <Paragraph content="Langphy is an independent German language learning application developed by Niloy Rudra (software development) and Kheya Nandi (product design). It is an independent project with no institutional affiliation, no external investors, and no connection to any language certification authority." />
            <Paragraph content="At the time of this writing, Langphy is available exclusively on Android and is provided free of charge. We intend to register a formal business entity in the future. In the meantime, all responsibility for the application rests with the individual developers named above." />
        </Section>

        {/* Section-2 */}
        <Section title="2. Educational Disclaimer">
            <SubSection title="2.1 No Guarantee of Language Proficiency">
                <Paragraph content="Langphy is a supplementary tool designed to support German language learning. We make no representation or guarantee regarding any specific level of language proficiency, fluency, or skill acquisition as a result of using the application. Language learning is a complex, deeply individual process influenced by many factors, including:" />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>Prior language learning experience and native language background.</li>
                    <li>Time invested and consistency of daily practice.</li>
                    <li>Exposure to German outside the application (media, conversation, travel).</li>
                    <li>Individual cognitive learning style and memory retention.</li>
                    <li>The specific vocabulary and grammar areas the learner focuses on.</li>
                </ul>
            </SubSection>

            <SubSection title="2.2 Not a Substitute for Formal Education">
                <Paragraph
                    content="Langphy is not a substitute for formal German language instruction from a qualified teacher or accredited educational institution. It is intended to complement, not replace, structured education. Langphy does not provide preparation for, nor guarantee success in, any formal language examination, including but not limited to Goethe-Institut examinations (A1 through C2), TELC, TestDaF, DSH, or any other recognised language qualification."
                />
            </SubSection>

            <SubSection title="2.3 Content Accuracy">
                <Paragraph
                    content="We make every reasonable effort to ensure the accuracy of the German language content, grammar explanations, vocabulary, and example sentences in the application. However, we cannot guarantee that all content is entirely free from error. German has regional variations across Germany, Austria, and Switzerland, and certain usages may differ across communities. If you identify any content error or inaccuracy, please report it to support@langphy.com."
                />
            </SubSection>
        </Section>

        {/* Section-3 */}
        <Section title="3. Speech Recognition Disclaimer">
            <SubSection title="3.1 Limitations of Automated Assessment">
                <Paragraph
                    content="Langphy's speech recognition and pronunciation scoring features rely on automated technology (the Whisper model). This technology has inherent limitations:" />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>It may not accurately recognise all accents, non-native speech patterns, or strong regional dialects.</li>
                    <li>Background noise, microphone quality, distance from the microphone, and speaking volume can significantly affect recognition accuracy.</li>
                    <li>The similarity and pronunciation scores are algorithmic estimates, not objective assessments by a language professional.</li>
                    <li>The feedback generated is automated and has not been reviewed or validated by a qualified language teacher, speech therapist, or linguist.</li>
                </ul>
            </SubSection>

            <SubSection title="3.2 Not a Professional Assessment">
                <Paragraph
                    content="Scores and feedback provided by Langphy's speech features are intended for educational motivation and self-guided practice only. They do not constitute a professional linguistic, academic, or occupational assessment and should not be used for any formal, legal, or professional evaluation purpose."
                />
            </SubSection>

        </Section>

        {/* Section-4 */}
        <Section title="4. Technical Disclaimer">
            <SubSection title="4.1 Service Availability">
                <Paragraph
                    content="Langphy is provided on an 'as available' basis. We do not guarantee uninterrupted availability. Planned maintenance, software defects, server outages, or third-party service failures may cause temporary unavailability of some or all features."
                />
            </SubSection>

            <SubSection title="4.2 Offline Functionality">
                <Paragraph
                    content="Langphy is designed with an offline-first architecture. Most lesson content can be accessed without an internet connection. However, the following features require connectivity:"
                />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>Speech recognition and pronunciation assessment.</li>
                    <li>Account registration, login, and password reset.</li>
                    <li>OTP email verification.</li>
                    <li>Synchronisation of learning progress to our servers.</li>
                    <li>Fetching updated lesson content.</li>
                </ul>
                <Paragraph
                    content="In offline mode, progress is stored locally and synchronised when connectivity is restored. Data stored only on your device may be permanently lost if you uninstall the application, reset your device, or experience device failure before synchronisation has occurred. We strongly recommend keeping the application updated and connected to the internet regularly to prevent data loss."
                />
            </SubSection>

            <SubSection title="4.3 Android-Only Platform">
                <Paragraph
                    content="Langphy is currently available exclusively on Android. It has not been tested on iOS, web browsers, desktop platforms, or other operating systems. We make no representation that the application will function on any platform other than Android. Future availability on other platforms is planned but not guaranteed."
                />
            </SubSection>

            <SubSection title="4.4 Device Compatibility">
                <Paragraph
                    content="Performance may vary across Android device models, screen sizes, hardware specifications, and Android OS versions. We do not guarantee compatibility with rooted devices, devices running custom or modified Android versions, or devices that have been significantly altered from their factory configuration."
                />
            </SubSection>

            <SubSection title="4.5 Data Loss">
                <Paragraph
                    content="Despite reasonable technical precautions, data loss can occur due to software bugs, synchronisation failures, device failure, or other unforeseen events. We are not liable for the loss of learning progress, streak data, vocabulary records, or any other user data. Users are encouraged to ensure regular synchronisation by maintaining an active internet connection."
                />
            </SubSection>

        </Section>

        {/* Section-5 */}
        <Section title="5. Free Application — Advertising Included">
            <Paragraph
                content="Langphy is currently free to use and supported by advertising. The application may display third-party advertisements provided by external ad networks (such as Google AdMob or similar providers)."
            />
            <Paragraph
                content="These advertising partners may process limited information—such as device identifiers, approximate location, and interaction data—to provide, personalize, and measure advertisements. This processing is carried out in accordance with the privacy policies of the respective ad providers."
            />
            <Paragraph
                content="Langphy does not sell your personal data to advertisers. We only work with advertising partners that are expected to comply with applicable data protection laws and industry standards."
            />
            <Paragraph
                content="Where required by applicable laws (such as in the European Economic Area, the United Kingdom, or similar regions), we will request your consent before serving personalized advertisements."
            />

            <SubSection title="5.1 Ad Personalization & User Choices">
                <Paragraph
                    content="You have control over how advertisements are shown to you:"
                />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>You may be presented with a consent prompt (e.g., via a Consent Management Platform such as Google UMP) to choose whether to receive personalized ads.</li>
                    <li>You can change your preferences at any time through your device settings, including:
                        <ul className="list-disc pl-12 space-y-1 flex-wrap">
                            <li>Android: Settings → Privacy → Ads</li>
                        </ul>
                    </li>
                    <li>You may opt out of personalized advertising, in which case you will still see ads, but they may be less relevant.</li>
                </ul>
            </SubSection>

            <SubSection title="5.2 Data Shared with Advertising Partners">
                <Paragraph
                    content="To support advertising, Langphy may share the following categories of data with ad partners:"
                />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>Device Information (e.g., device model, OS version)</li>
                    <li>Advertising Identifiers (e.g., Google Advertising ID)</li>
                    <li>Approximate Location (based on IP or device settings, not precise GPS)</li>
                    <li>Usage Data (e.g., app interactions, ad engagement)</li>
                </ul>

                <Paragraph
                    className="mt-4"
                    content="This data is used for:"
                />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>Ad delivery</li>
                    <li>Ad personalization (if consent is given)</li>
                    <li>Analytics and performance measurement</li>
                    <li>Fraud prevention and security</li>
                </ul>

                <Paragraph
                    className="mt-4"
                    content="We do not share:"
                />
                <ul className="list-disc pl-6 space-y-1 flex-wrap">
                    <li>Precise location data</li>
                    <li>Contacts, messages, or sensitive personal content</li>
                </ul>
            </SubSection>

            <SubSection title="5.3 Future Paid Features">
                <Paragraph
                    content="Optional paid membership features may be introduced in a future version. These may include benefits such as removing advertisements and unlocking premium features. The free version of the application will remain available."
                />
            </SubSection>

        </Section>

        {/* Section-6 */}
        <Section title="6. Third-Party Services">
            <Paragraph
                content="Langphy depends on certain third-party services for infrastructure, speech processing, and email delivery. We do not control the availability or conduct of these services. Any failure, downtime, or change in third-party service terms may affect the corresponding Langphy features. We are not responsible for the independent practices of third-party service providers."
            />
        </Section>

        {/* Section-7 */}
        <Section title="7. No Professional Advice">
            <Paragraph
                content="Nothing in the Langphy application, its content, or any communication from us constitutes professional advice of any kind, including pedagogical, medical, legal, or financial advice. The application is a personal software tool for language learning and entertainment purposes only."
            />
        </Section>

        {/* Section-8 */}
        <Section title="8. Intellectual Property Acknowledgment">
            <Paragraph
                content="The German language itself is a natural human language and is not proprietary. However, the specific lesson content, exercise structures, audio recordings, sentence constructions, interface designs, and application code within Langphy are original works created by Niloy Rudra and Kheya Nandi, or are licensed to them. Users acknowledge that they may not reproduce, republish, redistribute, or otherwise exploit lesson content from the application outside of their personal learning use."
            />
        </Section>

        {/* Section-9 */}
        <Section title="9. Forward-Looking Statements">
            <Paragraph
                content="This document and other communications from Langphy may contain statements about future plans, including the introduction of paid membership tiers, availability on additional platforms, or expansion of content. These are intentions and not guarantees. Future features and availability are subject to change based on technical, business, and other considerations. We are under no obligation to deliver any features described as planned or upcoming."
            />
        </Section>

        {/* Section-10 */}
        <Section title="10. Formal Registration Acknowledgment">
            <Paragraph
                content="As noted above, Langphy is currently operated by two individuals — Niloy Rudra and Kheya Nandi — rather than a formally registered legal entity. We intend to register a business entity in the future. Until that time, any legal obligations, liabilities, or responsibilities associated with the application rest with Niloy Rudra and Kheya Nandi as individuals. This does not diminish our commitment to protecting your data and providing a quality service in accordance with these Terms and the Privacy Policy."
            />
        </Section>

        {/* Section-11 */}
        <Section title="11. User Acknowledgment">
            <Paragraph
                content="By creating an account and using Langphy, you confirm that:"
            />
            <ul className="list-disc pl-6 space-y-1 flex-wrap">
                <li>You have read and understood the Terms of Service, Privacy Policy, and this Disclaimer.</li>
                <li>You understand that Langphy is an independent application and is not affiliated with any language certification authority or educational institution.</li>
                <li>You understand that speech assessment features are automated and not evaluated by qualified language professionals.</li>
                <li>You acknowledge the offline data storage model and the risk of data loss on unsynced devices.</li>
                <li>You understand that Langphy is currently available on Android only and is free of charge, with optional paid features planned for the future.</li>
                <li>You understand that Langphy is operated by individual developers and not yet a registered company.</li>
                <li>You are of sufficient age to enter into these agreements, or a parent or legal guardian has done so on your behalf.</li>
            </ul>

        </Section>

        {/* Section-12 */}
        <Section title="12. Contact and Corrections" className="w-full">
            <Paragraph content="For content errors, technical concerns, or any other queries:" />
            <ContactDetails />
        </Section>
        
        <Section>
            <span className="flex uppercase italic text-grey-500 my-10 text-center">
                Last reviewed: July 1, 2025. These documents will be updated as Langphy evolves, including when a formal business entity is registered or when paid features are introduced.
            </span>
        </Section>

    </Main>

);

export default AcknowledgmentPage;