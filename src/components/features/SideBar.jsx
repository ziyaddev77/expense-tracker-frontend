import { LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { APP_CONFIG } from "../../config/app";
import { NAV_LINKS } from "../../config/NavLinks";

function SideBar() {
  return (
    <aside className="w-full h-full">
      <div className="p-6">
        <Link to={"/"} className="color-text-main font-bold text-2xl">
          {APP_CONFIG.name}    
        </Link>
      </div>
      <div className="h-full relative flex flex-col justify-between">
        <nav className="py-5 px-2 space-y-1 mt-4">
          {NAV_LINKS.map(({ label, Icon }, index) => (
            <NavLink
              key={index}
              to={`/${label}`}
              className={({ isActive }) =>
                `${isActive ? "bg-[#F3F4F5] color-text-main border-r-3 border-green-900 " : "bg-white text-gray-500 hover:bg-[#F3F4F5]"} capitalize font-semibold flex gap-2 py-3 pl-4 rounded`
              }
              end
            >
              <Icon />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="text-sm py-3 border-t border-gray-400/80 hover:text-black absolute bottom-20 left-0 right-0 text-center text-gray-700 my-auto">
          <span className="inline-block cursor-pointer hover:text-black">
            <LogOut size={19} className="inline-block mr-2" /> Sign Out
          </span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
