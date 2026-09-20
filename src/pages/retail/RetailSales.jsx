import { useState } from "react";
import "./RetailSales.css";

function RetailSales() {
  const [period, setPeriod] = useState("Last 30 Days");

  const salesData = [
    { day: "Wed", amount: 36 },
    { day: "Thu", amount: 49 },
    { day: "Fri", amount: 44 },
    { day: "Sat", amount: 57 },
    { day: "Sun", amount: 51 },
  ];

  return (
    <div className="sales-page">

      {/* HEADER */}
      <div className="sales-header">

        <div>
          <h1>Sales Overview</h1>
          <p>Track revenue, orders and sales performance.</p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="sales-period"
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
        </select>

      </div>

      {/* STATS */}
      <div className="sales-stats">

        <div className="sales-card">
          <div className="sales-card-icon green">
            💰
          </div>

          <p>Total Revenue</p>

          <h2>₹5,91,000</h2>

          <span className="positive">
            ↑ 15.4% vs last month
          </span>
        </div>

        <div className="sales-card">
          <div className="sales-card-icon blue">
            🛒
          </div>

          <p>Total Orders</p>

          <h2>3,486</h2>

          <span className="positive">
            ↑ 12.4% this month
          </span>
        </div>

        <div className="sales-card">
          <div className="sales-card-icon purple">
            💳
          </div>

          <p>Average Order Value</p>

          <h2>₹170</h2>

          <span className="positive">
            ↑ 6.8%
          </span>
        </div>

        <div className="sales-card">
          <div className="sales-card-icon orange">
            🔥
          </div>

          <p>Demand</p>

          <h2>High</h2>

          <span className="positive">
            Market demand
          </span>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="sales-layout">

        {/* CHART */}
        <div className="sales-panel">

          <div className="panel-header">

            <div>
              <h2>Sales Performance</h2>
              <p>Revenue generated over the last 7 days</p>
            </div>

            <span className="growth-badge">
              ↑ 15.4%
            </span>

          </div>

          <div className="sales-chart">

            {salesData.map((item) => (
              <div className="chart-column" key={item.day}>

                <span className="chart-value">
                  ₹{item.amount}K
                </span>

                <div
                  className="chart-bar"
                  style={{
                    height: `${item.amount * 4}px`,
                  }}
                ></div>

                <span className="chart-day">
                  {item.day}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* INSIGHT */}
        <div className="sales-panel sales-insight">

          <h2>Sales Insight</h2>

          <div className="insight-box">

            <div className="insight-icon">
              📈
            </div>

            <div>
              <h3>Strong Growth</h3>

              <p>
                Sales have increased by <strong>15.4%</strong>.
                Current demand is high.
              </p>
            </div>

          </div>

          <div className="insight-row">
            <span>Revenue</span>
            <strong>₹591,000</strong>
          </div>

          <div className="insight-row">
            <span>Orders</span>
            <strong>3,486</strong>
          </div>

          <div className="insight-row">
            <span>Growth</span>
            <strong className="green-value">
              +15.4%
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RetailSales;