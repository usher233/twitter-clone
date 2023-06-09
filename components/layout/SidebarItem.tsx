import { IconType } from "react-icons";

interface SidebarItemProps {
    label: string;
    href: string;
    icon: IconType;
    onClick?: () => void;
}

const SidebarItem:React.FC<SidebarItemProps> = ({label,
                                                href,
                                                icon : Icon,
                                                onClick}) => {
    return ( 
        <div className="flex flex-row items-center ">
            <div className="relative hover:bg-slate-300 rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={28} color="white" />
            </div>
            <div className="hover:shadow-lg duration-200 hover:shadow-white/40 relative hidden lg:flex items-center transition gap-4 rounded-full p-4  cursor-pointer">
                <Icon size={24} color="white" />
                <p className="hidden lg:block text-white text-xl">
                    {label}
                </p>
            </div>
        </div>
     );
}
 
export default SidebarItem;