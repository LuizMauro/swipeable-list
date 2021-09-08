import Global from "./styles/global";
import ListUser from "./pages/ListUser";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Global />
      <ListUser />
    </>
  );
}
