import { ReactNode } from "react";

const UlTag = ({children}: {children: ReactNode}) => (<ul className="flex flex-col gap-2 list-none w-auto lg:w-lg md:w-md sm:w-sm xs:w-xs">{children}</ul>);
export default UlTag;