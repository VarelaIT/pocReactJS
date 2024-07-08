import { Outlet } from "react-router-dom";
import "./styles/drawer.css";
import Tab from "./tab";

export default function Drawer({ tabList }) {
  return (
    <>
      <section>
        <div className="tab-header">
          {tabList.map((tab, i) => {
            return <Tab key={"tabs" + i} title={tab.title} link={tab.link} />;
          })}
        </div>
        <div className="drawer-container">
          <Outlet />
        </div>
      </section>
    </>
  );
}

