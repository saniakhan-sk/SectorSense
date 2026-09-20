import "./RetailDashboard.css";
import Sidebar from "../components/Sidebar";
import { Outlet, useParams } from "react-router-dom";

function DashboardLayout() {
  const { sector } = useParams();

  const sectorName = {
    retail: "Retail",
    hospitality: "Hospitality",
    "financial-services": "Financial Services",
    entertainment: "Entertainment",
  };

  return (
    <div className="dashboard-layout">
      <Sidebar sector={sectorName[sector] || "Retail"} />

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;