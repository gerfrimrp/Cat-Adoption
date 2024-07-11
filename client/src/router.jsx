import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import Breeds from "./pages/Breeds";
import CatForm from "./pages/CatForm";
import UserCats from "./pages/UserCats";

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
      { path: "/cats", element: <UserCats /> },
      { path: "/create", element: <CatForm /> },
      { path: "/cat-breeds", element: <Breeds /> },
    ],
  },
]);
