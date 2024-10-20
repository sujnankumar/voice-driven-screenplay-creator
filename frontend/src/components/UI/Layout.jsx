import { Outlet, Link } from "react-router-dom";
import NavBar from "../Navigation/NavBar/NavBar";
import SideBar from "../Navigation/Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
