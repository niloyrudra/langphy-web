export default function CTAButton({title, href}: {title: string, href: string}) {
    return (
        <a
            href={href}
            className="mt-4 inline-flex items-center rounded-full bg-linear-to-br from-[#48E4EF] to-[#1B7CF5] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-zinc-700"
        >
            {title}
        </a>
    )
}