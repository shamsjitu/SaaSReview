/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppSumoDeals from './pages/AppSumoDeals';
import SaaSReviews from './pages/SaaSReviews';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import AboutMe from './pages/AboutMe';
import CategoryDetail from './pages/CategoryDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Resources from './pages/Resources';
import ExpertBlueprints from './pages/ExpertBlueprints';
import HowToGuides from './pages/HowToGuides';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import ScrollToTop from './components/ScrollToTop';
import ContentPlanner from './pages/ContentPlanner';
import Upcoming from './pages/Upcoming';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals/appsumo-lifetime" element={<AppSumoDeals />} />
            <Route path="/reviews/expert-analysis" element={<SaaSReviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/writer-workbench" element={<ContentPlanner />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/nordpass-family-vs-premium" element={<PostDetail overriddenSlug="nordpass-family-vs-premium" />} />
            <Route path="/nordpass-family-vs-premium/" element={<PostDetail overriddenSlug="nordpass-family-vs-premium" />} />
            <Route path="/nordpass-family-plan-review" element={<PostDetail overriddenSlug="nordpass-family-plan-review" />} />
            <Route path="/nordpass-family-plan-review/" element={<PostDetail overriddenSlug="nordpass-family-plan-review" />} />
            <Route path="/blog/expert-blueprints" element={<ExpertBlueprints />} />
            <Route path="/blog/how-to-guides" element={<HowToGuides />} />
            <Route path="/company/about-my-process" element={<AboutMe />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/legal/privacy-policy" element={<Privacy />} />
            <Route path="/legal/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/category/:slug" element={<CategoryDetail />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
