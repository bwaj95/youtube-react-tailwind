import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <div className=" flex flex-col ">
      <div className=" w-full  fixed bg-white z-10 bg-opacity-100 ">
        <Header />
      </div>

      <div className=" flex mt-16  ">
        <Sidebar />
        {/* MainContainer or WatchPage rendered acc. to path */}
        <Outlet />
      </div>
    </div>
  );
};
export default Body;
