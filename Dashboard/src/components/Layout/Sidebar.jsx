import React from 'react';
import './style/Sidebar.css' 

const Sidebar =({activeTab, onTabSwitch}) =>{
    return(
        <>
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='logo'>P</div>
                <span className='logo-text'>POS System</span>
            </div>
        </div>

        <div className='search-cotainer'>
            <div className='search-icon'>🔍</div>
            <input type="text"
            placeholder='search' 
            className='search-input'/>
        </div>


        <nav className='sidebar-nav'>
            <div className='nav-section'>
                <div 
                 className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                 onClick={()=>onTabSwitch('dashboard')}
                 >
            <div className='nav-icon'>📊</div>
            <span className='nav-label'>Dashboard</span>
                </div>

                <div 
                 className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
                 onClick={()=>onTabSwitch('reports')}
                 >
            <div className='nav-icon'>📈</div>
            <span className='nav-label'>Reports</span>
                </div>
                <div 
                 className={`nav-item ${activeTab === 'inventory' ? 'active' : ''}`}
                 onClick={()=>onTabSwitch('inventory')}
                 >
            <div className='nav-icon'>📈</div>
            <span className='nav-label'>Inventory</span>
                </div>
                <div 
                 className={`nav-item ${activeTab === 'setting' ? 'active' : ''}`}
                 onClick={()=>onTabSwitch('setting')}
                 >
            <div className='nav-icon'>⚙️</div>
            <span className='nav-label'>setting</span>
                </div>
                
            </div>

            
        </nav>
        <div className="user-profile">
        <div className="user-avatar">AC</div>
        <div className="user-info">
          <div className="user-name">Admin User</div>
          <div className="user-email">admin@possystem.com</div>
        </div>
        <div className="user-menu">⋮</div>
      </div>
        </>
    )
}
export default Sidebar;