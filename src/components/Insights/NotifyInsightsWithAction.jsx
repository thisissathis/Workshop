import React from 'react';
import CardComponent from '../Card/CardComponent';
import "./Insights.scss";
import IconWithAction from './IconWithAction';
import Input from '../Input/Input';
import notificationbellIcon from "../../assets/icons/notification-bell-icon.svg";
import barChartIcon from "../../assets/icons/bar-chart-icon.svg";
import clockTimeIcon from "../../assets/icons/clock-time-icon.svg";
import ActionElements from '../Action/ActionElements';
import CheckBox from '../CheckBox/CheckBox.jsx';
import SelectBoxComponent from '../SelectBox/SelectBoxComponent.jsx';

const notifyCardStyle  = { 
  borderRadius: '8.4px',
  maxWidth: 'max-content', 
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 27.5%, rgba(22, 93, 255, 0.16) 157.71%), #FFF',
  boxShadow: '0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)'
}
const notifionCardStyle  = { 
  borderRadius: '8.4px',
  maxWidth: 'max-content', 
  background: '#FFF',
  boxShadow: '0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)'
}


export default function NotifyInsightsWithAction() {
  return (
    <div className='notificy-insights-with-action'>
      <CardComponent style={notifyCardStyle}>
        <div className='notification-card'>
          <IconWithAction children={<ActionElements type="link" onClick={()=>{}} children="Save"/>} iconsrc={notificationbellIcon} />
          <div className='notify-message'>We’ll be sending notifications to you here</div>
          <Input type="email" placeholder="enter your email" value={"thisissathiskumar@gmail.com"} onChange={()=>{}}/>
        </div>
      </CardComponent>
      <CardComponent style={notifionCardStyle}>
        <div className='notification-card selectbox-card'>
          <IconWithAction children={<CheckBox defaultChecked={true} onChange={()=>{}} />} iconsrc={barChartIcon} />
          <div className='notify-with-selectbox'>
            <div className='notify-message selectbox-notify-message'>Notify me when any wallets move more than</div>
            <SelectBoxComponent/>
          </div>
        </div>
      </CardComponent>
      <CardComponent style={notifionCardStyle}>
        <div className='notification-card selectbox-card' style={{gap: '20px'}}>
          <IconWithAction children={<CheckBox defaultChecked={true} onChange={()=>{}} />} iconsrc={clockTimeIcon} />
          <div className='notify-with-selectbox selectbox-with-text'>
            <div className='notify-message selectbox-notify-message'>Notify me when any wallet dormant for</div>
            <SelectBoxComponent/>
            <div className='notify-message selectbox-notify-message bottom'>becomes active</div>
          </div>
        </div>
      </CardComponent>
    </div>
  )
}
