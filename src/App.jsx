
import { useState } from "react";
import "./App.css";

const sectorData = {
  Retail: {
    icon: "🛍️",
    title: "Retail Dashboard",
    description: "Sales, inventory and customer intelligence",

    kpis: [
      ["Revenue", "₹85,000"],
      ["Customers", "420"],
      ["Products", "680"],
      ["Low Stock", "12"],
    ],

    fields: [
      { label: "Total Sales", name: "sales", value: 85000 },
      { label: "Customers", name: "customers", value: 420 },
      { label: "Products", name: "products", value: 680 },
      { label: "Available Inventory", name: "inventory", value: 1250 },
      { label: "Low Stock Items", name: "alerts", value: 12 },
    ],

    analyze: (data) => {
      const average =
        data.customers > 0
          ? Math.round(data.sales / data.customers)
          : 0;

      if (data.alerts > 20) {
        return {
          status: "Attention Required",
          type: "negative",
          message:
            "Inventory risk is high. Consider restocking low-stock products.",
          metric: `₹${average.toLocaleString()}`,
          metricLabel: "Sales / Customer",
          recommendation:
            "Focus on inventory replenishment and monitor high-demand products.",
        };
      }

      if (data.alerts > 12) {
        return {
          status: "Warning",
          type: "warning",
          message:
            "Inventory levels need monitoring to avoid future stock shortages.",
          metric: `₹${average.toLocaleString()}`,
          metricLabel: "Sales / Customer",
          recommendation:
            "Monitor fast-moving products and plan inventory replenishment.",
        };
      }

      return {
        status: "Healthy",
        type: "positive",
        message:
          "Retail performance is stable with healthy customer activity.",
        metric: `₹${average.toLocaleString()}`,
        metricLabel: "Sales / Customer",
        recommendation:
          "Continue monitoring sales trends and maintain adequate inventory.",
      };
    },
  },

  Hospitality: {
    icon: "🏨",
    title: "Hospitality Dashboard",
    description: "Bookings, occupancy and guest intelligence",

    kpis: [
      ["Revenue", "₹1,45,000"],
      ["Guests", "380"],
      ["Bookings", "215"],
      ["Cancellations", "18"],
    ],

    fields: [
      { label: "Total Revenue", name: "sales", value: 145000 },
      { label: "Guests", name: "customers", value: 380 },
      { label: "Bookings", name: "products", value: 215 },
      { label: "Available Rooms", name: "inventory", value: 85 },
      { label: "Cancellations", name: "alerts", value: 18 },
    ],

    analyze: (data) => {
      const occupancy =
        data.inventory > 0
          ? Math.round((data.products / data.inventory) * 100)
          : 0;

      if (data.alerts > 30) {
        return {
          status: "High Cancellation Rate",
          type: "negative",
          message:
            "Guest cancellations are relatively high and may affect occupancy.",
          metric: `${occupancy}%`,
          metricLabel: "Booking Utilization",
          recommendation:
            "Review cancellation patterns and improve booking retention strategies.",
        };
      }

      if (data.alerts > 20) {
        return {
          status: "Warning",
          type: "warning",
          message:
            "Cancellation levels are increasing and should be monitored.",
          metric: `${occupancy}%`,
          metricLabel: "Booking Utilization",
          recommendation:
            "Analyze cancellation reasons and improve guest retention.",
        };
      }

      return {
        status: "Good Occupancy",
        type: "positive",
        message:
          "Guest activity and booking levels are showing healthy performance.",
        metric: `${occupancy}%`,
        metricLabel: "Booking Utilization",
        recommendation:
          "Maintain guest experience quality and monitor room utilization.",
      };
    },
  },

  "Financial Services": {
    icon: "💳",
    title: "Financial Services Dashboard",
    description: "Transactions, customers and financial risk",

    kpis: [
      ["Revenue", "₹2,80,000"],
      ["Customers", "1,240"],
      ["Transactions", "5,680"],
      ["Risk Alerts", "24"],
    ],

    fields: [
      { label: "Total Revenue", name: "sales", value: 280000 },
      { label: "Customers", name: "customers", value: 1240 },
      { label: "Transactions", name: "products", value: 5680 },
      { label: "Active Accounts", name: "inventory", value: 920 },
      { label: "Risk Alerts", name: "alerts", value: 24 },
    ],

    analyze: (data) => {
      const transactionsPerCustomer =
        data.customers > 0
          ? Math.round(data.products / data.customers)
          : 0;

      if (data.alerts > 50) {
        return {
          status: "Risk Monitoring Required",
          type: "negative",
          message:
            "The number of risk alerts is elevated and requires monitoring.",
          metric: transactionsPerCustomer,
          metricLabel: "Transactions / Customer",
          recommendation:
            "Review flagged transactions and strengthen risk monitoring.",
        };
      }

      if (data.alerts > 30) {
        return {
          status: "Warning",
          type: "warning",
          message:
            "Risk alerts are increasing and should be monitored closely.",
          metric: transactionsPerCustomer,
          metricLabel: "Transactions / Customer",
          recommendation:
            "Review unusual transactions and strengthen monitoring.",
        };
      }

      return {
        status: "Stable",
        type: "positive",
        message:
          "Transaction activity is stable with manageable risk indicators.",
        metric: transactionsPerCustomer,
        metricLabel: "Transactions / Customer",
        recommendation:
          "Continue monitoring transaction activity and account behavior.",
      };
    },
  },

  Entertainment: {
    icon: "🎬",
    title: "Entertainment Dashboard",
    description: "Audience, bookings and entertainment insights",

    kpis: [
      ["Revenue", "₹1,95,000"],
      ["Viewers", "3,200"],
      ["Bookings", "1,480"],
      ["Cancellations", "35"],
    ],

    fields: [
      { label: "Total Revenue", name: "sales", value: 195000 },
      { label: "Viewers", name: "customers", value: 3200 },
      { label: "Bookings", name: "products", value: 1480 },
      { label: "Available Seats", name: "inventory", value: 5000 },
      { label: "Cancellations", name: "alerts", value: 35 },
    ],

    analyze: (data) => {
      const bookingRate =
        data.inventory > 0
          ? Math.round((data.products / data.inventory) * 100)
          : 0;

      if (data.alerts > 50) {
        return {
          status: "Audience Attention Needed",
          type: "negative",
          message:
            "Cancellation levels are high and may affect audience engagement.",
          metric: `${bookingRate}%`,
          metricLabel: "Booking Rate",
          recommendation:
            "Analyze cancellation patterns and improve audience engagement.",
        };
      }

      if (data.alerts > 35) {
        return {
          status: "Warning",
          type: "warning",
          message:
            "Cancellation levels are increasing and require monitoring.",
          metric: `${bookingRate}%`,
          metricLabel: "Booking Rate",
          recommendation:
            "Analyze audience behavior and improve engagement strategies.",
        };
      }

      return {
        status: "Strong Audience Activity",
        type: "positive",
        message:
          "Audience engagement and booking activity are performing steadily.",
        metric: `${bookingRate}%`,
        metricLabel: "Booking Rate",
        recommendation:
          "Continue tracking audience behavior and optimize popular events.",
      };
    },
  },
};

