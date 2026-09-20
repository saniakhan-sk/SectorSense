import React from "react";

const sectorData = {
  Retail: {
    icon: "🛍️",
    menus: [
      ["📊", "Overview"],
      ["📈", "Sales"],
      ["👥", "Customers"],
      ["📦", "Inventory"],
      ["⚠️", "Alerts"],
    ],
  },

  Hospitality: {
    icon: "🏨",
    menus: [
      ["📊", "Overview"],
      ["🛏️", "Bookings"],
      ["👥", "Guests"],
      ["⭐", "Services"],
      ["⚠️", "Alerts"],
    ],
  },

  Finance: {
    icon: "💳",
    menus: [
      ["📊", "Overview"],
      ["💰", "Transactions"],
      ["👥", "Customers"],
      ["📈", "Investments"],
      ["⚠️", "Alerts"],
    ],
  },

  Entertainment: {
    icon: "🎬",
    menus: [
      ["📊", "Overview"],
      ["🎟️", "Bookings"],
      ["👥", "Audience"],
      ["🎥", "Content"],
      ["⚠️", "Alerts"],
    ],
  },
};

function Sidebar({ sector, setPage }) {
  const data = sectorData[sector] || sectorData.Retail;

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="logo">
        <div className="logo-box">S</div>

        <div>
          <h2>SectorSense</h2>
          <p>BUSINESS INTELLIGENCE</p>
        </div>
      </div>

      {/* CURRENT SECTOR */}
      <div className="active-sector">
        <span>ACTIVE SECTOR</span>

        <h3>
          {data.icon} {sector}
        </h3>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">

        {data.menus.map(([icon, name]) => (
          <button
            key={name}
            onClick={() => setPage(name)}
          >
            <span>{icon}</span>
            {name}
          </button>
        ))}

      </nav>

      {/* LOGOUT */}
      <button
        className="logout-btn"
        onClick={() => window.location.reload()}
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default Sidebar;