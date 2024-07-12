import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";

function App() {
  return (
    <div className="pt-14 lg:pt-8">
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
