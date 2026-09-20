import { useState } from "react";

const sectorData = {
  Retail: {
    icon: "🛍️",
    subtitle: "Sales, inventory and customer intelligence",
    menu: [
      ["📊", "Overview"],
      ["📈", "Performance"],
      ["👥", "Customers"],
      ["📦", "Inventory"],
      ["⚠️", "Alerts"],
    ],
  },

  Hospitality: {
    icon: "🏨",
    subtitle: "Bookings, guests and hotel intelligence",
    menu: [
      ["📊", "Overview"],
      ["📈", "Performance"],
      ["👥", "Guests"],
      ["🛏️", "Rooms"],
      ["⚠️", "Alerts"],
    ],
  },

  "Financial Services": {
    icon: "💳",
    subtitle: "Transactions, customers and financial intelligence",
    menu: [
      ["📊", "Overview"],
      ["📈", "Performance"],
      ["👥", "Customers"],
      ["💰", "Transactions"],
      ["⚠️", "Risk & Alerts"],
    ],
  },

  Entertainment: {
    icon: "🎬",
    subtitle: "Audience, bookings and entertainment insights",
    menu: [
      ["📊", "Overview"],
      ["📈", "Performance"],
      ["👥", "Audience"],
      ["🎟️", "Bookings"],
      ["⚠️", "Alerts"],
    ],
  },
};

function Dashboard() {

  const [sector, setSector] = useState("Retail");

  const current = sectorData[sector];

  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-box">S</div>

          <div>
            <h2>SectorSense</h2>
            <p>BUSINESS INTELLIGENCE</p>
          </div>
        </div>


        {/* CURRENT SECTOR */}
        <div className="active-sector">

          <small>ACTIVE SECTOR</small>

          <h3>
            {current.icon} {sector}
          </h3>

        </div>


        {/* SIDEBAR MENU */}
        <nav className="sidebar-menu">

          {current.menu.map(([icon, name]) => (

            <button
              key={name}
              className={name === "Overview" ? "active" : ""}
            >
              <span>{icon}</span>
              {name}
            </button>

          ))}

        </nav>


        {/* LOGOUT */}
        <button className="logout">
          🚪 Logout
        </button>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">

        <div className="top-section">

          <div>

            <p className="eyebrow">
              BUSINESS INTELLIGENCE
            </p>

            <h1>
              {sector} Dashboard
            </h1>

            <p className="subtitle">
              {current.subtitle}
            </p>

          </div>


          {/* SECTOR SWITCHER */}
          <div className="sector-switch">

            <label>
              SWITCH SECTOR
            </label>

            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >

              <option value="Retail">
                🛍️ Retail
              </option>

              <option value="Hospitality">
                🏨 Hospitality
              </option>

              <option value="Financial Services">
                💳 Financial Services
              </option>

              <option value="Entertainment">
                🎬 Entertainment
              </option>

            </select>

          </div>

        </div>


        {/* ================= KPI CARDS ================= */}
        <div className="cards">

          <div className="card">
            <span>
              {sector === "Entertainment"
                ? "Revenue"
                : sector === "Hospitality"
                ? "Revenue"
                : sector === "Financial Services"
                ? "Assets"
                : "Sales"}
            </span>

            <strong>₹1,95,000</strong>

            <small>Current period</small>
          </div>


          <div className="card">
            <span>
              {sector === "Entertainment"
                ? "Viewers"
                : sector === "Hospitality"
                ? "Guests"
                : sector === "Financial Services"
                ? "Customers"
                : "Customers"}
            </span>

            <strong>3,200</strong>

            <small>Current period</small>
          </div>


          <div className="card">

            <span>
              {sector === "Entertainment"
                ? "Bookings"
                : sector === "Hospitality"
                ? "Bookings"
                : sector === "Financial Services"
                ? "Transactions"
                : "Orders"}
            </span>

            <strong>1,480</strong>

            <small>Current period</small>

          </div>


          <div className="card">

            <span>
              {sector === "Financial Services"
                ? "Risk Alerts"
                : "Alerts"}
            </span>

            <strong>35</strong>

            <small>Current period</small>

          </div>

        </div>


        {/* ================= ANALYSIS ================= */}
        <div className="analysis-grid">

          <div className="analysis-card">

            <p className="eyebrow">
              DATA INPUT
            </p>

            <h2>
              Analyze Your Business
            </h2>

            <p>
              Enter your current {sector.toLowerCase()} data
              to generate meaningful insights.
            </p>


            <div className="input-grid">

              <div>
                <label>
                  {sector === "Entertainment"
                    ? "Total Revenue"
                    : sector === "Financial Services"
                    ? "Total Assets"
                    : "Total Revenue"}
                </label>

                <input
                  type="number"
                  defaultValue="195000"
                />
              </div>


              <div>
                <label>
                  {sector === "Entertainment"
                    ? "Viewers"
                    : sector === "Hospitality"
                    ? "Guests"
                    : "Customers"}
                </label>

                <input
                  type="number"
                  defaultValue="3200"
                />
              </div>


              <div>
                <label>
                  {sector === "Entertainment"
                    ? "Bookings"
                    : sector === "Hospitality"
                    ? "Bookings"
                    : sector === "Financial Services"
                    ? "Transactions"
                    : "Orders"}
                </label>

                <input
                  type="number"
                  defaultValue="1480"
                />
              </div>


              <div>
                <label>
                  {sector === "Retail"
                    ? "Available Inventory"
                    : sector === "Hospitality"
                    ? "Available Rooms"
                    : sector === "Financial Services"
                    ? "Active Accounts"
                    : "Available Seats"}
                </label>

                <input
                  type="number"
                  defaultValue="5000"
                />
              </div>

            </div>


            <button className="analyze-btn">
              Analyze Business →
            </button>

          </div>


          {/* RESULT */}
          <div className="result-card">

            <p className="eyebrow">
              BUSINESS INSIGHT
            </p>

            <h2>
              {sector} Result
            </h2>

            <div className="result-content">

              <div className="result-icon">
                ✦
              </div>

              <h3>
                Ready to analyze
              </h3>

              <p>
                Enter your {sector.toLowerCase()} information
                and click <b>Analyze Business</b> to generate
                insights.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;