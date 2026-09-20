import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import SectorDashboard from "./pages/SectorDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard/:sector"
          element={<DashboardLayout />}
        >

          {/* Default dashboard */}
          <Route
            index
            element={
              <Navigate
                to="overview"
                replace
              />
            }
          />

          {/* All dashboard sections */}
          <Route
            path=":section"
            element={<SectorDashboard />}
          />

        </Route>

        {/* Unknown URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;