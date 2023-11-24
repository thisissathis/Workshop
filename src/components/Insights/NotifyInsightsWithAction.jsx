import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from '../Card/CardComponent';
import IconWithAction from './IconWithAction';
import Input from '../Input/Input';
import notificationbellIcon from '../../assets/icons/notification-bell-icon.svg';
import barChartIcon from '../../assets/icons/bar-chart-icon.svg';
import clockTimeIcon from '../../assets/icons/clock-time-icon.svg';
import ActionElements from '../Action/ActionElements';
import CheckBox from '../CheckBox/CheckBox.jsx';
import SelectBoxComponent from '../SelectBox/SelectBoxComponent.jsx';

import './Insights.scss';

const cards = [
  {
    content: (
      <div className='notification-card'>
        <IconWithAction
          children={<ActionElements type='link' onClick={() => {}} children='Save' />}
          iconsrc={notificationbellIcon}
        />
        <div className='notify-message'>We’ll be sending notifications to you here</div>
        <Input type='email' placeholder='enter your email' value={'thisissathiskumar@gmail.com'} onChange={() => {}} />
      </div>
    )
  },
  {
    content: (
      <div className='notification-card selectbox-card'>
        <IconWithAction children={<CheckBox defaultChecked={true} onChange={() => {}} />} iconsrc={barChartIcon} />
        <div className='notify-with-selectbox'>
          <div className='notify-message selectbox-notify-message'>Notify me when any wallets move more than</div>
          <SelectBoxComponent />
        </div>
      </div>
    )
  },
  {
    content: (
      <div className='notification-card selectbox-card' style={{ gap: '20px' }}>
        <IconWithAction children={<CheckBox defaultChecked={true} onChange={() => {}} />} iconsrc={clockTimeIcon} />
        <div className='notify-with-selectbox selectbox-with-text'>
          <div className='notify-message selectbox-notify-message'>Notify me when any wallet dormant for</div>
          <SelectBoxComponent />
          <div className='notify-message selectbox-notify-message bottom'>becomes active</div>
        </div>
      </div>
    )
  }
];

const NotifyInsightsWithAction = () => {
  const settings = {
    dots: false,
    infinite: 3,
    speed: 5000, // Adjust the duration for auto-rotate
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 to disable the default autoplay speed
    cssEase: 'linear',
    nextArrow: null,
    prevArrow: null,
    
  };

  return (
    <Slider {...settings} className='notificy-insights-with-action'>
      {cards.map((card, index) => (
        <CardComponent key={index}>{card.content}</CardComponent>
      ))}
    </Slider>
  );
};

export default NotifyInsightsWithAction;
