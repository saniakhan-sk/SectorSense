import "./HospitalityDashboard.css";

function HospitalityDashboard() {
  return (
    <div className="hospitality-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-box">S</div>
          <span>SectorSense</span>
        </div>

        <div className="sidebar-sector">
          🏨 Hospitality
        </div>

        <nav>
          <a className="active">📊 Overview</a>
          <a>📈 Analytics</a>
          <a>🔮 Demand Forecast</a>
          <a>👥 Customers</a>
          <a>🛏️ Rooms</a>
          <a>⚠️ Alerts</a>
        </nav>

        <div className="sidebar-bottom">
          <a>⚙️ Settings</a>
          <a href="/">🚪 Logout</a>
        </div>

      </aside>

      {/* MAIN */}
      <main className="hospitality-main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>
            <h1>Hospitality Overview</h1>
            <p>Monitor your business performance and demand.</p>
          </div>

          <div className="topbar-right">
            <button className="notification">🔔</button>

            <div className="user">
              <div className="avatar">S</div>

              <div>
                <strong>Business Admin</strong>
                <small>Hospitality</small>
              </div>
            </div>
          </div>

        </header>

        {/* WELCOME */}
        <section className="welcome-card">

          <div>
            <span className="welcome-label">
              BUSINESS INTELLIGENCE
            </span>

            <h2>
              Good morning! 👋
            </h2>

            <p>
              Here's what's happening with your hospitality business today.
            </p>
          </div>

          <div className="date-box">
            📅 Today
            <strong>19 September 2026</strong>
          </div>

        </section>

        {/* KPI CARDS */}
        <section className="kpi-grid">

          <div className="kpi-card">

            <div className="kpi-top">
              <span>Occupancy Rate</span>
              <div className="kpi-icon purple">🛏️</div>
            </div>

            <h2>78%</h2>

            <p className="positive">
              ↑ 8.4%
              <span> vs last month</span>
            </p>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>Today's Bookings</span>
              <div className="kpi-icon blue">📅</div>
            </div>

            <h2>142</h2>

            <p className="positive">
              ↑ 12.5%
              <span> vs yesterday</span>
            </p>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>Revenue</span>
              <div className="kpi-icon green">💰</div>
            </div>

            <h2>₹24.8L</h2>

            <p className="positive">
              ↑ 15.2%
              <span> this month</span>
            </p>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>Customer Rating</span>
              <div className="kpi-icon orange">⭐</div>
            </div>

            <h2>4.6</h2>

            <p className="positive">
              ↑ 0.3
              <span> this month</span>
            </p>

          </div>

        </section>


        {/* ANALYTICS */}
        <section className="analytics-grid">

          {/* PERFORMANCE */}
          <div className="analytics-card">

            <div className="card-heading">

              <div>
                <h3>Revenue Performance</h3>
                <p>Monthly revenue overview</p>
              </div>

              <select>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>

            </div>

            <div className="chart">

              <div className="chart-bars">

                <div className="bar" style={{ height: "45%" }}>
                  <span>Apr</span>
                </div>

                <div className="bar" style={{ height: "60%" }}>
                  <span>May</span>
                </div>

                <div className="bar" style={{ height: "52%" }}>
                  <span>Jun</span>
                </div>

                <div className="bar" style={{ height: "72%" }}>
                  <span>Jul</span>
                </div>

                <div className="bar" style={{ height: "80%" }}>
                  <span>Aug</span>
                </div>

                <div className="bar current" style={{ height: "92%" }}>
                  <span>Sep</span>
                </div>

              </div>

            </div>

          </div>


          {/* DEMAND */}
          <div className="analytics-card">

            <div className="card-heading">

              <div>
                <h3>Demand Forecast</h3>
                <p>Expected room demand</p>
              </div>

              <span className="forecast-status">
                High Demand
              </span>

            </div>

            <div className="demand-content">

              <div className="demand-number">
                <strong>86%</strong>
                <span>Expected occupancy</span>
              </div>

              <div className="progress-container">

                <div className="progress-bar">
                  <div style={{ width: "86%" }}></div>
                </div>

                <div className="progress-labels">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>

              </div>

              <p className="forecast-text">
                📈 Weekend demand is expected to increase.
                Consider adjusting room availability and pricing.
              </p>

            </div>

          </div>

        </section>


        {/* INSIGHTS */}
        <section className="bottom-grid">

          <div className="insights-card">

            <div className="card-title">
              <h3>💡 Business Insights</h3>
              <span>AI Assisted</span>
            </div>

            <div className="insight">

              <div className="insight-icon">📈</div>

              <div>
                <strong>High weekend demand</strong>

                <p>
                  Booking activity is increasing for weekends.
                </p>
              </div>

            </div>

            <div className="insight">

              <div className="insight-icon">👥</div>

              <div>
                <strong>Customer growth</strong>

                <p>
                  New customer registrations are increasing.
                </p>
              </div>

            </div>

            <div className="insight">

              <div className="insight-icon">💰</div>

              <div>
                <strong>Revenue opportunity</strong>

                <p>
                  Higher demand may create an opportunity
                  for optimized pricing.
                </p>
              </div>

            </div>

          </div>


          <div className="quick-card">

            <h3>Quick Actions</h3>

            <button>📊 View Analytics</button>
            <button>🔮 Open Forecast</button>
            <button>👥 Customer Analysis</button>
            <button>⚠️ View Alerts</button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default HospitalityDashboard;