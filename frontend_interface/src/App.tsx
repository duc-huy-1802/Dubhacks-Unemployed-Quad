import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { WhatWeDo } from './components/WhatWeDo';
import { Impact } from './components/Impact';
import { AboutUs } from './components/AboutUs';
import { GetInvolved } from './components/GetInvolved';
import { HotspotMap } from './components/HotspotMap';
import { OrgDashboard } from './components/OrgDashboard';
import { EventCreation } from './components/EventCreation';
import { VolunteerMap } from './components/VolunteerMap';
import { EventDetails } from './components/EventDetails';
import { Quiz } from './components/Quiz';
import { ReportHotspot } from './components/ReportHotspot';
import { VolunteerForm } from './components/VolunteerForm';

type Page = 
  | 'landing' 
  | 'what-we-do'
  | 'impact'
  | 'about-us'
  | 'get-involved'
  | 'hotspot-map'
  | 'org-dashboard' 
  | 'event-creation' 
  | 'volunteer-map' 
  | 'event-details' 
  | 'quiz' 
  | 'report-hotspot'
  | 'volunteer-form';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={handleNavigate} />;
      case 'what-we-do':
        return <WhatWeDo onNavigate={handleNavigate} />;
      case 'impact':
        return <Impact onNavigate={handleNavigate} />;
      case 'about-us':
        return <AboutUs onNavigate={handleNavigate} />;
      case 'get-involved':
        return <GetInvolved onNavigate={handleNavigate} />;
      case 'hotspot-map':
        return <HotspotMap onNavigate={handleNavigate} />;
      case 'org-dashboard':
        return <OrgDashboard onNavigate={handleNavigate} />;
      case 'event-creation':
        return <EventCreation onNavigate={handleNavigate} />;
      case 'volunteer-map':
        return <VolunteerMap onNavigate={handleNavigate} />;
      case 'event-details':
        return <EventDetails onNavigate={handleNavigate} />;
      case 'quiz':
        return <Quiz onNavigate={handleNavigate} />;
      case 'report-hotspot':
        return <ReportHotspot onNavigate={handleNavigate} />;
      case 'volunteer-form':
        return <VolunteerForm onNavigate={handleNavigate} />;
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  const isFullScreenPage = currentPage === 'hotspot-map';

  return (
    <div className="min-h-screen flex flex-col">
      {!isFullScreenPage && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className="flex-1">
        {renderPage()}
      </main>
      {!isFullScreenPage && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
