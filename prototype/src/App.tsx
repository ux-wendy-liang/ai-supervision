import { HashRouter, Routes, Route } from 'react-router-dom';
import CoachLayout from './components/CoachLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import CoachDirectory from './pages/CoachDirectory';
import CoachProfile from './pages/CoachProfile';
import BookingConfirmation from './pages/BookingConfirmation';
import CoachRegister from './pages/CoachRegister';
import MyBookings from './pages/MyBookings';
// Coach Portal
import CoachDashboard from './pages/coach/CoachDashboard';
import CoachBookings from './pages/coach/CoachBookings';
import CoachAvailability from './pages/coach/CoachAvailability';
import CoachProfileEdit from './pages/coach/CoachProfileEdit';
import CoachSupervision from './pages/coach/CoachSupervision';
import SessionReview from './pages/coach/SessionReview';
import LiveSession from './pages/coach/LiveSession';
import LiveSessionIteration1 from './pages/coach/LiveSessionIteration1';

// Case Study
import CaseStudy from './pages/CaseStudy';
import CaseStudyAntd from './pages/CaseStudyAntd';
import CaseStudyMinimal from './pages/CaseStudyMinimal';
import CaseStudyStory from './pages/CaseStudyStory';

// 20 Case Study Variants
import CaseStudyIndex from './pages/case-study/CaseStudyIndex';
import MovieStyle from './pages/case-study/MovieStyle';
import InterviewStyle from './pages/case-study/InterviewStyle';
import JournalStyle from './pages/case-study/JournalStyle';
import LetterStyle from './pages/case-study/LetterStyle';
import DashboardStyle from './pages/case-study/DashboardStyle';
import BeforeAfterStyle from './pages/case-study/BeforeAfterStyle';
import MetricsWallStyle from './pages/case-study/MetricsWallStyle';
import ResearchStyle from './pages/case-study/ResearchStyle';
import ComicStyle from './pages/case-study/ComicStyle';
import InfographicStyle from './pages/case-study/InfographicStyle';
import MagazineStyle from './pages/case-study/MagazineStyle';
import NotionStyle from './pages/case-study/NotionStyle';
import JourneyMapStyle from './pages/case-study/JourneyMapStyle';
import HypothesisStyle from './pages/case-study/HypothesisStyle';
import DecisionTreeStyle from './pages/case-study/DecisionTreeStyle';
import OnePagerStyle from './pages/case-study/OnePagerStyle';
import CardSwipeStyle from './pages/case-study/CardSwipeStyle';
import BulletStyle from './pages/case-study/BulletStyle';
import SlideshowStyle from './pages/case-study/SlideshowStyle';
import PrototypeEmbedStyle from './pages/case-study/PrototypeEmbedStyle';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public routes - Coach Ecosystem */}
        <Route path="/" element={<Landing />} />
        <Route path="/coaches" element={<CoachDirectory />} />
        <Route path="/coaches/:id" element={<CoachProfile />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/coach/register" element={<CoachRegister />} />
        <Route path="/login" element={<Login />} />

        {/* Coach Portal - with sidebar layout */}
        <Route element={<CoachLayout />}>
          <Route path="/coach/dashboard" element={<CoachDashboard />} />
          <Route path="/coach/bookings" element={<CoachBookings />} />
          <Route path="/coach/availability" element={<CoachAvailability />} />
          <Route path="/coach/profile" element={<CoachProfileEdit />} />
          <Route path="/coach/supervision" element={<CoachSupervision />} />
        </Route>

        {/* Coach full screen routes */}
        <Route path="/coach/supervision/session" element={<LiveSession />} />
        <Route path="/coach/supervision/session/iteration1" element={<LiveSessionIteration1 />} />
        <Route path="/coach/supervision/review/:id" element={<SessionReview />} />

        {/* Case Study Gallery - 20 variants */}
        <Route path="/case-study" element={<CaseStudyIndex />} />
        <Route path="/case-study/movie" element={<MovieStyle />} />
        <Route path="/case-study/interview" element={<InterviewStyle />} />
        <Route path="/case-study/journal" element={<JournalStyle />} />
        <Route path="/case-study/letter" element={<LetterStyle />} />
        <Route path="/case-study/dashboard" element={<DashboardStyle />} />
        <Route path="/case-study/before-after" element={<BeforeAfterStyle />} />
        <Route path="/case-study/metrics-wall" element={<MetricsWallStyle />} />
        <Route path="/case-study/research" element={<ResearchStyle />} />
        <Route path="/case-study/comic" element={<ComicStyle />} />
        <Route path="/case-study/infographic" element={<InfographicStyle />} />
        <Route path="/case-study/magazine" element={<MagazineStyle />} />
        <Route path="/case-study/notion" element={<NotionStyle />} />
        <Route path="/case-study/journey-map" element={<JourneyMapStyle />} />
        <Route path="/case-study/hypothesis" element={<HypothesisStyle />} />
        <Route path="/case-study/decision-tree" element={<DecisionTreeStyle />} />
        <Route path="/case-study/one-pager" element={<OnePagerStyle />} />
        <Route path="/case-study/card-swipe" element={<CardSwipeStyle />} />
        <Route path="/case-study/bullet" element={<BulletStyle />} />
        <Route path="/case-study/slideshow" element={<SlideshowStyle />} />
        <Route path="/case-study/prototype-embed" element={<PrototypeEmbedStyle />} />

        {/* Legacy case study routes */}
        <Route path="/case-study-old" element={<CaseStudy />} />
        <Route path="/case-study-antd" element={<CaseStudyAntd />} />
        <Route path="/case-study-minimal" element={<CaseStudyMinimal />} />
        <Route path="/case-study-story" element={<CaseStudyStory />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
