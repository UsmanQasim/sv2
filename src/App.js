import React, { useState } from "react";
import Main from "./components/pages/Main";
import SideNav from "./components/sidenav/SideNav";

const NotFound = () => {
  return <div>NotFound</div>;
};

const App = () => {
  const [selected, setSelected] = useState("menu");
  const showComponent = () => {
    switch (selected) {
      case "main":
        return <Main />;
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      <div className="megaContainer">
        <SideNav selected={selected} setSelected={setSelected} />
        {selected ? showComponent() : ""}
      </div>
    </>
  );
};

export default App;
