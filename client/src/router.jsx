import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfileForm from "./components/UserProfileForm";
import MainLayout from "./Layout/MainLayout";
import Breeds from "./pages/Breeds";
import UserProfile from "./pages/UserProfile";
import CatForm from "./pages/CatForm";

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
      { path: "/user-profile", element: <UserProfile /> },
      { path: "/user-profile/edit", element: <UserProfileForm /> },
      { path: "/cats", element: <UserProfileForm /> },
      { path: "/create", element: <CatForm /> },
      { path: "/cat-breeds", element: <Breeds /> },
    ],
  },
]);
