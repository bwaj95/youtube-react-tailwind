import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiUserSquareThin } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);

  if (!isMenuOpen) return null;

  return (
    <div className=" p-5 shadow-lg w-48 hidden md:block ">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className=" cursor-pointer font-semibold text-black h-8 flex items-center px-3 py-1 rounded-lg  "
          >
            <GoHomeFill className="w-5 h-5 text-black mr-2" />
            Home
          </NavLink>
        </li>
        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <SiYoutubeshorts className="w-5 h-5 text-black mr-2" />
          Shorts
        </li>

        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <MdSubscriptions className="w-5 h-5 text-black mr-2" />
          Subscriptions
        </li>
      </ul>
      <div className="h-[1px] bg-gray-400 w-[90%] mx-auto my-1 "></div>

      <h1 className=" font-bold mt-5 ">You</h1>
      <ul>
        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <PiUserSquareThin className="w-5 h-5 text-black mr-2" />
          Your Channel
        </li>

        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <GoHistory className="w-5 h-5 text-black mr-2" />
          History
        </li>

        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <AiOutlinePlaySquare className="w-5 h-5 text-black mr-2" />
          You Videos
        </li>
      </ul>
      <div className="h-[1px] bg-gray-400 w-[90%] mx-auto my-1 "></div>

      <h1 className=" font-bold mt-5 ">Explore</h1>
      <ul>
        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <FaFireAlt className="w-5 h-5 text-black mr-2" />
          Trending
        </li>

        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <CgShoppingBag className="w-5 h-5 text-black mr-2" />
          Shopping
        </li>

        <li className=" font-semibold text-black h-8 flex  items-center px-3 py-1 ">
          <IoMusicalNotesOutline className="w-5 h-5 text-black mr-2" />
          Music
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
