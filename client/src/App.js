import NavBar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <NavBar />
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        id="create-account"
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;

