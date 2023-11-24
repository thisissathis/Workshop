import React from 'react';
import "./Insights.scss";

export default function InsightsWithContent({alignment, iconSrc, header, description, style}) {
  return (
    <div style={style} className={`insights-with-content insights-${alignment}`}>
      <img src={iconSrc} alt="Icon" className="insights-icon" />
      <div className={`insights-content insights-${alignment}`}>
        <div className="insights-header">{header}</div>
        <div className="insights-subtext">{description}</div>
      </div>
    </div>
  )
}
