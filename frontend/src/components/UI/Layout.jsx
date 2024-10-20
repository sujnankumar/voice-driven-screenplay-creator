import { Outlet, Link } from "react-router-dom";
import NavBar from "../Navigation/NavBar/NavBar";
import SideBar from "../Navigation/NavBar/AsideNav";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="mt-12 relative overflow-y-scroll h-screen overflow-hidden w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
