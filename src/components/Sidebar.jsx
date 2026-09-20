import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { sector } = useParams();

  const sectorData = {
    retail: {
      name: "Retail",
      icon: "🛍️",
    },

    hospitality: {
      name: "Hospitality",
      icon: "🏨",
    },

    finance: {
      name: "Financial Services",
      icon: "💰",
    },

    entertainment: {
      name: "Entertainment",
      icon: "🎬",
    },
  };

  const currentSector =
    sectorData[sector] || sectorData.retail;

  const menuItems = [
    {
      path: "overview",
      icon: "📊",
      label: "Overview",
    },
    {
      path: "sales",
      icon: "🛒",
      label: "Sales",
    },
    {
      path: "inventory",
      icon: "📦",
      label: "Inventory",
    },
    {
      path: "customers",
      icon: "👥",
      label: "Customers",
    },
    {
      path: "analytics",
      icon: "📈",
      label: "Analytics",
    },
    {
      path: "alerts",
      icon: "⚠️",
      label: "Alerts",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userSector");

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      {/* LOGO */}

      <div className="sidebar-logo">

        <div className="logo-box">
          S
        </div>

        <h2>
          SectorSense
        </h2>

      </div>


      {/* CURRENT SECTOR */}

      <div className="sector-box">

        <span className="sector-icon">
          {currentSector.icon}
        </span>

        <div>
          <small>Current Sector</small>

          <strong>
            {currentSector.name}
          </strong>
        </div>

      </div>


      {/* NAVIGATION */}

      <nav className="sidebar-nav">

        <p className="nav-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={`/dashboard/${sector}/${item.path}`}
            className={({ isActive }) =>
              `sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >

            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>

          </NavLink>

        ))}

      </nav>


      {/* BOTTOM */}

      <div className="sidebar-bottom">

        <NavLink
          to={`/dashboard/${sector}/settings`}
          className={({ isActive }) =>
            `sidebar-link ${
              isActive ? "active" : ""
            }`
          }
        >

          <span className="sidebar-icon">
            ⚙️
          </span>

          <span>
            Settings
          </span>

        </NavLink>


        <button
          className="sidebar-link logout-button"
          onClick={handleLogout}
        >

          <span className="sidebar-icon">
            🚪
          </span>

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;