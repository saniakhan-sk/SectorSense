import "./FinanceDashboard.css";

function FinanceDashboard() {
  return (
    <div className="finance-layout">

      {/* SIDEBAR */}
      <aside className="finance-sidebar">

        <div className="finance-logo">
          <div className="finance-logo-box">S</div>
          <span>SectorSense</span>
        </div>

        <div className="finance-sector">
          💳 Financial Services
        </div>

        <nav>
          <a className="active">📊 Overview</a>
          <a>💰 Transactions</a>
          <a>📈 Analytics</a>
          <a>🛡️ Risk Monitor</a>
          <a>👥 Customers</a>
          <a>⚠️ Alerts</a>
        </nav>

        <div className="finance-sidebar-bottom">
          <a>⚙️ Settings</a>
          <a href="/">🚪 Logout</a>
        </div>

      </aside>

      {/* MAIN */}
      <main className="finance-main">

        {/* TOPBAR */}
        <header className="finance-topbar">

          <div>
            <h1>Financial Services Overview</h1>
            <p>
              Monitor transactions, financial activity and risk indicators.
            </p>
          </div>

          <div className="finance-user-area">

            <button className="finance-notification">
              🔔
            </button>

            <div className="finance-user">

              <div className="finance-avatar">
                S
              </div>

              <div>
                <strong>Business Admin</strong>
                <small>Financial Services</small>
              </div>

            </div>

          </div>

        </header>


        {/* WELCOME */}
        <section className="finance-welcome">

          <div>

            <span>FINANCIAL INTELLIGENCE</span>

            <h2>
              Financial performance at a glance 💳
            </h2>

            <p>
              Track transaction activity, customer behavior and financial risk.
            </p>

          </div>

          <div className="finance-date">
            📅 Today
            <strong>19 September 2026</strong>
          </div>

        </section>


        {/* KPI CARDS */}
        <section className="finance-kpi-grid">

          <div className="finance-kpi">

            <div className="finance-kpi-header">
              <span>Total Transactions</span>
              <div className="finance-icon purple">
                💳
              </div>
            </div>

            <h2>12,845</h2>

            <p className="finance-positive">
              ↑ 14.2%
              <span> vs last month</span>
            </p>

          </div>


          <div className="finance-kpi">

            <div className="finance-kpi-header">
              <span>Transaction Value</span>
              <div className="finance-icon blue">
                💰
              </div>
            </div>

            <h2>₹8.42 Cr</h2>

            <p className="finance-positive">
              ↑ 11.8%
              <span> this month</span>
            </p>

          </div>


          <div className="finance-kpi">

            <div className="finance-kpi-header">
              <span>Active Customers</span>
              <div className="finance-icon green">
                👥
              </div>
            </div>

            <h2>48,920</h2>

            <p className="finance-positive">
              ↑ 9.5%
              <span> this month</span>
            </p>

          </div>


          <div className="finance-kpi">

            <div className="finance-kpi-header">
              <span>Risk Level</span>
              <div className="finance-icon orange">
                🛡️
              </div>
            </div>

            <h2>Low</h2>

            <p className="finance-safe">
              ● Stable
              <span> current status</span>
            </p>

          </div>

        </section>


        {/* ANALYTICS */}
        <section className="finance-analytics-grid">

          {/* TRANSACTION CHART */}
          <div className="finance-card">

            <div className="finance-card-heading">

              <div>
                <h3>Transaction Activity</h3>
                <p>Monthly transaction volume</p>
              </div>

              <select>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>

            </div>

            <div className="finance-chart">

              <div
                className="finance-bar"
                style={{ height: "45%" }}
              >
                <span>Apr</span>
              </div>

              <div
                className="finance-bar"
                style={{ height: "58%" }}
              >
                <span>May</span>
              </div>

              <div
                className="finance-bar"
                style={{ height: "52%" }}
              >
                <span>Jun</span>
              </div>

              <div
                className="finance-bar"
                style={{ height: "70%" }}
              >
                <span>Jul</span>
              </div>

              <div
                className="finance-bar"
                style={{ height: "82%" }}
              >
                <span>Aug</span>
              </div>

              <div
                className="finance-bar current"
                style={{ height: "94%" }}
              >
                <span>Sep</span>
              </div>

            </div>

          </div>


          {/* RISK MONITOR */}
          <div className="finance-card">

            <div className="finance-card-heading">

              <div>
                <h3>Risk Monitor</h3>
                <p>Current financial risk indicators</p>
              </div>

              <span className="risk-status">
                LOW RISK
              </span>

            </div>

            <div className="risk-score">

              <div className="risk-circle">
                <strong>18</strong>
                <span>/100</span>
              </div>

              <div>
                <h4>Risk Score</h4>
                <p>
                  Current activity is within the normal
                  operating range.
                </p>
              </div>

            </div>

            <div className="risk-progress">

              <div className="risk-progress-bar">
                <div></div>
              </div>

              <div className="risk-labels">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM */}
        <section className="finance-bottom-grid">

          {/* INSIGHTS */}
          <div className="finance-insights">

            <div className="finance-title">

              <h3>💡 Financial Insights</h3>

              <span>AI Assisted</span>

            </div>


            <div className="finance-insight">

              <div className="finance-insight-icon">
                📈
              </div>

              <div>
                <strong>Transaction growth</strong>

                <p>
                  Transaction volume has increased compared
                  with the previous period.
                </p>
              </div>

            </div>


            <div className="finance-insight">

              <div className="finance-insight-icon">
                👥
              </div>

              <div>
                <strong>Customer activity</strong>

                <p>
                  Active customer participation continues
                  to show positive growth.
                </p>
              </div>

            </div>


            <div className="finance-insight">

              <div className="finance-insight-icon">
                🛡️
              </div>

              <div>
                <strong>Risk remains stable</strong>

                <p>
                  Current risk indicators remain within
                  the monitored range.
                </p>
              </div>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="finance-actions">

            <h3>Quick Actions</h3>

            <button>
              💳 View Transactions
            </button>

            <button>
              📈 Financial Analytics
            </button>

            <button>
              🛡️ Risk Analysis
            </button>

            <button>
              ⚠️ View Alerts
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default FinanceDashboard;