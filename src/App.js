import { useState } from "react";
import { SidebarContext } from "./SidebarContext";
import Navigation from "./Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </SidebarContext.Provider>
  );
}

export default App;
