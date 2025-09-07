import React from 'react';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>$0.00</p>
        </div>
        <div className="stat-card">
          <h3>Orders Today</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Products</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
