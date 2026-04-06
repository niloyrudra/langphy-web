const Anchor = ({name, route, onClick, isActive=false}: {name: string, route: string, onClick?: () => void, isActive?: boolean}) => (
    <a
        href={route}
        onClick={onClick}
        className={`${ isActive ? "text-[#3FA1FF]" : "text-[#142C57]"} text-sm uppercase hover:underline`}
    >
        {name}
    </a>
);


export default Anchor;