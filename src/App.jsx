import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout><Dashboard/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
