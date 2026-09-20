const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001;

// HOME
app.get("/", (req, res) => {
  res.json({
    message: "SIH SectorSense Backend is running 🚀",
  });
});


// SECTORS
app.get("/api/sectors", (req, res) => {
  res.json([
    "Hospitality",
    "Financial Services",
    "Entertainment",
    "Retail",
  ]);
});


// HOSPITALITY
app.get("/api/dashboard/hospitality", (req, res) => {
  res.json({
    sector: "Hospitality",

    customers: 1248,
    revenue: 482000,
    growth: 12.5,
    demand: "High",

    bookings: 842,
    occupancy: 78,
    averageRating: 4.6,
    cancellations: 34,
  });
});


// FINANCE
app.get("/api/dashboard/finance", (req, res) => {
  res.json({
    sector: "Financial Services",

    customers: 856,
    revenue: 842000,
    growth: 8.7,
    demand: "Medium",

    transactions: 4268,
    activeAccounts: 724,
    loanApplications: 186,
    fraudAlerts: 12,
  });
});


// ENTERTAINMENT
app.get("/api/dashboard/entertainment", (req, res) => {
  res.json({
    sector: "Entertainment",

    customers: 2145,
    revenue: 673000,
    growth: 18.2,
    demand: "Very High",

    activeAudience: 24580,
    contentViews: 84200,
    engagementRate: 76,
    trendingContent: 18,
  });
});


// RETAIL
app.get("/api/dashboard/retail", (req, res) => {
  res.json({
    sector: "Retail",

    customers: 3486,
    revenue: 591000,
    growth: 15.4,
    demand: "High",

    orders: 3486,
    lowStockItems: 24,
    inventoryHealth: 82,
    products: 1248,
  });
});


// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});