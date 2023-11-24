import React from 'react'
import watchEyeIcon from "../../assets/icons/watch-eye-icon.svg";
import watchCohortInsights from "../../assets/images/cohort-full-size.png";
import InsightsWithContent from '../Insights/InsightsWithContent';
import "./Sections.scss";
import ImageView from '../ImageView/ImageView';

export default function WatchInsights() {
  return (
    <div className='insights-section'>
        <ImageView src={watchCohortInsights} className="image-view" alt="watchCohortInsights" />
        <InsightsWithContent style={{margin:"17px 0px"}} alignment="right" iconSrc={watchEyeIcon} header="Watch what the whales are doing" description="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing." />
    </div>
  )
}

