import './App.css';
import { Routes, Route } from 'react-router-dom';

import PortfolioPage from './pages/PortfolioPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import InputPage from './pages/InputPage';
import Layout from './component/Layout';

function App() {
  return (
    <div className="">
      <Routes>
        {/* Layout as the parent route */}
        <Route path="/" element={<Layout />}>
          {/* Default route: DashboardPage */}
          <Route index element={<DashboardPage />} />
          
          {/* Other routes */}
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="inputs" element={<InputPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
