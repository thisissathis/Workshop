import React from 'react'
import NotifyInsights from '../components/Sections/NotifyInsights';
import WatchInsights from '../components/Sections/WatchInsights';
import Testimonials from '../components/Sections/Testimonials';
import "./PageContent.scss"

export default function LandingPageContent() {
  return (
    <div className="landing-page-content">
      <NotifyInsights/>
      <WatchInsights/>
      <Testimonials/>
    </div>
  )
}
