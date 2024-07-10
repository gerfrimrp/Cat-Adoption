import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfileForm from "./pages/UserProfileForm";
import MainLayout from "./Layout/MainLayout";
import CatRecommend from "./pages/CatRecommend";

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  token ? redirect("/") : null;
};

const isNotLoggedIn = () => {
  const token = localStorage.getItem("token");
  !token ? redirect("/login") : null;
};

export const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/fill-user-profile", element: <UserProfileForm /> },
      { path: "/cat-breeds", element: <CatRecommend /> },
    ],
  },
]);
