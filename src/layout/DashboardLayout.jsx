import { Sidebar } from './Sidebar.jsx';
import { Topbar } from './Topbar.jsx';

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-6 py-4">{children}</main>
      </div>
    </div>
  );
};


