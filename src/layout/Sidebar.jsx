import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/students', label: 'Students' },
  { to: '/teachers', label: 'Teachers' },
  { to: '/staff', label: 'Staff' },
  { to: '/attendance', label: 'Attendance' },
  { to: '/fees', label: 'Fees' },
  { to: '/reports', label: 'Reports' },
  { to: '/settings', label: 'Settings' },
];

export const Sidebar = () => {
  const { school } = useAuth();

  return (
    <aside className="flex h-screen flex-col bg-blue-900 text-white w-64">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-blue-800">
        <div className="h-10 w-10 rounded-lg bg-blue-300/20 flex items-center justify-center font-bold text-blue-300">
          EP
        </div>
        <div>
          <div className="font-semibold text-sm uppercase tracking-wide">EduPanel</div>
          <div className="text-xs text-blue-200 truncate max-w-[150px]">
            {school?.name || 'School Admin'}
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'text-blue-100 hover:bg-blue-800/60'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};


