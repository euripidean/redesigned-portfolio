import "./App.css";
// import Navigation from "./Components/Navigation/Navigation";
// import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
