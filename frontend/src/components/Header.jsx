import React, { useState } from 'react';
import { MdSearch, MdNotifications, MdRefresh, MdFullscreen, MdMenu } from 'react-icons/md';
import { usePortal } from '../context/PortalContext';

const pageMeta = {
  '/admin/dashboard':  { title: 'Dashboard', subtitle: 'Welcome back, Admin! Here\'s what\'s happening today.' },
  '/admin/policies':   { title: 'Policy Management', subtitle: 'Create, view, and manage all insurance policies.' },
  '/admin/claims':     { title: 'Claims Management', subtitle: 'Review and process customer claims.' },
  '/admin/users':      { title: 'User Management', subtitle: 'Manage policyholders and client accounts.' },
  '/admin/agents':     { title: 'Agents', subtitle: 'Manage your insurance agents and their performance.' },
  '/admin/reports':    { title: 'Reports & Analytics', subtitle: 'In-depth insights and business intelligence.' },
  '/admin/settings':   { title: 'Settings', subtitle: 'Configure system preferences and notifications.' },
  '/user/dashboard':   { title: 'My Dashboard', subtitle: 'Welcome back, John! Here\'s your policy overview.' },
  '/user/policies':    { title: 'My Policies', subtitle: 'View and manage your active insurance policies.' },
  '/user/claims':      { title: 'My Claims', subtitle: 'Track and submit your insurance claims.' },
  '/user/payments':    { title: 'Payments', subtitle: 'View your payment history and upcoming dues.' },
  '/user/profile':     { title: 'My Profile', subtitle: 'Manage your personal information and preferences.' },
  '/user/support':     { title: 'Support & Help', subtitle: 'Get help and answers to your questions.' },
};

const Header = ({ currentPath, onMenuClick }) => {
  const { portal } = usePortal();
  const meta = pageMeta[currentPath] || { title: 'InsureIQ', subtitle: '' };
  const [search, setSearch] = useState('');

  return (
    <>
      <div className={`portal-indicator ${portal === 'user' ? 'user-portal' : ''}`} />
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            className="hamburger-toggle" 
            onClick={onMenuClick} 
            title="Toggle Sidebar"
          >
            <MdMenu />
          </button>
          <div className="header-title">
            <h2 className="page-title">{meta.title}</h2>
            <p className="page-subtitle">{meta.subtitle}</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="header-search">
            <MdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button className="icon-btn" title="Refresh">
            <MdRefresh />
          </button>
          <button className="icon-btn" title="Notifications">
            <MdNotifications />
            <span className="notif-dot" />
          </button>
          <button className="icon-btn" title="Fullscreen">
            <MdFullscreen />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
