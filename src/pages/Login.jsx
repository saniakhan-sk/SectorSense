import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sector, setSector] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate fields
    if (!email || !password || !sector) {
      alert("Please fill all fields and select a sector.");
      return;
    }

    // Save login information
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userSector", sector);

    // Go to the correct dashboard route
    navigate(`/dashboard/${sector}`);
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="brand">
          <div className="brand-icon">S</div>
          <span>SectorSense</span>
        </div>

        <div className="hero-content">

          <span className="hero-tag">
            SMART BUSINESS INTELLIGENCE
          </span>

          <h1>
            One platform.
            <br />
            <span>Four industries.</span>
          </h1>

          <p>
            Monitor performance, understand trends, and make
            data-driven decisions with sector-specific intelligence.
          </p>

          <div className="sector-mini-grid">

            <div>🏨 Hospitality</div>

            <div>💳 Finance</div>

            <div>🎬 Entertainment</div>

            <div>🛍️ Retail</div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-card">

          <div className="login-heading">

            <h2>Welcome back</h2>

            <p>
              Sign in to access your business dashboard.
            </p>

          </div>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-group">

              <label>Email address</label>

              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            {/* SECTOR */}
            <div className="input-group">

              <label>Select your industry</label>

              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                required
              >

                <option value="">
                  Choose your sector
                </option>

                <option value="hospitality">
                  🏨 Hospitality
                </option>

                <option value="financial-services">
                  💳 Financial Services
                </option>

                <option value="entertainment">
                  🎬 Entertainment
                </option>

                <option value="retail">
                  🛍️ Retail
                </option>

              </select>

            </div>

            {/* LOGIN BUTTON */}
            <button
              className="login-button"
              type="submit"
            >
              Continue to Dashboard
              <span>→</span>
            </button>

          </form>

          <div className="login-footer">

            <span>
              © 2026 SectorSense
            </span>

            <span>
              Secure access
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;