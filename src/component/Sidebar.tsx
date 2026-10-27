
import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Nexus</h2>

      <nav>
        <NavLink
          to="/overview"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Overview
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Analytics
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Customers
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
