"use client";

import Section from "../components/ligals/Section";
import SubSection from "../components/ligals/SubSection";
import Paragraph from "../components/Paragraph";
import Main from "../components/sections/Main";
import HeroBanner from "../components/sections/HeroBanner";
import ContactDetails from "../components/ligals/ContactDetails";

const PrivacyPolicyPage = () => (
    <Main>    
        <HeroBanner
            title="LANGPHY"
            infoMessage="Effective Date: July 1, 2025 | Version 1.0"
        >
            Privacy Policy
        </HeroBanner>

        {/* Intro */}
        <Section className="mt-20">
            <Paragraph content="This Privacy Policy explains how Langphy, developed and operated by Niloy Rudra and Kheya Nandi ('we', 'us', or 'our'), collects, uses, stores, protects, and shares your personal information when you use the Langphy Android application ('App'). By using the App, you agree to the practices described in this policy." />
        </Section>

        {/* Section 1 */}
        <Section title="1. Who This Policy Applies To">
            <Paragraph content="This policy applies to all users of the Langphy Android application, regardless of geographic location. Users in the European Economic Area (EEA), United Kingdom, or other jurisdictions with specific data protection laws may have additional rights described in Section 10." />
        </Section>

        {/* Section 2 */}
        <Section title="2. Information We Collect"> 
            <SubSection title="2.1 Information You Provide Directly">
                <Paragraph content="When you register and use Langphy, you provide:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Email address — used for account creation, OTP-based email verification, and account-related communications.</li>
                    <li>Password — stored in irreversibly hashed form. Your password is never stored or transmitted in plain text.</li>
                    <li>Profile information — optionally, your first name, last name, username, and a profile image.</li>
                </ul>
            </SubSection>

            <SubSection title="2.2 Learning and Activity Data">
                <Paragraph content="As you use the App, the following data is generated and stored to power your learning experience:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Lesson completion records — which lessons you have completed, your scores, and time spent per lesson.</li>
                    <li>Session performance data — accuracy and duration per learning session (reading, listening, speaking, writing, quiz, practice).</li>
                    <li>Streak data — your daily learning consistency, including current streak count, longest streak, and last activity date.</li>
                    <li>Vocabulary data — German words and phrases you have studied, including their part of speech and English meanings.</li>
                    <li>Learning progress — completion percentage across units and lesson types.</li>
                </ul>
                <Paragraph content="This data is first stored locally on your Android device in a SQLite database (offline-first), then synchronized to our secure backend servers when an internet connection is available." />
            </SubSection>

            <SubSection title="2.3 Speech and Audio Data">
                <Paragraph content="When you use the speech recognition features:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your device microphone captures audio of your spoken German.</li>
                    <li>This audio is transmitted over an encrypted (TLS) connection to our own speech processing infrastructure, which uses the Whisper open-source model. No audio is sent to third-party AI companies.</li>
                    <li>Audio is processed to evaluate pronunciation and generate feedback scores (similarity, pronunciation score, transcription).</li>
                    <li>Audio recordings are not permanently stored after the exercise is complete. Only the derived result data is retained as part of your lesson record.</li>
                    <li>Audio data is never used for advertising, voice profiling, or any purpose other than delivering the learning exercise.</li>
                </ul>
            </SubSection>

            <SubSection title="2.4 Technical and Device Data">
                <Paragraph content="We may collect limited technical data through our own infrastructure, including:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Device operating system version and app version — for compatibility and debugging.</li>
                    <li>Error and crash logs — to identify and resolve technical issues.</li>
                </ul>
            </SubSection>

            <SubSection title="2.5 Information We Do Not Collect">
                <Paragraph content="Langphy does not collect:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Precise geolocation or GPS data.</li>
                    <li>Your device contacts, call logs, or messages.</li>
                    <li>Biometric data (speech audio is transient and not retained).</li>
                    <li>Payment information (the App is currently free of charge).</li>
                    <li>Browsing history or data from other apps on your device.</li>
                    <li>Advertising identifiers.</li>
                </ul>
            </SubSection>
        </Section>

        {/* Section 3 */}
        <Section title="3. How We Use Your Information">
            <Paragraph content="We use the information collected solely for the following purposes:" />
            <ul className="list-disc pl-6 space-y-1">
                <li>Account creation and authentication — to create, manage, and secure your account.</li>
                <li>Email verification — to verify your identity during registration via one-time passcode.</li>
                <li>Learning personalisation — to track progress, maintain streaks, adapt content to your history, and provide performance feedback.</li>
                <li>Speech assessment — to evaluate pronunciation and provide real-time exercise feedback.</li>
                <li>Application improvement — to identify bugs, monitor performance, and improve content and user experience.</li>
                <li>Transactional communications — to send account-related emails such as OTP codes and password reset instructions. We do not send unsolicited marketing emails.</li>
            </ul>
        </Section>

        {/* Section 4 */}
        <Section title="4. Legal Basis for Processing (GDPR)">
            <Paragraph content="For users in the EEA or UK, we process personal data under the following GDPR legal bases:" />
            <ul className="list-disc pl-6 space-y-1">
                <li>Contract performance (Art. 6(1)(b)): Processing necessary to create and manage your account and deliver the service.</li>
                <li>Legitimate interests (Art. 6(1)(f)): Processing for application security, fraud prevention, and internal performance monitoring.</li>
                <li>Consent (Art. 6(1)(a)): Processing of microphone/audio data for speech exercises, which you can withdraw at any time via your device settings.</li>
            </ul>
        </Section>

        {/* Section 5 */}
        <Section title="5. Data Storage, Retention, and Security">
            <SubSection title="5.1 Where Data Is Stored">
                <ul className="list-disc pl-6 space-y-1">
                    <li>On your device: Lesson data, progress, settings, vocabulary, and event queues are stored in a local SQLite database. This enables offline access.</li>
                    <li>On our servers: Account information and synchronized learning data are stored in PostgreSQL databases on a Kubernetes-managed cloud infrastructure. All data is encrypted in transit (TLS) and encrypted at rest.</li>
                </ul>
            </SubSection>

            <SubSection title="5.2 How Long We Keep Your Data">
                <ul className="list-disc pl-6 space-y-1">
                    <li>Account data (email, profile): Retained until you delete your account.</li>
                    <li>Learning data (progress, streaks, performance, and vocabulary): Retained until you delete your account.</li>
                    <li>Speech audio: Not retained — discarded immediately after processing.</li>
                    <li>OTP verification codes: Deleted immediately after use or after a 10-minute expiry.</li>
                    <li>Inactive accounts: We may delete accounts inactive for an extended period with reasonable prior notice.</li>
                </ul>
            </SubSection>

            <SubSection title="5.3 Security Measures">
                <Paragraph content="We implement the following protections:" />
                <ul className="list-disc pl-6 space-y-1">
                    <li>Passwords are hashed using a secure one-way algorithm before storage.</li>
                    <li>All client-server communication is encrypted using TLS.</li>
                    <li>Database access is restricted through role-based access controls.</li>
                    <li>Our event-driven backend architecture includes idempotency controls to prevent duplicate data writes.</li>
                    <li>Kafka message queues include deduplication guards to ensure data integrity.</li>
                </ul>
                <Paragraph content="No system is entirely immune to security threats. We encourage you to use a strong, unique password and to contact us immediately at support@langphy.com if you believe your account has been compromised." />
            </SubSection>
        </Section>

        {/* Section 6 */}
        <Section title="6. Data Sharing and Disclosure">
            <Paragraph content="We do not sell, rent, trade, or share your personal data with third parties for commercial or marketing purposes. Data is shared only in the following limited circumstances:" />
            <ul className="list-disc pl-6 space-y-1">
                <li>Infrastructure providers: Our hosting providers may process data as part of delivering the underlying technical service. They are contractually restricted from using your data for their own purposes.</li>
                <li>Email delivery (Resend): Your email address is shared with our email delivery provider solely to send you transactional emails such as OTP codes and account notifications.</li>
                <li>Legal obligations: We may disclose data if required by law, court order, or legitimate governmental authority.</li>
                <li>Business transfer: In the event of a merger or acquisition, data may transfer as part of that transaction, with prior notice to you.</li>
            </ul>
        </Section>

        {/* Section 7 */}
        <Section title="7. Future Paid Features and Billing">
            <Paragraph content="Langphy is currently free. When we introduce optional paid membership features, any payment processing will be handled entirely by the Google Play Store's billing infrastructure. We will not directly collect or store your payment card information. Any data collected in connection with a subscription will be governed by a supplementary privacy notice presented at the time of subscription." />
        </Section>

        {/* Section 8 */}
        <Section title="8. Cookies and Local Storage">
            <Paragraph content="Langphy uses local device storage (SQLite) to store your learning data for offline functionality. This is essential to the core functionality of the App and cannot be disabled independently without uninstalling the application. This is not browser-based cookie tracking; it is a technical requirement of the offline-first architecture." />
        </Section>

        {/* Section 9 */}
        <Section title="9. Children's Privacy">
            <Paragraph content="Langphy is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has created an account without your consent, please contact us at support@langphy.com and we will promptly delete the information." />
        </Section>

        {/* Section 10 */}
        <Section title="10. Your Rights and Choices">
            <Paragraph content="Regardless of your location, you have the following rights:" />
            <ul className="list-disc pl-6 space-y-1">
                <li>Access: Request a copy of the personal data we hold about you.</li>
                <li>Correction: Correct inaccurate data through your in-app profile settings or by contacting us.</li>
                <li>Deletion: Request deletion of your account and all associated data from in-app without emailing us at support@langphy.com.</li>
                <li>Data portability: Request a copy of your learning data in a structured format.</li>
                <li>Withdraw consent: Revoke microphone access at any time through Android system settings.</li>
            </ul>
            <Paragraph content="Users in the EEA or UK additionally have the right to object to processing, restrict processing, and lodge a complaint with their national data protection authority. We will respond to rights requests within 30 days." />
        </Section>

        {/* Section 11 */}
        <Section title="11. Additional Rights for EEA and UK Users">
            <Paragraph content="" />
            <ul className="list-disc pl-6 space-y-1">
                <li>Object to processing</li>
                <li>Restrict processing</li>
                <li>Lodge complaints with authorities</li>
            </ul>
        </Section>

        {/* Section 12 */}
        <Section title="12. International Data Transfers">
            <Paragraph content="Our backend infrastructure may be hosted on servers located in different countries. Where data is transferred internationally, we take steps to ensure it is protected to a standard equivalent to that required under applicable data protection laws." />
        </Section>

        {/* Section 13 */}
        <Section title="13. Changes to This Privacy Policy">
            <Paragraph content="We may update this Privacy Policy over time, including when we introduce paid features or change our data practices. We will update the effective date and provide reasonable notice of material changes through the application or by email. Continued use of the App after changes constitutes acceptance of the updated policy." />
        </Section>

        {/* Section-14 ============================================= */}
        <Section title="14. Contact" className="w-full">
            <Paragraph content="For privacy-related questions, requests, or concerns:"/>
            <ContactDetails />
        </Section>
        
        <Section>
            <span className="flex uppercase italic text-grey-500 my-10 text-center">
                Last reviewed: July 1, 2025. Langphy is an independent application not affiliated with any advertising network, language authority, or government body.
            </span>
        </Section>

    </Main>
);

export default PrivacyPolicyPage;