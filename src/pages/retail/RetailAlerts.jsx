import { useState } from "react";
import "./RetailAlerts.css";

function RetailAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "warning",
      icon: "⚠️",
      title: "Low Stock Alert",
      message: "24 products are running low and may need restocking.",
      status: "pending",
      time: "10 min ago",
    },
    {
      id: 2,
      type: "danger",
      icon: "🚫",
      title: "Out of Stock",
      message: "8 products are currently out of stock.",
      status: "critical",
      time: "25 min ago",
    },
    {
      id: 3,
      type: "info",
      icon: "📊",
      title: "Demand Increased",
      message: "Customer demand has increased by 15.4% this month.",
      status: "pending",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "success",
      icon: "✅",
      title: "Inventory Updated",
      message: "Inventory records were successfully updated.",
      status: "resolved",
      time: "2 hours ago",
    },
  ]);

  const resolveAlert = (id) => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) =>
        alert.id === id
          ? { ...alert, status: "resolved" }
          : alert
      )
    );
  };

  const pendingCount = alerts.filter(
    (alert) => alert.status === "pending"
  ).length;

  const criticalCount = alerts.filter(
    (alert) => alert.status === "critical"
  ).length;

  const resolvedCount = alerts.filter(
    (alert) => alert.status === "resolved"
  ).length;

  return (
    <div className="alerts-page">

      {/* HEADER */}
      <div className="alerts-header">
        <div>
          <h1>Alerts</h1>
          <p>Monitor important events and business notifications.</p>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="alert-summary">

        <div className="alert-summary-card warning">
          <span>Pending Alerts</span>
          <h2>{pendingCount}</h2>
        </div>

        <div className="alert-summary-card danger">
          <span>Critical Alerts</span>
          <h2>{criticalCount}</h2>
        </div>

        <div className="alert-summary-card success">
          <span>Resolved Alerts</span>
          <h2>{resolvedCount}</h2>
        </div>

      </div>

      {/* CONTENT */}
      <div className="alerts-container">

        {/* ALERT LIST */}
        <div className="alert-list-card">

          <div className="alert-list-header">
            <h2>Recent Alerts</h2>
          </div>

          {alerts.map((alert) => (
            <div className="alert-item" key={alert.id}>

              <div className={`alert-icon ${alert.type}`}>
                {alert.icon}
              </div>

              <div className="alert-content">

                <h3>{alert.title}</h3>

                <p>{alert.message}</p>

                <span
                  className={`alert-status ${alert.status}`}
                >
                  {alert.status === "pending" && "Pending"}
                  {alert.status === "critical" && "Critical"}
                  {alert.status === "resolved" && "Resolved"}
                </span>

              </div>

              <span className="alert-time">
                {alert.time}
              </span>

              {alert.status !== "resolved" && (
                <button
                  className="alert-action"
                  onClick={() => resolveAlert(alert.id)}
                >
                  Resolve
                </button>
              )}

            </div>
          ))}

        </div>

        {/* INSIGHT */}
        <div className="alert-insight">

          <h2>Alert Insight</h2>

          <div className="alert-insight-box">

            <div className="big-icon">
              ⚠️
            </div>

            <h3>Attention Required</h3>

            <p>
              Some inventory items require attention.
              Review low-stock and out-of-stock products
              to keep your store running smoothly.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RetailAlerts;