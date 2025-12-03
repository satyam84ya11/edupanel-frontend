import { DashboardLayout } from '../../layout/DashboardLayout.jsx';

const Dashboard = () => {
  // Placeholder values; you can later fetch from /admin/dashboard-summary
  const stats = [
    { label: 'Total Students', value: 0 },
    { label: 'Total Faculty', value: 0 },
    { label: 'Attendance Today', value: '0%' },
    { label: 'Pending Fees', value: '₹0' },
  ];

  return (
    <DashboardLayout>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm flex flex-col justify-between"
          >
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
              {s.label}
            </div>
            <div className="mt-3 text-2xl font-semibold text-secondary">{s.value}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;


