import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiClient } from '../../hooks/useApiClient.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { Input } from '../../components/ui/Input.jsx';
import { Button } from '../../components/ui/Button.jsx';

const LoginPage = () => {
  const [form, setForm] = useState({ schoolCode: '', userid: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { request } = useApiClient();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          schoolCode: form.schoolCode,
          userid: form.userid,
          password: form.password,
        }),
      });
      login(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-blue-100">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
            EP
          </div>
          <h1 className="text-xl font-semibold text-gray-900">EduPanel Login</h1>
          <p className="mt-1 text-xs text-gray-500">Multi-tenant school management dashboard</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="School Code"
            name="schoolCode"
            value={form.schoolCode}
            onChange={handleChange}
            placeholder="e.g. DPS001"
            required
          />
          <Input
            label="User ID"
            name="userid"
            value={form.userid}
            onChange={handleChange}
            placeholder="admin01"
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </Button>
        </form>
        <p className="mt-4 text-center text-[11px] text-gray-400">
          Powered by EduPanel &middot; Blue themed school SaaS
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


