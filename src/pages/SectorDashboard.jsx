import { useParams } from "react-router-dom";
import "./SectorDashboard.css";

const sectorData = {
  retail: {
    name: "Retail",
    icon: "🛍️",
    description: "Monitor sales, inventory and customer performance.",
    cards: [
      ["💰", "Revenue", "₹5.91L", "+15.4%"],
      ["🛒", "Orders", "3,486", "+12.4%"],
      ["📦", "Inventory", "1,248", "Healthy"],
      ["👥", "Customers", "2,847", "+8.6%"],
    ],
  },

  hospitality: {
    name: "Hospitality",
    icon: "🏨",
    description: "Monitor rooms, bookings, guests and hotel revenue.",
    cards: [
      ["🛏️", "Occupancy", "82%", "+6.2%"],
      ["📅", "Bookings", "1,248", "+11.8%"],
      ["💰", "Revenue", "₹8.42L", "+14.2%"],
      ["👥", "Guests", "3,642", "+9.5%"],
    ],
  },

  finance: {
    name: "Financial Services",
    icon: "💰",
    description: "Monitor transactions, accounts, customers and risk.",
    cards: [
      ["💳", "Transactions", "18,642", "+18.5%"],
      ["🏦", "Accounts", "8,426", "+7.8%"],
      ["💰", "Revenue", "₹12.8L", "+13.2%"],
      ["⚠️", "Risk Alerts", "24", "Needs Review"],
    ],
  },

  entertainment: {
    name: "Entertainment",
    icon: "🎬",
    description: "Monitor events, tickets, audience and revenue.",
    cards: [
      ["🎟️", "Tickets Sold", "12,486", "+21.4%"],
      ["🎭", "Events", "86", "+9.8%"],
      ["💰", "Revenue", "₹6.73L", "+18.2%"],
      ["👥", "Audience", "24,850", "+16.7%"],
    ],
  },
};

const sectionNames = {
  overview: "Overview",
  sales: "Sales",
  inventory: "Inventory",
  customers: "Customers",
  analytics: "Analytics",
  alerts: "Alerts",
  settings: "Settings",
};

function SectorDashboard() {
  const { sector, section = "overview" } = useParams();

  const data = sectorData[sector] || sectorData.retail;

  const currentSection =
    sectionNames[section] || "Overview";

  return (
    <div className="sector-dashboard">

      {/* HEADER */}

      <div className="sector-header">

        <div>

          <div className="sector-title">
            <span>{data.icon}</span>

            <div>
              <h1>{data.name}</h1>

              <p>
                {data.description}
              </p>
            </div>
          </div>

        </div>

        <button className="date-button">
          📅 Last 30 Days
        </button>

      </div>


      {/* PAGE TITLE */}

      <div className="sector-page-heading">

        <h2>
          {currentSection}
        </h2>

        <p>
          {getDescription(section)}
        </p>

      </div>


      {/* CONTENT */}

      {renderSection(section, data)}

    </div>
  );
}


/* =====================================
   SECTION DESCRIPTION
===================================== */

function getDescription(section) {

  switch (section) {

    case "sales":
      return "Track revenue, transactions and sales performance.";

    case "inventory":
      return "Monitor stock levels and product availability.";

    case "customers":
      return "Understand customers and engagement.";

    case "analytics":
      return "Analyze business performance and trends.";

    case "alerts":
      return "Review important notifications and actions.";

    case "settings":
      return "Manage your dashboard preferences.";

    default:
      return "Key performance indicators and business insights.";
  }
}


/* =====================================
   SECTION CONTENT
===================================== */

function renderSection(section, data) {

  switch (section) {

    case "sales":
      return <SalesSection />;

    case "inventory":
      return <InventorySection />;

    case "customers":
      return <CustomersSection />;

    case "analytics":
      return <AnalyticsSection />;

    case "alerts":
      return <AlertsSection />;

    case "settings":
      return <SettingsSection />;

    default:
      return <OverviewSection data={data} />;
  }
}


/* =====================================
   OVERVIEW
===================================== */

