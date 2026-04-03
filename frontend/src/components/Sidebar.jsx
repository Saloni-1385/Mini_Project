import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePortal } from '../context/PortalContext';
import {
  MdDashboard, MdPolicy, MdAssignment, MdPeople, MdSupervisorAccount,
  MdBarChart, MdSettings, MdShield, MdCreditCard, MdAccountCircle,
  MdHeadsetMic, MdLogout, MdKeyboardArrowRight, MdLocalHospital,
  MdAutorenew, MdVideocam, MdChat, MdCall, MdChatBubbleOutline, MdOutlineShield, MdClose
} from 'react-icons/md';

const adminNav = [
  { section: 'MAIN', items: [
    { icon: <MdDashboard />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <MdPolicy />, label: 'Policies', path: '/admin/policies', badge: null },
    { icon: <MdAssignment />, label: 'Claims', path: '/admin/claims', badge: null },
    { icon: <MdPeople />, label: 'Users', path: '/admin/users' },
    { icon: <MdSupervisorAccount />, label: 'Agents', path: '/admin/agents' },
  ]},
  { section: 'INSIGHTS', items: [
    { icon: <MdBarChart />, label: 'Reports', path: '/admin/reports' },
    { icon: <MdSettings />, label: 'Settings', path: '/admin/settings' },
  ]},
];

const userNav = [
  { section: 'MAIN SERVICES', items: [
    { icon: <MdPolicy />, label: 'Insurance Policies', path: '/user/dashboard' },
    { icon: <MdLocalHospital />, label: 'Emergency Services', path: '/user/emergency' },
  ]},
  { section: 'QUICK & EASY', items: [
    { icon: <MdAssignment />, label: 'File a Claim', path: '/user/claims', badge: null },
    { icon: <MdAutorenew />, label: 'Quick Renewal', path: '/user/renewal' },
  ]},
  { section: 'HELP & SUPPORT', items: [
    { icon: <MdVideocam />, label: 'Video Call Insurance', path: '/user/videocall' },
    { icon: <MdChat />, label: 'WhatsApp', path: '/user/whatsapp' },
    { icon: <MdCall />, label: 'Call Us', path: '/user/call' },
    { icon: <MdChatBubbleOutline />, label: 'Start a Chat', path: '/user/chat' },
  ]},
];

const Sidebar = ({ isOpen, onClose }) => {
  const { portal, switchPortal } = usePortal();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = portal === 'admin' ? adminNav : userNav;

  const handleSwitch = (p) => {
    switchPortal(p);
    navigate(p === 'admin' ? '/admin/dashboard' : '/user/dashboard');
  };

  const handleNav = (path) => navigate(path);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <div className="logo-icon">
            <MdOutlineShield style={{ color: '#fff', fontSize: 20 }} />
          </div>
          <div className="logo-text">
            <span className="logo-name">SOLIDARITY</span>
            <span className="logo-tagline">Insurance Services</span>
          </div>
        </div>
        {/* Animated Close Button */}
        <button className="sidebar-close-btn" onClick={onClose} title="Close Sidebar">
          <MdClose />
        </button>
      </div>

      {/* Portal Toggle */}
      <div className="sidebar-portal-toggle">
        <div className="portal-toggle-btns">
          <button
            className={`portal-btn ${portal === 'admin' ? 'active' : ''}`}
            onClick={() => handleSwitch('admin')}
          >
            Admin
          </button>
          <button
            className={`portal-btn ${portal === 'user' ? 'active' : ''}`}
            onClick={() => handleSwitch('user')}
          >
            User
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map((section) => (
          <div key={section.section}>
            <div className="nav-section-label">{section.section}</div>
            {section.items.map((item) => (
              <div
                key={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => handleNav(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
            ))}
          </div>
        ))}
      </nav>

      {/* Footer User Card */}
      <div className="sidebar-footer">
        <div className="sidebar-user-card">
          <div className={`user-avatar ${portal === 'admin' ? 'admin' : 'user-av'}`}>
            {portal === 'admin' ? 'A' : 'U'}
          </div>
          <div className="user-info">
            <div className="user-name">{portal === 'admin' ? 'Admin User' : 'User'}</div>
            <div className="user-role">{portal === 'admin' ? 'Super Administrator' : 'Policy Holder'}</div>
          </div>
          <MdKeyboardArrowRight style={{ color: 'var(--text-muted)', fontSize: 18 }} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
