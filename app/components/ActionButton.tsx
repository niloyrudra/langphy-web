export default function CTAButton({title, href, classes}: {title: string, href: string, classes?: string}) {
    return (
        <a
            href={href}
            className={`${classes ?? "mt-4 inline-flex items-center rounded-full bg-[#142C57] px-6 py-3 text-white font-medium text-sm transition-colors hover:bg-zinc-700"}`}
        >
            {title}
        </a>
    )
}