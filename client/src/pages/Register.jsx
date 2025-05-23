import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utilities/axios";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        const googleToken = response.credential;
        // console.log(googleToken);
        try {
          const { data } = await axios.post("/new/login/google", {
            googleToken,
          });
          // console.log(data);
          localStorage.setItem("token", data.access_token);
          navigate("/");
        } catch (err) {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: err.response?.data.message || err.message,
          });
        }
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "medium" }
    );
    // window.google.accounts.id.prompt(); // also display the One Tap dialog
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/register", newUser);
      console.log(data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: err.response?.data.message || err.message,
      });
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };
  return (
    <section className="bg-gray-50 dark:bg-light-foutext-light-fourth">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-light-first rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-light-fourth md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-light-fourth dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="userName"
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-light-fourth text-sm rounded-lg focus:ring-light-bg-light-third focus:border-light-bg-light-third block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Username"
                  required=""
                  value={newUser.userName}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-light-fourth dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-light-fourth text-sm rounded-lg focus:ring-light-bg-light-third focus:border-light-bg-light-third block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email"
                  required=""
                  value={newUser.email}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-light-fourth dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-light-fourth text-sm rounded-lg focus:ring-light-bg-light-third focus:border-light-bg-light-third block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={newUser.password}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-light-fourth dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-light-fourth text-sm rounded-lg focus:ring-light-bg-light-third focus:border-light-bg-light-third block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={newUser.confirmPassword}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex w-full flex-col gap-5 items-center justify-between">
                {" "}
                <button
                  type="submit"
                  className="w-full text-white bg-light-third hover:bg-light-fourth focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-light-third dark:hover:bg-light-fourth dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div id="buttonDiv"></div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
