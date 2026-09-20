import { useState } from "react";
import "./RetailInventory.css";

function RetailInventory() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Wireless Headphones",
      category: "Electronics",
      stock: 120,
      price: "₹2,499",
      status: "In Stock",
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      stock: 18,
      price: "₹4,999",
      status: "Low Stock",
    },
    {
      name: "Bluetooth Speaker",
      category: "Electronics",
      stock: 75,
      price: "₹1,899",
      status: "In Stock",
    },
    {
      name: "USB-C Cable",
      category: "Accessories",
      stock: 8,
      price: "₹699",
      status: "Low Stock",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-page">

      {/* HEADER */}
      <div className="inventory-header">

        <div>
          <h1>Inventory</h1>

          <p>
            Monitor stock levels and product availability.
          </p>
        </div>

        <button className="add-product-btn">
          + Add Product
        </button>

      </div>

      {/* STAT CARDS */}
      <div className="inventory-stats">

        <div className="inventory-card">
          <div className="inventory-icon green">
            📦
          </div>

          <p>Total Products</p>

          <h2>1,248</h2>

          <span>Products in catalog</span>
        </div>

        <div className="inventory-card">
          <div className="inventory-icon blue">
            ✅
          </div>

          <p>In Stock</p>

          <h2>1,102</h2>

          <span className="green-text">
            88.3% available
          </span>
        </div>

        <div className="inventory-card">
          <div className="inventory-icon orange">
            ⚠️
          </div>

          <p>Low Stock</p>

          <h2>24</h2>

          <span className="orange-text">
            Needs attention
          </span>
        </div>

        <div className="inventory-card">
          <div className="inventory-icon red">
            🚫
          </div>

          <p>Out of Stock</p>

          <h2>8</h2>

          <span className="red-text">
            Restock required
          </span>
        </div>

      </div>

      {/* HEALTH + ALERT */}
      <div className="inventory-layout">

        <div className="section-card">

          <div className="section-heading">

            <div>
              <h2>Inventory Health</h2>

              <p>Current stock availability</p>
            </div>

            <span className="healthy-badge">
              HEALTHY
            </span>

          </div>

          <div className="health-content">

            <div className="health-circle">

              <div>
                <strong>82%</strong>
                <span>Stock Health</span>
              </div>

            </div>

            <div className="health-details">

              <div>
                <span>Total Products</span>
                <strong>1,248</strong>
              </div>

              <div>
                <span>Available</span>
                <strong>1,102</strong>
              </div>

              <div>
                <span>Low Stock</span>
                <strong className="orange-text">
                  24
                </strong>
              </div>

              <div>
                <span>Out of Stock</span>
                <strong className="red-text">
                  8
                </strong>
              </div>

            </div>

          </div>

          <div className="progress-section">

            <div>
              <span>Inventory Health</span>
              <strong>82%</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-value"></div>
            </div>

          </div>

        </div>

        {/* ALERT */}
        <div className="section-card stock-alert">

          <h2>Stock Alert</h2>

          <div className="alert-box">

            <span>⚠️</span>

            <div>

              <h3>
                24 products are running low
              </h3>

              <p>
                Review low-stock products and
                restock them before they run out.
              </p>

            </div>

          </div>

          <button className="view-alert-btn">
            View Low Stock
          </button>

        </div>

      </div>

      {/* PRODUCT TABLE */}
      <div className="section-card product-section">

        <div className="product-heading">

          <div>
            <h2>Product Inventory</h2>

            <p>
              Manage your current products
            </p>
          </div>

          <input
            type="text"
            className="product-search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredProducts.map((product) => (

                <tr key={product.name}>

                  <td>
                    <strong>{product.name}</strong>
                  </td>

                  <td>
                    {product.category}
                  </td>

                  <td>
                    {product.stock}
                  </td>

                  <td>
                    {product.price}
                  </td>

                  <td>

                    <span
                      className={`inventory-status ${
                        product.status === "In Stock"
                          ? "stock-good"
                          : "stock-low"
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                  <td>
                    <button className="manage-btn">
                      Manage
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default RetailInventory;