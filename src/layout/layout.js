import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const LayoutDashboard = ({ children }) => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <>
      <div>
        <Sidebar active={active} />
        <Header active={active} setActive={setActive} />
        <main
          style={{ backgroundColor: "#f6f8fa" }}
          className={
            active ? "content_active page-content p-5 mt-5" : "page-content p-5 mt-5 content"
          }
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutDashboard;
