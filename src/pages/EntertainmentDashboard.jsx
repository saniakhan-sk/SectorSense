import "./EntertainmentDashboard.css";

function EntertainmentDashboard() {
  return (
    <div className="entertainment-layout">

      {/* SIDEBAR */}
      <aside className="ent-sidebar">

        <div className="ent-logo">
          <div className="ent-logo-box">S</div>
          <span>SectorSense</span>
        </div>

        <div className="ent-sector">
          🎬 Entertainment
        </div>

        <nav>
          <a className="active">📊 Overview</a>
          <a>👥 Audience</a>
          <a>🎬 Content</a>
          <a>📈 Analytics</a>
          <a>🔥 Trending</a>
          <a>⚠️ Alerts</a>
        </nav>

        <div className="ent-sidebar-bottom">
          <a>⚙️ Settings</a>
          <a href="/">🚪 Logout</a>
        </div>

      </aside>


      {/* MAIN */}
      <main className="ent-main">

        {/* TOPBAR */}
        <header className="ent-topbar">

          <div>
            <h1>Entertainment Overview</h1>
            <p>
              Understand audience behavior and content performance.
            </p>
          </div>

          <div className="ent-user-area">

            <button className="ent-notification">
              🔔
            </button>

            <div className="ent-user">

              <div className="ent-avatar">
                S
              </div>

              <div>
                <strong>Business Admin</strong>
                <small>Entertainment</small>
              </div>

            </div>

          </div>

        </header>


        {/* WELCOME */}
        <section className="ent-welcome">

          <div>

            <span>ENTERTAINMENT INTELLIGENCE</span>

            <h2>
              Your audience is growing! 🎬
            </h2>

            <p>
              Track content engagement, audience activity and revenue trends.
            </p>

          </div>

          <div className="ent-date">
            📅 Today
            <strong>19 September 2026</strong>
          </div>

        </section>


        {/* KPI */}
        <section className="ent-kpi-grid">

          <div className="ent-kpi">

            <div className="ent-kpi-header">
              <span>Active Audience</span>

              <div className="ent-icon purple">
                👥
              </div>
            </div>

            <h2>24,580</h2>

            <p className="ent-positive">
              ↑ 18.4%
              <span> vs last month</span>
            </p>

          </div>


          <div className="ent-kpi">

            <div className="ent-kpi-header">
              <span>Content Views</span>

              <div className="ent-icon blue">
                ▶️
              </div>
            </div>

            <h2>84.2K</h2>

            <p className="ent-positive">
              ↑ 22.1%
              <span> this month</span>
            </p>

          </div>


          <div className="ent-kpi">

            <div className="ent-kpi-header">
              <span>Engagement Rate</span>

              <div className="ent-icon pink">
                ❤️
              </div>
            </div>

            <h2>76%</h2>

            <p className="ent-positive">
              ↑ 9.2%
              <span> this month</span>
            </p>

          </div>


          <div className="ent-kpi">

            <div className="ent-kpi-header">
              <span>Revenue</span>

              <div className="ent-icon green">
                💰
              </div>
            </div>

            <h2>₹18.4L</h2>

            <p className="ent-positive">
              ↑ 15.8%
              <span> this month</span>
            </p>

          </div>

        </section>


        {/* ANALYTICS */}
        <section className="ent-analytics-grid">

          {/* AUDIENCE CHART */}
          <div className="ent-card">

            <div className="ent-card-heading">

              <div>
                <h3>Audience Growth</h3>
                <p>Monthly active audience</p>
              </div>

              <select>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>

            </div>

            <div className="ent-chart">

              <div
                className="ent-bar"
                style={{ height: "45%" }}
              >
                <span>Apr</span>
              </div>

              <div
                className="ent-bar"
                style={{ height: "55%" }}
              >
                <span>May</span>
              </div>

              <div
                className="ent-bar"
                style={{ height: "62%" }}
              >
                <span>Jun</span>
              </div>

              <div
                className="ent-bar"
                style={{ height: "70%" }}
              >
                <span>Jul</span>
              </div>

              <div
                className="ent-bar"
                style={{ height: "82%" }}
              >
                <span>Aug</span>
              </div>

              <div
                className="ent-bar current"
                style={{ height: "94%" }}
              >
                <span>Sep</span>
              </div>

            </div>

          </div>


          {/* CONTENT PERFORMANCE */}
          <div className="ent-card">

            <div className="ent-card-heading">

              <div>
                <h3>Content Performance</h3>
                <p>Current audience engagement</p>
              </div>

              <span className="ent-status">
                HIGH
              </span>

            </div>

            <div className="engagement-score">

              <div className="engagement-circle">

                <strong>76%</strong>

                <span>Engagement</span>

              </div>

              <div className="engagement-info">

                <div>
                  <span>Likes</span>
                  <strong>18.4K</strong>
                </div>

                <div>
                  <span>Comments</span>
                  <strong>4.2K</strong>
                </div>

                <div>
                  <span>Shares</span>
                  <strong>7.8K</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM */}
        <section className="ent-bottom-grid">

          {/* TRENDING CONTENT */}
          <div className="ent-insights">

            <div className="ent-title">

              <h3>🔥 Trending Content</h3>

              <span>Live Trends</span>

            </div>


            <div className="trend-item">

              <div className="trend-number">
                01
              </div>

              <div className="trend-content">

                <strong>
                  New Music Release
                </strong>

                <p>
                  18.4K views • 4.8K interactions
                </p>

              </div>

              <span className="trend-growth">
                +32%
              </span>

            </div>


            <div className="trend-item">

              <div className="trend-number">
                02
              </div>

              <div className="trend-content">

                <strong>
                  Weekend Movie Review
                </strong>

                <p>
                  14.2K views • 3.6K interactions
                </p>

              </div>

              <span className="trend-growth">
                +24%
              </span>

            </div>


            <div className="trend-item">

              <div className="trend-number">
                03
              </div>

              <div className="trend-content">

                <strong>
                  Behind The Scenes
                </strong>

                <p>
                  11.8K views • 2.9K interactions
                </p>

              </div>

              <span className="trend-growth">
                +19%
              </span>

            </div>

          </div>


          {/* AI INSIGHTS */}
          <div className="ent-actions">

            <div className="ent-title">

              <h3>💡 Audience Insights</h3>

              <span>AI Assisted</span>

            </div>

            <div className="audience-insight">

              <div>🕖</div>

              <p>
                <strong>Peak time</strong>
                <br />
                Audience activity is highest between
                7 PM and 10 PM.
              </p>

            </div>

            <div className="audience-insight">

              <div>🎬</div>

              <p>
                <strong>Content opportunity</strong>
                <br />
                Short-form entertainment content is
                receiving higher engagement.
              </p>

            </div>

            <div className="audience-insight">

              <div>📈</div>

              <p>
                <strong>Growth trend</strong>
                <br />
                Audience growth is increasing compared
                with the previous period.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default EntertainmentDashboard;