function OverviewSection({ data }) {

  return (
    <>
      <div className="sector-cards">

        {data.cards.map((card) => (

          <div
            className="sector-card"
            key={card[1]}
          >

            <div className="sector-card-icon">
              {card[0]}
            </div>

            <p>{card[1]}</p>

            <h3>{card[2]}</h3>

            <span>{card[3]}</span>

          </div>

        ))}

      </div>


      <div className="sector-content-grid">

        <div className="sector-panel">

          <div className="panel-header">

            <div>
              <h3>Performance</h3>

              <p>
                Business activity over the last 7 days
              </p>
            </div>

            <span className="healthy-badge">
              ● Healthy
            </span>

          </div>


          <div className="performance-chart">

            {[45, 60, 52, 72, 65, 82, 94].map(
              (height, index) => (

                <div
                  className="chart-column"
                  key={index}
                >

                  <div
                    className="chart-bar"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span>
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </span>

                </div>

              )
            )}

          </div>

        </div>


        <div className="sector-panel">

          <div className="panel-header">

            <div>
              <h3>Key Metrics</h3>

              <p>
                Current business statistics
              </p>
            </div>

          </div>


          <div className="metrics-list">

            {data.cards.map((card) => (

              <div
                className="metric-row"
                key={card[1]}
              >

                <span>{card[1]}</span>

                <strong>{card[2]}</strong>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}


/* =====================================
   SALES
===================================== */

function SalesSection() {

  return (
    <>

      <div className="info-grid">

        <InfoCard
          title="Today's Sales"
          value="₹42,850"
          text="↑ 12.5% from yesterday"
        />

        <InfoCard
          title="Monthly Sales"
          value="₹5.91L"
          text="↑ 15.4% this month"
        />

        <InfoCard
          title="Transactions"
          value="3,486"
          text="↑ 8.7% this month"
        />

      </div>


      <div className="table-card">

        <h3>Recent Sales</h3>

        <div className="simple-table">

          <div className="table-header">
            <span>Activity</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          <TableRow
            name="Premium Product"
            value="₹4,999"
            status="Completed"
          />

          <TableRow
            name="Standard Product"
            value="₹2,499"
            status="Completed"
          />

          <TableRow
            name="New Order"
            value="₹1,899"
            status="Pending"
          />

        </div>

      </div>

    </>
  );
}


/* =====================================
   INVENTORY
===================================== */

function InventorySection() {

  return (
    <>

      <div className="info-grid">

        <InfoCard
          title="Total Items"
          value="1,248"
          text="All available items"
        />

        <InfoCard
          title="Low Stock"
          value="32"
          text="Needs attention"
        />

        <InfoCard
          title="Out of Stock"
          value="8"
          text="Restock required"
        />

      </div>


      <div className="table-card">

        <h3>Inventory Status</h3>

        <div className="simple-table">

          <div className="table-header">
            <span>Product</span>
            <span>Stock</span>
            <span>Status</span>
          </div>

          <TableRow
            name="Premium Product"
            value="245"
            status="Healthy"
          />

          <TableRow
            name="Smart Device"
            value="24"
            status="Low Stock"
          />

          <TableRow
            name="Wireless Speaker"
            value="0"
            status="Out of Stock"
          />

        </div>

      </div>

    </>
  );
}


/* =====================================
   CUSTOMERS
===================================== */

function CustomersSection() {

  return (
    <>

      <div className="info-grid">

        <InfoCard
          title="Total Customers"
          value="2,847"
          text="↑ 8.6% this month"
        />

        <InfoCard
          title="New Customers"
          value="426"
          text="↑ 12.2% this month"
        />

        <InfoCard
          title="Returning Customers"
          value="1,892"
          text="66.4% retention"
        />

      </div>


      <div className="table-card">

        <h3>Recent Customers</h3>

        <div className="simple-table">

          <div className="table-header">
            <span>Customer</span>
            <span>Orders</span>
            <span>Value</span>
          </div>

          <TableRow
            name="Customer 001"
            value="12 orders"
            status="₹24,500"
          />

          <TableRow
            name="Customer 002"
            value="8 orders"
            status="₹18,200"
          />

          <TableRow
            name="Customer 003"
            value="5 orders"
            status="₹9,800"
          />

        </div>

      </div>

    </>
  );
}


/* =====================================
   ANALYTICS
===================================== */

function AnalyticsSection() {

  return (
    <div className="analytics-grid">

      <AnalyticsCard
        title="Growth Rate"
        value="15.4%"
        width="76%"
      />

      <AnalyticsCard
        title="Customer Growth"
        value="8.6%"
        width="62%"
      />

      <AnalyticsCard
        title="Overall Performance"
        value="92%"
        width="92%"
      />

    </div>
  );
}


/* =====================================
   ALERTS
===================================== */

function AlertsSection() {

  return (
    <div className="alert-list">

      <div className="dashboard-alert warning-alert">

        <span>⚠️</span>

        <div>
          <strong>Low Stock Alert</strong>

          <p>
            Some items are running low on stock.
          </p>
        </div>

      </div>


      <div className="dashboard-alert danger-alert">

        <span>🚨</span>

        <div>
          <strong>Action Required</strong>

          <p>
            8 items are currently out of stock.
          </p>
        </div>

      </div>


      <div className="dashboard-alert success-alert">

        <span>✅</span>

        <div>
          <strong>System Healthy</strong>

          <p>
            All major systems are operating normally.
          </p>
        </div>

      </div>

    </div>
  );
}


/* =====================================
   SETTINGS
===================================== */

function SettingsSection() {

  return (
    <div className="settings-card">

      <Setting
        title="Notifications"
        text="Receive important business alerts."
      />

      <Setting
        title="Automatic Reports"
        text="Generate weekly performance reports."
      />

      <Setting
        title="Automatic Data Updates"
        text="Keep dashboard data updated automatically."
      />

    </div>
  );
}


/* =====================================
   SMALL COMPONENTS
===================================== */

function InfoCard({ title, value, text }) {

  return (
    <div className="info-card">

      <span>{title}</span>

      <strong>{value}</strong>

      <small>{text}</small>

    </div>
  );
}


function TableRow({ name, value, status }) {

  return (
    <div className="table-row">

      <strong>{name}</strong>

      <span>{value}</span>

      <b>{status}</b>

    </div>
  );
}


function AnalyticsCard({ title, value, width }) {

  return (
    <div className="analytics-card">

      <span>{title}</span>

      <strong>{value}</strong>

      <div className="progress">

        <div
          style={{
            width,
          }}
        />

      </div>

    </div>
  );
}


function Setting({ title, text }) {

  return (
    <div className="setting-row">

      <div>

        <strong>{title}</strong>

        <p>{text}</p>

      </div>

      <input
        type="checkbox"
        defaultChecked
      />

    </div>
  );
}

export default SectorDashboard;