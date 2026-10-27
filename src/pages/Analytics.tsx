
import PageHeader from "../component/PageHeader";
import RevenueChart from "../component/RevenueChart";

function Analytics() {
  return (
    <>
      <PageHeader title="Analytics" />

      <section className="analytics-section">
        <h2>Business Analytics</h2>
        <p>Monitor your business performance and trends.</p>

        <div className="customer-summary">
          <div className="customer-summary-card">
            <p>Total Revenue</p>
            <h2>₦48,294</h2>
            <span>+12.8% this month</span>
          </div>

          <div className="customer-summary-card">
            <p>Average Order Value</p>
            <h2>₦26.24</h2>
            <span>+5.4% this month</span>
          </div>

          <div className="customer-summary-card">
            <p>Conversion Rate</p>
            <h2>3.6%</h2>
            <span>+0.5% this month</span>
          </div>
        </div>
        <RevenueChart/>
      </section>
    </>
  );
}

export default Analytics;
