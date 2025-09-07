// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import DashboardContent from './components/Dashboard/DashboardContent';
import './App.css';


function App() {
    const [activeTab, setActiveTab]=useState('dashboard');

    const handleTabSwitch=(tabName)=>{
        setActiveTab(tabName);
    };
    const renderContent=()=>{
        switch(activeTab){
            case 'dashboard':
                return<DashboardContent />;
            case 'reports':
                return <div>Reports contens coming soon</div>;
            case 'inventory':
                return <div>Inventory contents coming soon</div>;
                case 'setting':
                return <div>Setting contents coming soon</div>;
            default:
                return <DashboardContent />;
        }
    };
 return (
  <div className='app'>
    <Sidebar
      activeTab={activeTab}
      onTabSwitch={handleTabSwitch}
    />
    <main className='main-content'>
      {renderContent()}
    </main>
  </div>
 );
}

export default App;
