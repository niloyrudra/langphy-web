import React from 'react'

const ContentTitle = ({title, invert=false}: {title: string, invert?: boolean}) => (
    <h3 className={`font-poppins font-semibold ${ invert ? "text-white" : "text-[#142C57]"} text-xl`}>{title}</h3>
);

export default ContentTitle;