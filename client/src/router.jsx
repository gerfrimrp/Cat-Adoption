import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfileForm from "./pages/UserProfileForm";
import MainLayout from "./Layout/MainLayout";

export const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/fill-user-profile", element: <UserProfileForm /> },
    ],
  },
]);
