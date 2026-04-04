import React from 'react'

const Anchor = ({name, route, onClick}: {name: string, route: string, onClick?: () => void}) => (
    <a
        href={route}
        onClick={onClick}
        className="text-[#142C57] text-sm uppercase hover:underline"
    >
        {name}
    </a>
);


export default Anchor