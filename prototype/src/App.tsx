import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import PracticeSession from './pages/PracticeSession';
import Report from './pages/Report';
import Progress from './pages/Progress';
import Review from './pages/Review';
import ReviewSession from './pages/ReviewSession';
import Clients from './pages/Clients';
import ClientDetail from './pages/ClientDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* App routes with sidebar layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/review" element={<Review />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<ClientDetail />} />
        </Route>

        {/* Full screen routes */}
        <Route path="/practice/session" element={<PracticeSession />} />
        <Route path="/report" element={<Report />} />
        <Route path="/review/session" element={<ReviewSession />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
