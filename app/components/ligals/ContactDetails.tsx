import Link from "next/link";

const ContactDetails = () => (
    <ul className="list-none space-y-2">
        <li>Development: <Link className="font-bold underline text-[#142C57] italic" href="https://www.linkedin.com/in/niloy-rudra-dev/" target="_blank">Niloy Rudra</Link></li>
        <li>Design: <Link className="font-bold underline text-[#142C57] italic" href="https://www.linkedin.com/in/kheya-nandi/" target="_blank">Kheya Nandi</Link></li>
        <li>Email: <Link className="font-bold underline text-[#142C57] italic" href="mailto:support@langphy.com" target="_blank">support@langphy.com</Link></li>
        <li>Website: <Link className="font-bold underline text-[#142C57] italic" href="https://langphy.com/" target="_blank">langphy.com</Link></li>
    </ul>
);

export default ContactDetails;