function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">

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
            Turn your business data into meaningful insights,
            performance indicators and actionable decisions.
          </p>

          <div className="sector-mini-grid">
            <div>🛍️ Retail</div>
            <div>🏨 Hospitality</div>
            <div>💳 Financial Services</div>
            <div>🎬 Entertainment</div>
          </div>

        </div>

      </div>


      <div className="login-right">

        <div className="login-card">

          <div className="login-heading">

            <div className="card-logo">
              S
            </div>

            <h2>Welcome back</h2>

            <p>
              Sign in to access your business intelligence dashboard.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>Email address</label>

              <input
                type="email"
                placeholder="you@company.com"
                required
              />

            </div>


            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                required
              />

            </div>


            <button
              className="login-button"
              type="submit"
            >
              Continue to Dashboard
              <span>→</span>
            </button>

          </form>


          <div className="login-footer">
            <span>© 2026 SectorSense</span>
            <span>Secure access</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;