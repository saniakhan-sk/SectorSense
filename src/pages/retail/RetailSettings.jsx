import { useState } from "react";
import "./RetailSettings.css";

function RetailSettings() {
  const [storeName, setStoreName] = useState("SectorSense Retail");
  const [email, setEmail] = useState("admin@sectorsense.com");
  const [currency, setCurrency] = useState("INR (₹)");

  const [notifications, setNotifications] = useState({
    sales: true,
    inventory: true,
    customers: true,
    email: false,
  });

  const [saved, setSaved] = useState(false);

  const handleNotificationChange = (key) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="settings-page">

      {/* HEADER */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>
            Manage your store preferences, notifications and account settings.
          </p>
        </div>

        {saved && (
          <div className="saved-message">
            ✓ Changes saved successfully
          </div>
        )}
      </div>

      {/* BUSINESS SETTINGS */}
      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-section-icon">
            🏪
          </div>

          <div>
            <h2>Business Information</h2>
            <p>
              Update the basic information displayed across your dashboard.
            </p>
          </div>
        </div>

        <div className="settings-form">

          <div className="settings-field">
            <label>Business Name</label>

            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Enter business name"
            />
          </div>

          <div className="settings-field">
            <label>Business Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="settings-field">
            <label>Currency</label>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>

          <div className="settings-field">
            <label>Sector</label>

            <input
              type="text"
              value="Retail"
              disabled
            />
          </div>

        </div>

      </section>

      {/* NOTIFICATIONS */}
      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-section-icon blue">
            🔔
          </div>

          <div>
            <h2>Notifications</h2>
            <p>
              Choose which business events you want to be notified about.
            </p>
          </div>
        </div>

        <div className="settings-options">

          <div className="settings-option">
            <div>
              <strong>Sales Notifications</strong>
              <span>
                Receive alerts when important sales changes occur.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                notifications.sales ? "on" : ""
              }`}
              onClick={() =>
                handleNotificationChange("sales")
              }
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <strong>Inventory Alerts</strong>
              <span>
                Get notified when products reach low-stock levels.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                notifications.inventory ? "on" : ""
              }`}
              onClick={() =>
                handleNotificationChange("inventory")
              }
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <strong>Customer Activity</strong>
              <span>
                Receive updates about important customer activity.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                notifications.customers ? "on" : ""
              }`}
              onClick={() =>
                handleNotificationChange("customers")
              }
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <strong>Email Notifications</strong>
              <span>
                Send important dashboard alerts to your email.
              </span>
            </div>

            <button
              type="button"
              className={`toggle ${
                notifications.email ? "on" : ""
              }`}
              onClick={() =>
                handleNotificationChange("email")
              }
            >
              <span></span>
            </button>
          </div>

        </div>

      </section>

      {/* DASHBOARD PREFERENCES */}
      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-section-icon purple">
            🎨
          </div>

          <div>
            <h2>Dashboard Preferences</h2>
            <p>
              Configure how information is displayed on your dashboard.
            </p>
          </div>
        </div>

        <div className="preference-grid">

          <div className="preference-box">
            <span>Default Dashboard</span>
            <strong>Overview</strong>
          </div>

          <div className="preference-box">
            <span>Data Refresh</span>
            <strong>Every 5 minutes</strong>
          </div>

          <div className="preference-box">
            <span>Theme</span>
            <strong>Light</strong>
          </div>

          <div className="preference-box">
            <span>Language</span>
            <strong>English</strong>
          </div>

        </div>

      </section>

      {/* SAVE */}
      <div className="settings-actions">

        <button
          className="reset-btn"
          type="button"
          onClick={() => {
            setStoreName("SectorSense Retail");
            setEmail("admin@sectorsense.com");
            setCurrency("INR (₹)");
          }}
        >
          Reset
        </button>

        <button
          className="save-settings-btn"
          type="button"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default RetailSettings;