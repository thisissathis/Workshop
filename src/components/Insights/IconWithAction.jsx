import React from 'react'
import "./Insights.scss";

export default function IconWithAction({iconsrc, children, style}) {
  return (
    <div className='icon-with-action' style={style}>
      <div className='logo'>
        <img src={iconsrc} alt="loch Logo" className="logo-image" />
      </div>
      <div className='action-container'>
      {
        children ? children : ""
      }
      </div>
    </div>
  )
}
