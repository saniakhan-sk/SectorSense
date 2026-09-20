import { useState } from "react";
import "./RetailCustomers.css";

function RetailCustomers() {
  const [search, setSearch] = useState("");

  const customers = [
    {
      id: "CUST001",
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      orders: 24,
      spent: "₹18,450",
      status: "Active",
    },
    {
      id: "CUST002",
      name: "Ananya Reddy",
      email: "ananya@gmail.com",
      orders: 18,
      spent: "₹14,280",
      status: "Active",
    },
    {
      id: "CUST003",
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      orders: 12,
      spent: "₹9,850",
      status: "Active",
    },
    {
      id: "CUST004",
      name: "Priya Singh",
      email: "priya@gmail.com",
      orders: 8,
      spent: "₹6,420",
      status: "Inactive",
    },
    {
      id: "CUST005",
      name: "Vikram Patel",
      email: "vikram@gmail.com",
      orders: 31,
      spent: "₹24,600",
      status: "Active",
    },
    {
      id: "CUST006",
      name: "Sneha Rao",
      email: "sneha@gmail.com",
      orders: 15,
      spent: "₹11,750",
      status: "Active",
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="customers-page">

      {/* HEADER */}
      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage customer relationships and understand buying behavior.</p>
        </div>

        <button className="add-customer-btn">
          + Add Customer
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="customer-stats">

        <div className="customer-stat-card">
          <div className="customer-stat-icon green">
            👥
          </div>

          <div>
            <p>Total Customers</p>
            <h2>3,486</h2>
            <span className="positive">↑ 12.4% this month</span>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon blue">
            🛒
          </div>

          <div>
            <p>Active Customers</p>
            <h2>2,914</h2>
            <span className="positive">83.6% of customers</span>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon purple">
            💰
          </div>

          <div>
            <p>Average Spend</p>
            <h2>₹4,280</h2>
            <span className="positive">↑ 8.2% this month</span>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="customer-stat-icon orange">
            🔄
          </div>

          <div>
            <p>Returning Customers</p>
            <h2>68%</h2>
            <span className="positive">↑ 5.4% this month</span>
          </div>
        </div>

      </div>

      {/* CUSTOMER INSIGHTS */}
      <div className="customer-insights">

        <div className="insight-card">
          <div>
            <h3>Customer Growth</h3>
            <p>New customers this month</p>
          </div>

          <strong>+15.4%</strong>

          <div className="growth-bar">
            <div className="growth-value"></div>
          </div>

          <div className="growth-info">
            <span>Last month</span>
            <strong>1,240</strong>
          </div>

          <div className="growth-info">
            <span>This month</span>
            <strong>1,431</strong>
          </div>
        </div>

        <div className="insight-card">
          <div>
            <h3>Customer Loyalty</h3>
            <p>Returning customer rate</p>
          </div>

          <div className="loyalty-circle">
            <div>
              <strong>68%</strong>
              <span>Loyal</span>
            </div>
          </div>

          <p className="loyalty-text">
            Most customers are returning for additional purchases.
          </p>
        </div>

      </div>

      {/* CUSTOMER TABLE */}
      <div className="customers-table-card">

        <div className="customers-table-header">
          <div>
            <h2>Customer List</h2>
            <p>View and manage all your customers.</p>
          </div>

          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="customer-search"
          />
        </div>

        <div className="table-wrapper">

          <table className="customers-table">

            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>

                  <td>
                    <div className="customer-name">

                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{customer.name}</strong>
                        <span>{customer.id}</span>
                      </div>

                    </div>
                  </td>

                  <td>{customer.email}</td>

                  <td>
                    <strong>{customer.orders}</strong>
                  </td>

                  <td>
                    <strong>{customer.spent}</strong>
                  </td>

                  <td>
                    <span
                      className={`customer-status ${
                        customer.status === "Active"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td>
                    <button className="view-customer-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredCustomers.length === 0 && (
            <div className="no-customers">
              No customers found.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default RetailCustomers;