import { IoHomeOutline } from "react-icons/io5";
import { GrCycle } from "react-icons/gr";
import { Link } from "@remix-run/react";
import { IoExitOutline } from "react-icons/io5";

function SideNav() {
  return (
    <div className="h-screen bg-slate-200 flex flex-col w-[15rem] items-center">
      <img
        src="https://images-platform.99static.com/amnTYMN8gJNacRpB8gqwRYQb6fU=/100x100:900x900/500x500/top/smart/99designs-contests-attachments/87/87541/attachment_87541903"
        alt="logo"
        className="w-[8rem] h-[8rem] rounded-full mt-5 hover:w-[10rem] hover:h-[10rem] transition-all cursor-pointer"
      />

      <Link
        to="/"
        className="flex bg-white mt-20 text-cyan-600 font-medium w-[10rem] py-2 items-center justify-center rounded-md gap-2 transition-all hover:bg-cyan-500 hover:text-white"
      >
        <IoHomeOutline />
        Home
      </Link>
      <Link
        to="/habits"
        className="flex bg-white mt-5 text-cyan-600 font-medium w-[10rem] py-2 items-center justify-center rounded-md gap-2 transition-all hover:bg-cyan-500 hover:text-white"
      >
        <GrCycle />
        Habits
      </Link>

      <Link
        to="/auth"
        className="flex bg-white mt-48 text-cyan-600 font-medium w-[10rem] py-2 items-center justify-center rounded-md gap-2 transition-all hover:bg-cyan-500 hover:text-white"
      >
        <IoExitOutline />
        Logout
      </Link>
    </div>
  );
}

export default SideNav;
