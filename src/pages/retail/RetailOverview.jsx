import "./RetailOverview.css";

function RetailDashboard() {
  const stats = [
    {
      icon: "💰",
      label: "Total Revenue",
      value: "₹5,91,000",
      footer: "↑ 15.4% vs last month",
      type: "green",
    },
    {
      icon: "🛒",
      label: "Total Orders",
      value: "3,486",
      footer: "↑ 12.4% this month",
      type: "blue",
    },
    {
      icon: "📦",
      label: "Products Sold",
      value: "2,842",
      footer: "↑ 8.6% this month",
      type: "orange",
    },
    {
      icon: "👥",
      label: "Active Customers",
      value: "1,824",
      footer: "↑ 6.2% this month",
      type: "purple",
    },
  ];

  const chartData = [
    { day: "Mon", value: 55 },
    { day: "Tue", value: 72 },
    { day: "Wed", value: 48 },
    { day: "Thu", value: 82 },
    { day: "Fri", value: 68 },
    { day: "Sat", value: 95 },
    { day: "Sun", value: 76 },
  ];

  const insights = [
    {
      icon: "📈",
      title: "Sales are growing",
      text: "Revenue increased by 15.4% compared with last month.",
      type: "green",
    },
    {
      icon: "⚠️",
      title: "Low stock detected",
      text: "24 products currently need restocking.",
      type: "orange",
    },
    {
      icon: "🔥",
      title: "High demand",
      text: "Electronics are currently your fastest-selling category.",
      type: "red",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1024",
      customer: "Rahul Sharma",
      product: "Wireless Headphones",
      amount: "₹2,499",
      status: "Completed",
    },
    {
      id: "#ORD-1023",
      customer: "Priya Reddy",
      product: "Smart Watch",
      amount: "₹4,999",
      status: "Completed",
    },
    {
      id: "#ORD-1022",
      customer: "Arjun Kumar",
      product: "Bluetooth Speaker",
      amount: "₹1,899",
      status: "Pending",
    },
    {
      id: "#ORD-1021",
      customer: "Sneha Patel",
      product: "USB-C Cable",
      amount: "₹699",
      status: "Completed",
    },
    {
      id: "#ORD-1020",
      customer: "Vikram Singh",
      product: "Wireless Mouse",
      amount: "₹1,299",
      status: "Cancelled",
    },
  ];

  return (
    <div className="retail-overview">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="retail-overview-header">

        <div>
          <h1>Retail Overview</h1>

          <p>
            Monitor your retail business performance and key metrics.
          </p>
        </div>

        <div className="retail-overview-date">
          📅 Last 30 Days
        </div>

      </div>


      {/* =========================================
          KPI CARDS
      ========================================= */}

      <div className="retail-overview-stats">

        {stats.map((stat, index) => (
          <div
            className="retail-overview-card"
            key={index}
          >

            <div
              className={`retail-overview-icon ${stat.type}`}
            >
              {stat.icon}
            </div>

            <p className="retail-overview-card-label">
              {stat.label}
            </p>

            <h2 className="retail-overview-card-value">
              {stat.value}
            </h2>

            <p
              className={`retail-overview-card-footer retail-overview-positive`}
            >
              {stat.footer}
            </p>

          </div>
        ))}

      </div>


      {/* =========================================
          MAIN CONTENT GRID
      ========================================= */}

      <div className="retail-overview-grid">


        {/* =====================================
            SALES PERFORMANCE
        ===================================== */}

        <div className="retail-overview-section">

          <div className="retail-overview-section-header">

            <div>
              <h2>Sales Performance</h2>

              <p>
                Revenue generated over the last 7 days
              </p>
            </div>

            <button className="retail-view-all">
              View Details →
            </button>

          </div>


          <div className="retail-performance">

            <div className="retail-performance-value">

              <strong>₹36,000</strong>

              <span>
                ↑ 15.4% compared with previous period
              </span>

            </div>


            <div className="retail-chart">

              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="retail-chart-bar"
                  style={{
                    height: `${item.value}%`,
                  }}
                  title={`${item.day}: ₹${item.value * 500}`}
                />
              ))}

            </div>


            <div className="retail-chart-labels">

              {chartData.map((item, index) => (
                <span key={index}>
                  {item.day}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================
            QUICK INSIGHTS
        ===================================== */}

        <div className="retail-overview-section">

          <div className="retail-overview-section-header">

            <div>
              <h2>Quick Insights</h2>

              <p>
                Important things happening in your store
              </p>
            </div>

          </div>


          <div className="retail-insights">

            {insights.map((insight, index) => (
              <div
                className="retail-insight"
                key={index}
              >

                <div
                  className={`retail-insight-icon ${insight.type}`}
                >
                  {insight.icon}
                </div>

                <div className="retail-insight-content">

                  <strong>
                    {insight.title}
                  </strong>

                  <span>
                    {insight.text}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>


      {/* =========================================
          RECENT ORDERS
      ========================================= */}

      <div className="retail-overview-section retail-recent-section">

        <div className="retail-overview-section-header">

          <div>

            <h2>Recent Orders</h2>

            <p>
              Latest transactions from your store
            </p>

          </div>

          <button className="retail-view-all">
            View All →
          </button>

        </div>


        <div className="retail-recent-table-wrapper">

          <table className="retail-recent-table">

            <thead>

              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>

            </thead>


            <tbody>

              {recentOrders.map((order, index) => {

                const statusClass =
                  order.status === "Completed"
                    ? "completed"
                    : order.status === "Pending"
                    ? "pending"
                    : "cancelled";

                return (
                  <tr key={index}>

                    <td>
                      <strong>
                        {order.id}
                      </strong>
                    </td>

                    <td>
                      {order.customer}
                    </td>

                    <td>
                      {order.product}
                    </td>

                    <td>
                      <strong>
                        {order.amount}
                      </strong>
                    </td>

                    <td>

                      <span
                        className={`retail-status ${statusClass}`}
                      >
                        {order.status}
                      </span>

                    </td>

                  </tr>
                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default RetailDashboard;