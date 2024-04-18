import './CountdownTimer.css'
import React, { useState, useEffect } from 'react';

const targetDate = '2024-05-14T07:30:00';

// eslint-disable-next-line
const CountdownTimer = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className='countdown-timer'>
      {timeLeft.days > 0 && (
        <div className='time'>
          <span>{formatTime(timeLeft.days)}</span> days{' '}
        </div>
      )}
      <div className='time'>
        <span>{formatTime(timeLeft.hours)}</span> hours :{' '}
        <span>{formatTime(timeLeft.minutes)}</span> minutes :{' '}
        <span>{formatTime(timeLeft.seconds)}</span> seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
