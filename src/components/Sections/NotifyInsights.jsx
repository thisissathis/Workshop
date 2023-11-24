import React from 'react'
import InsightsWithContent from '../Insights/InsightsWithContent';
import notifybellIcon from "../../assets/icons/notify-bell-icon.svg";
import NotifyInsightsWithAction from '../Insights/NotifyInsightsWithAction';
import "./Sections.scss"
export default function NotifyInsights() {
  return (
    <div className='insights-section'>
      <InsightsWithContent alignment="left" iconSrc={notifybellIcon} header="Get notified when a highly correlated whale makes a move" description="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."/>
      <NotifyInsightsWithAction />
    </div>
  )
}
