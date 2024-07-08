import { Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
