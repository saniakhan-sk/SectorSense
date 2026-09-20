import { useState } from "react";
import "./RetailAnalytics.css";

function RetailAnalytics() {
  const [period, setPeriod] = useState("30 Days");

  const salesData = {
    "7 Days": [32, 41, 38, 52, 47, 61, 68],
    "30 Days": [42, 55, 48, 63, 58, 72, 81],
    "6 Months": [38, 46, 52, 61, 69, 78, 88],
  };

  const currentData = salesData[period];

  const products = [
    {
      name: "Electronics",
      sales: "₹1.84L",
      growth: "+18.5%",
      percentage: 86,
    },
    {
      name: "Fashion",
      sales: "₹1.42L",
      growth: "+14.2%",
      percentage: 72,
    },
    {
      name: "Home & Living",
      sales: "₹98K",
      growth: "+9.8%",
      percentage: 58,
    },
    {
      name: "Beauty",
      sales: "₹76K",
      growth: "+7.4%",
      percentage: 46,
    },
  ];

  const customers = [
    {
      label: "New Customers",
      value: "1,431",
      percentage: "41%",
    },
    {
      label: "Returning Customers",
      value: "2,055",
      percentage: "59%",
    },
    {
      label: "Repeat Purchase Rate",
      value: "68%",
      percentage: "↑ 5.4%",
    },
  ];

  return (
    <div className="analytics-page">

      {/* HEADER */}
      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>
            Understand sales performance, customer behavior and business trends.
          </p>
        </div>

        <select
          className="analytics-period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option>7 Days</option>
          <option>30 Days</option>
          <option>6 Months</option>
        </select>
      </div>

      {/* KPI CARDS */}
      <div className="analytics-stats">

        <div className="analytics-stat-card">
          <div className="analytics-stat-icon green">
            💰
          </div>

          <div>
            <p>Total Revenue</p>
            <h2>₹5.91L</h2>
            <span className="analytics-positive">
              ↑ 15.4% vs last period
            </span>
          </div>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-icon blue">
            🛒
          </div>

          <div>
            <p>Total Orders</p>
            <h2>3,486</h2>
            <span className="analytics-positive">
              ↑ 12.4% vs last period
            </span>
          </div>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-icon purple">
            📊
          </div>

          <div>
            <p>Average Order Value</p>
            <h2>₹1,695</h2>
            <span className="analytics-positive">
              ↑ 6.8% vs last period
            </span>
          </div>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-icon orange">
            👥
          </div>

          <div>
            <p>Conversion Rate</p>
            <h2>8.6%</h2>
            <span className="analytics-positive">
              ↑ 2.1% vs last period
            </span>
          </div>
        </div>

      </div>

      {/* MAIN ANALYTICS */}
      <div className="analytics-main-grid">

        {/* SALES CHART */}
        <div className="analytics-card sales-chart-card">

          <div className="analytics-card-header">
            <div>
              <h2>Revenue Performance</h2>
              <p>Revenue generated during the selected period.</p>
            </div>

            <span className="chart-badge">
              {period}
            </span>
          </div>

          <div className="bar-chart">

            {currentData.map((value, index) => (
              <div className="bar-column" key={index}>

                <span className="bar-value">
                  ₹{value}K
                </span>

                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      height: `${value * 1.05}%`,
                    }}
                  ></div>
                </div>

                <span className="bar-label">
                  {period === "7 Days"
                    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]
                    : period === "30 Days"
                    ? ["W1", "W2", "W3", "W4", "W5", "W6", "W7"][index]
                    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* SALES INSIGHT */}
        <div className="analytics-card insight-card">

          <div className="analytics-card-header">
            <div>
              <h2>Business Insight</h2>
              <p>Key observations from your data.</p>
            </div>
          </div>

          <div className="business-insight">
            <div className="insight-icon">
              📈
            </div>

            <div>
              <h3>Strong Revenue Growth</h3>
              <p>
                Revenue has increased by 15.4% compared with the previous
                period.
              </p>
            </div>
          </div>

          <div className="business-insight">
            <div className="insight-icon blue">
              👥
            </div>

            <div>
              <h3>Customer Retention</h3>
              <p>
                Returning customers contribute significantly to overall sales.
              </p>
            </div>
          </div>

          <div className="business-insight">
            <div className="insight-icon orange">
              📦
            </div>

            <div>
              <h3>Inventory Attention</h3>
              <p>
                24 products are currently below the recommended stock level.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* LOWER SECTION */}
      <div className="analytics-lower-grid">

        {/* PRODUCT PERFORMANCE */}
        <div className="analytics-card">

          <div className="analytics-card-header">
            <div>
              <h2>Category Performance</h2>
              <p>Sales performance across major categories.</p>
            </div>
          </div>

          <div className="category-list">

            {products.map((product) => (
              <div className="category-row" key={product.name}>

                <div className="category-info">
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.sales}</span>
                  </div>

                  <div className="category-growth">
                    {product.growth}
                  </div>
                </div>

                <div className="category-progress">
                  <div
                    style={{
                      width: `${product.percentage}%`,
                    }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* CUSTOMER ANALYTICS */}
        <div className="analytics-card">

          <div className="analytics-card-header">
            <div>
              <h2>Customer Analytics</h2>
              <p>Customer activity and retention.</p>
            </div>
          </div>

          <div className="customer-analytics-list">

            {customers.map((customer) => (
              <div
                className="customer-analytics-row"
                key={customer.label}
              >

                <div className="customer-analytics-icon">
                  👤
                </div>

                <div className="customer-analytics-content">
                  <span>{customer.label}</span>
                  <strong>{customer.value}</strong>
                </div>

                <div className="customer-percentage">
                  {customer.percentage}
                </div>

              </div>
            ))}

          </div>

          <div className="retention-box">
            <span>💚</span>

            <div>
              <strong>Healthy Customer Retention</strong>
              <p>
                Your returning customer rate is currently 68%.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RetailAnalytics;