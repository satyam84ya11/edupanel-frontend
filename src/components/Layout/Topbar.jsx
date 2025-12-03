import { useAuth } from '../../context/AuthContext.jsx';

export const Topbar = () => {
  const { user, school, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-3">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">EduPanel</h1>
        <p className="text-xs text-gray-500">
          {school?.name} &middot; {school?.schoolCode}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm font-medium text-gray-800">{user?.name}</div>
          <div className="text-xs text-gray-500 capitalize">{user?.role?.toLowerCase()}</div>
        </div>
        <button
          onClick={logout}
          className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm hover:bg-blue-50"
        >
          Logout
        </button>
      </div>
    </header>
  );
};