/* ============================================================
   DEFAULT VALUES
============================================================ */

function getInitialSectorValues() {
  return Object.fromEntries(
    Object.entries(sectorData).map(([sectorName, sector]) => [
      sectorName,
      Object.fromEntries(
        sector.fields.map((field) => [
          field.name,
          field.value,
        ])
      ),
    ])
  );
}

function App() {
  /* ============================================================
     LOGIN
  ============================================================ */

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ============================================================
     CURRENT SECTOR
  ============================================================ */

  const [sector, setSector] = useState("Retail");

  /* ============================================================
     FORM VALUES
  ============================================================ */

  const [sectorValues, setSectorValues] = useState(
    getInitialSectorValues()
  );

  /* ============================================================
     ANALYZED VALUES
  ============================================================ */

  const [analyzedValues, setAnalyzedValues] = useState(
    getInitialSectorValues()
  );

  /* ============================================================
     RESULTS
  ============================================================ */

  const [sectorResults, setSectorResults] = useState({});

  /* ============================================================
     HISTORY
  ============================================================ */

  const [history, setHistory] = useState([]);

  /* ============================================================
     CURRENT DATA
  ============================================================ */

  const currentSector = sectorData[sector];

  const data = sectorValues[sector];

  const result = sectorResults[sector] || null;

  /* ============================================================
     STATUS HELPER
  ============================================================ */

  function getStatusType(result) {
    if (!result) return "";

    if (result.type) {
      return result.type;
    }

    const status =
      result.status.toLowerCase();

    if (
      status.includes("attention") ||
      status.includes("high") ||
      status.includes("risk") ||
      status.includes("required") ||
      status.includes("needed")
    ) {
      return "negative";
    }

    if (
      status.includes("warning") ||
      status.includes("moderate")
    ) {
      return "warning";
    }

    return "positive";
  }

  /* ============================================================
     LOGIN
  ============================================================ */

  function handleLogin(e) {
    e.preventDefault();

    if (
      email.trim() &&
      password.trim()
    ) {
      setLoggedIn(true);
    }
  }

  /* ============================================================
     INPUT CHANGE
  ============================================================ */

  function handleInputChange(e) {
    const { name, value } = e.target;

    setSectorValues((previousValues) => ({
      ...previousValues,

      [sector]: {
        ...previousValues[sector],

        [name]: Number(value),
      },
    }));
  }

  /* ============================================================
     SWITCH SECTOR
  ============================================================ */

  function handleSectorChange(e) {
    setSector(e.target.value);
  }

  /* ============================================================
     ANALYZE BUSINESS
  ============================================================ */

  function analyzeBusiness() {
    const analysis =
      currentSector.analyze(data);

    /* Save analyzed values */

    setAnalyzedValues(
      (previousValues) => ({
        ...previousValues,

        [sector]: {
          ...data,
        },
      })
    );

    /* Save result */

    setSectorResults(
      (previousResults) => ({
        ...previousResults,

        [sector]: analysis,
      })
    );

    /* Add history */

    const historyEntry = {
      id: Date.now(),

      sector,

      icon: currentSector.icon,

      timestamp:
        new Date().toLocaleString(),

      values: {
        ...data,
      },

      status: analysis.status,

      type: analysis.type,

      metric: analysis.metric,

      metricLabel:
        analysis.metricLabel,
    };

    setHistory(
      (previousHistory) => [
        historyEntry,
        ...previousHistory,
      ]
    );
  }

  /* ============================================================
     CLEAR HISTORY
  ============================================================ */

  function clearHistory() {
    setHistory([]);
  }

  /* ============================================================
     ANALYTICS DATA
  ============================================================ */

  const analyticsData =
    Object.fromEntries(
      Object.entries(sectorData).map(
        ([sectorName, sectorInfo]) => [
          sectorName,

          {
            ...sectorInfo,

            fields:
              sectorInfo.fields.map(
                (field) => ({
                  ...field,

                  value:
                    analyzedValues[
                      sectorName
                    ]?.[
                      field.name
                    ] ??
                    field.value,
                })
              ),
          },
        ]
      )
    );

  /* ============================================================
     LOGIN PAGE
  ============================================================ */

  if (!loggedIn) {
    return (
      <div className="login-page">

        <div className="login-left">

          <div className="brand">

            <div className="brand-logo">
              S
            </div>

            <div>
              <h2>
                SectorSense
              </h2>

              <p>
                SMART BUSINESS INTELLIGENCE
              </p>
            </div>

          </div>

          <div className="hero">

            <span className="eyebrow">
              BUSINESS INTELLIGENCE PLATFORM
            </span>

            <h1>
              One platform.
              <br />
              Four industries.
            </h1>

            <p>
              Turn your business data
              into meaningful insights,
              performance indicators
              and actionable decisions.
            </p>

            <div className="sector-preview">

              {Object.entries(
                sectorData
              ).map(
                ([name, item]) => (

                  <div
                    className="sector-item"
                    key={name}
                  >

                    <span>
                      {item.icon}
                    </span>

                    {name}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        <div className="login-right">

          <div className="login-card">

            <div className="login-icon">
              S
            </div>

            <span className="eyebrow">
              WELCOME BACK
            </span>

            <h2>
              Sign in to SectorSense
            </h2>

            <p className="login-subtitle">
              Access your business
              intelligence dashboard.
            </p>

            <form
              onSubmit={handleLogin}
            >

              <label>
                Email address
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />

              <button
                className="primary-button"
                type="submit"
              >
                Continue to Dashboard →
              </button>

            </form>

            <div className="login-footer">
              © 2026 SectorSense · Secure access
            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ============================================================
     DASHBOARD
  ============================================================ */

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="small-logo">
            S
          </div>

          <div>
            <h2>
              SectorSense
            </h2>

            <span>
              BUSINESS INTELLIGENCE
            </span>
          </div>

        </div>

        <div className="current-sector">

          <span>
            ACTIVE SECTOR
          </span>

          <strong>
            {currentSector.icon}{" "}
            {sector}
          </strong>

        </div>

        <nav>

          <button className="nav-item active">
            ▦ Overview
          </button>

          <button className="nav-item">
            ↗ Performance
          </button>

          <button className="nav-item">
            ♙ Customers
          </button>

          <button className="nav-item">
            ▣ Resources
          </button>

          <button className="nav-item">
            ⚠ Alerts
          </button>

        </nav>

        <button
          className="logout"
          onClick={() => {
            setLoggedIn(false);
            setEmail("");
            setPassword("");
          }}
        >
          ↪ Logout
        </button>

      </aside>

      {/* MAIN */}

      <main className="main">

        {/* HEADER */}

        <header className="topbar">

          <div>

            <span className="eyebrow">
              BUSINESS INTELLIGENCE
            </span>

            <h1>
              {currentSector.title}
            </h1>

            <p>
              {currentSector.description}
            </p>

          </div>

          <div className="sector-switch">

            <label>
              SWITCH SECTOR
            </label>

            <select
              value={sector}
              onChange={
                handleSectorChange
              }
            >

              {Object.keys(
                sectorData
              ).map(
                (name) => (

                  <option
                    key={name}
                    value={name}
                  >
                    {sectorData[name].icon}{" "}
                    {name}
                  </option>

                )
              )}

            </select>

          </div>

        </header>

        {/* ======================================================
            KPI CARDS
        ====================================================== */}

        <section className="stats">

          {currentSector.kpis.map(
            ([label, defaultValue]) => {

              let updatedValue =
                defaultValue;

              let kpiClass =
                "";

              /* Revenue */

              if (
                label ===
                "Revenue"
              ) {
                updatedValue =
                  `₹${analyzedValues[sector].sales.toLocaleString()}`;
              }

              /* Customers */

              if (
                label ===
                  "Customers" ||
                label ===
                  "Guests" ||
                label ===
                  "Viewers"
              ) {
                updatedValue =
                  analyzedValues[
                    sector
                  ].customers.toLocaleString();
              }

              /* Products */

              if (
                label ===
                  "Products" ||
                label ===
                  "Bookings" ||
                label ===
                  "Transactions"
              ) {
                updatedValue =
                  analyzedValues[
                    sector
                  ].products.toLocaleString();
              }

              /* Alerts */

              if (
                label ===
                  "Low Stock" ||
                label ===
                  "Cancellations" ||
                label ===
                  "Risk Alerts"
              ) {
                updatedValue =
                  analyzedValues[
                    sector
                  ].alerts.toLocaleString();

                if (
                  result &&
                  result.type ===
                    "negative"
                ) {
                  kpiClass =
                    "negative-kpi";
                } else if (
                  result &&
                  result.type ===
                    "warning"
                ) {
                  kpiClass =
                    "warning-kpi";
                }
              }

              return (
                <div
                  className={`stat-card ${kpiClass}`}
                  key={label}
                >

                  <span>
                    {label}
                  </span>

                  <strong>
                    {updatedValue}
                  </strong>

                  <small>
                    Current period
                  </small>

                </div>
              );
            }
          )}

        </section>

        {/* ======================================================
            ANALYSIS SECTION
        ====================================================== */}

        <section className="content-grid">

          {/* ANALYZE */}

          <div className="analysis-card">

            <div className="card-heading">

              <div>

                <span className="eyebrow">
                  DATA INPUT
                </span>

                <h2>
                  Analyze Your Business
                </h2>

              </div>

              <span className="live-badge">
                ● LIVE
              </span>

            </div>

            <p className="card-description">
              Enter your current{" "}
              {sector.toLowerCase()}
              {" "}data to generate
              meaningful insights.
            </p>

            <div className="form-grid">

              {currentSector.fields.map(
                (field) => (

                  <div
                    className="field"
                    key={field.name}
                  >

                    <label>
                      {field.label}
                    </label>

                    <input
                      type="number"
                      name={field.name}
                      value={
                        data[
                          field.name
                        ]
                      }
                      onChange={
                        handleInputChange
                      }
                      min="0"
                    />

                  </div>

                )
              )}

            </div>

            <button
              className="analyze-button"
              onClick={
                analyzeBusiness
              }
            >
              Analyze Business →
            </button>

          </div>

          {/* ====================================================
              BUSINESS INSIGHT
          ==================================================== */}

          <div
            className={`result-card ${
              result
                ? `${getStatusType(
                    result
                  )}-result`
                : ""
            }`}
          >

            <span className="eyebrow">
              BUSINESS INSIGHT
            </span>

            <h2>
              {sector} Result
            </h2>

            {!result ? (

              <div className="empty-result">

                <div className="result-icon">
                  ✦
                </div>

                <h3>
                  Ready to analyze
                </h3>

                <p>
                  Enter your{" "}
                  {sector.toLowerCase()}
                  {" "}information and
                  click{" "}
                  <b>
                    Analyze Business
                  </b>{" "}
                  to generate
                  insights.
                </p>

              </div>

            ) : (

              <div className="result-content">

                <div
                  className={`result-status status-${getStatusType(
                    result
                  )}`}
                >

                  <span>
                    <span
                      className={`status-dot status-dot-${getStatusType(
                        result
                      )}`}
                    />

                    STATUS
                  </span>

                  <strong>
                    {result.status}
                  </strong>

                </div>

                <p>
                  {result.message}
                </p>

                <div className="result-metrics">

                  <div>

                    <span>
                      {result.metricLabel}
                    </span>

                    <strong>
                      {result.metric}
                    </strong>

                  </div>

                  <div>

                    <span>
                      Current Sector
                    </span>

                    <strong>
                      {sector}
                    </strong>

                  </div>

                  <div>

                    <span>
                      Data Status
                    </span>

                    <strong>
                      Updated
                    </strong>

                  </div>

                </div>

                <div className="recommendation">

                  <span>
                    RECOMMENDATION
                  </span>

                  <p>
                    {result.recommendation}
                  </p>

                </div>

              </div>

            )}

          </div>

        </section>

        {/* ======================================================
            SECTOR ANALYTICS
        ====================================================== */}

        <section className="sector-analytics">

          <div className="analytics-header">

            <div>

              <span className="eyebrow">
                PERFORMANCE OVERVIEW
              </span>

              <h2>
                Sector Analytics
              </h2>

              <p>
                Compare business
                performance across
                all sectors.
              </p>

            </div>

            <span className="analytics-live">
              ● LIVE DATA
            </span>

          </div>

          <div className="analytics-grid">

            {/* REVENUE */}

            <div className="analytics-card">

              <div className="analytics-card-header">

                <div>

                  <span className="analytics-label">
                    REVENUE
                  </span>

                  <h3>
                    Revenue by Sector
                  </h3>

                </div>

                <span className="analytics-icon">
                  ₹
                </span>

              </div>

              <div className="bar-chart">

                {Object.entries(
                  analyticsData
                ).map(
                  ([name, item]) => {

                    const revenue =
                      item.fields.find(
                        (field) =>
                          field.name ===
                          "sales"
                      )?.value || 0;

                    const maxRevenue =
                      Math.max(
                        280000,
                        ...Object.values(
                          analyticsData
                        ).map(
                          (sectorItem) =>
                            sectorItem.fields.find(
                              (field) =>
                                field.name ===
                                "sales"
                            )?.value || 0
                        )
                      );

                    const percentage =
                      maxRevenue > 0
                        ? (revenue /
                            maxRevenue) *
                          100
                        : 0;

                    return (
                      <div
                        className="bar-row"
                        key={name}
                      >

                        <div className="bar-info">

                          <span>
                            {item.icon}{" "}
                            {name}
                          </span>

                          <strong>
                            ₹
                            {revenue.toLocaleString()}
                          </strong>

                        </div>

                        <div className="bar-track">

                          <div
                            className="bar-fill"
                            style={{
                              width:
                                `${percentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

            {/* CUSTOMERS */}

            <div className="analytics-card">

              <div className="analytics-card-header">

                <div>

                  <span className="analytics-label">
                    CUSTOMER ACTIVITY
                  </span>

                  <h3>
                    Customer Reach
                  </h3>

                </div>

                <span className="analytics-icon">
                  👥
                </span>

              </div>

              <div className="bar-chart">

                {Object.entries(
                  analyticsData
                ).map(
                  ([name, item]) => {

                    const customers =
                      item.fields.find(
                        (field) =>
                          field.name ===
                          "customers"
                      )?.value || 0;

                    const maxCustomers =
                      Math.max(
                        3200,
                        ...Object.values(
                          analyticsData
                        ).map(
                          (sectorItem) =>
                            sectorItem.fields.find(
                              (field) =>
                                field.name ===
                                "customers"
                            )?.value || 0
                        )
                      );

                    const percentage =
                      maxCustomers > 0
                        ? (customers /
                            maxCustomers) *
                          100
                        : 0;

                    return (
                      <div
                        className="bar-row"
                        key={name}
                      >

                        <div className="bar-info">

                          <span>
                            {item.icon}{" "}
                            {name}
                          </span>

                          <strong>
                            {customers.toLocaleString()}
                          </strong>

                        </div>

                        <div className="bar-track">

                          <div
                            className="bar-fill customer-bar"
                            style={{
                              width:
                                `${percentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

            {/* ALERTS */}

            <div className="analytics-card">

              <div className="analytics-card-header">

                <div>

                  <span className="analytics-label">
                    ALERTS & ACTIVITY
                  </span>

                  <h3>
                    Alerts / Cancellations
                  </h3>

                </div>

                <span className="analytics-icon">
                  ⚠
                </span>

              </div>

              <div className="bar-chart">

                {Object.entries(
                  analyticsData
                ).map(
                  ([name, item]) => {

                    const alerts =
                      item.fields.find(
                        (field) =>
                          field.name ===
                          "alerts"
                      )?.value || 0;

                    const maxAlerts =
                      Math.max(
                        50,
                        ...Object.values(
                          analyticsData
                        ).map(
                          (sectorItem) =>
                            sectorItem.fields.find(
                              (field) =>
                                field.name ===
                                "alerts"
                            )?.value || 0
                        )
                      );

                    const percentage =
                      maxAlerts > 0
                        ? (alerts /
                            maxAlerts) *
                          100
                        : 0;

                    const sectorResult =
                      sectorResults[
                        name
                      ];

                    let alertClass =
                      "bar-fill";

                    if (
                      sectorResult?.type ===
                      "negative"
                    ) {
                      alertClass =
                        "bar-fill alert-bar";
                    } else if (
                      sectorResult?.type ===
                      "warning"
                    ) {
                      alertClass =
                        "bar-fill alert-bar-warning";
                    }

                    return (
                      <div
                        className="bar-row"
                        key={name}
                      >

                        <div className="bar-info">

                          <span>
                            {item.icon}{" "}
                            {name}
                          </span>

                          <strong
                            style={{
                              color:
                                sectorResult?.type ===
                                "negative"
                                  ? "#dc2626"
                                  : sectorResult?.type ===
                                    "warning"
                                  ? "#b45309"
                                  : "#475569",
                            }}
                          >
                            {alerts.toLocaleString()}
                          </strong>

                        </div>

                        <div className="bar-track">

                          <div
                            className={
                              alertClass
                            }
                            style={{
                              width:
                                `${percentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>

          {/* ====================================================
              SECTOR SNAPSHOT
          ==================================================== */}

          <div className="sector-summary">

            <div className="summary-heading">

              <div>

                <span className="analytics-label">
                  SECTOR SNAPSHOT
                </span>

                <h3>
                  Business Performance
                </h3>

              </div>

            </div>

            <div className="summary-grid">

              {Object.entries(
                analyticsData
              ).map(
                ([name, item]) => {

                  const revenue =
                    item.fields.find(
                      (field) =>
                        field.name ===
                        "sales"
                    )?.value || 0;

                  const customers =
                    item.fields.find(
                      (field) =>
                        field.name ===
                        "customers"
                    )?.value || 0;

                  const alerts =
                    item.fields.find(
                      (field) =>
                        field.name ===
                        "alerts"
                    )?.value || 0;

                  const sectorResult =
                    sectorResults[
                      name
                    ];

                  return (
                    <div
                      className={`sector-summary-card ${
                        sectorResult
                          ? `history-card-${getStatusType(
                              sectorResult
                            )}`
                          : ""
                      }`}
                      key={name}
                    >

                      <div className="summary-icon">
                        {item.icon}
                      </div>

                      <div>

                        <span>
                          {name}
                        </span>

                        <strong>
                          ₹
                          {revenue.toLocaleString()}
                        </strong>

                        <small>
                          {customers.toLocaleString()}
                          {" "}customers
                        </small>

                        <small
                          style={{
                            color:
                              sectorResult?.type ===
                              "negative"
                                ? "#dc2626"
                                : sectorResult?.type ===
                                  "warning"
                                ? "#b45309"
                                : "#64748b",
                          }}
                        >
                          {alerts.toLocaleString()}
                          {" "}
                          {name ===
                            "Retail"
                            ? "low stock"
                            : name ===
                              "Financial Services"
                            ? "risk alerts"
                            : "cancellations"}
                        </small>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </section>

        {/* ======================================================
            HISTORY
        ====================================================== */}

        <section className="sector-summary">

          <div className="summary-heading">

            <div>

              <span className="analytics-label">
                ANALYSIS HISTORY
              </span>

              <h3>
                Recent Business Analyses
              </h3>

            </div>

            {history.length > 0 && (

              <button
                className="analyze-button"
                onClick={
                  clearHistory
                }
                style={{
                  width: "auto",
                  padding:
                    "10px 18px",
                  marginTop: "0",
                }}
              >
                Clear History
              </button>

            )}

          </div>

          {history.length === 0 ? (

            <div
              className="empty-result"
              style={{
                padding: "30px",
              }}
            >

              <div className="result-icon">
                🕘
              </div>

              <h3>
                No analysis history yet
              </h3>

              <p>
                Your completed
                business analyses
                will appear here.
              </p>

            </div>

          ) : (

            <div className="summary-grid">

              {history.map(
                (entry) => (

                  <div
                    className={`sector-summary-card history-card-${entry.type}`}
                    key={entry.id}
                    style={{
                      alignItems:
                        "flex-start",
                    }}
                  >

                    <div className="summary-icon">
                      {entry.icon}
                    </div>

                    <div
                      style={{
                        width:
                          "100%",
                      }}
                    >

                      <span>
                        {entry.sector}
                      </span>

                      <strong
                        className={`history-${entry.type}`}
                      >
                        {entry.status}
                      </strong>

                      <small>
                        {entry.metricLabel}:{" "}
                        {entry.metric}
                      </small>

                      <small>
                        Revenue: ₹
                        {entry.values.sales.toLocaleString()}
                      </small>

                      <small>
                        Customers:{" "}
                        {entry.values.customers.toLocaleString()}
                      </small>

                      <small>
                        Products /
                        Bookings:{" "}
                        {entry.values.products.toLocaleString()}
                      </small>

                      <small
                        className={
                          entry.type ===
                          "negative"
                            ? "history-negative"
                            : entry.type ===
                              "warning"
                            ? "history-warning"
                            : "history-positive"
                        }
                      >
                        Alerts /
                        Cancellations:{" "}
                        {entry.values.alerts.toLocaleString()}
                      </small>

                      <small>
                        {entry.timestamp}
                      </small>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;

