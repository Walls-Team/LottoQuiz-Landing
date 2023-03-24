import React from 'react';
import TimeDisplay from './timeDisplay';
import { useCountdown } from './useCountdown';
import '../css/countdownTimer.scss';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <TimeDisplay value={days} type={'Dias'} isDanger={days <= 1} />
        <TimeDisplay value={hours} type={'Horas'} isDanger={(days <=1 && hours <=6)} />
        <TimeDisplay value={minutes} type={'Minutos'} isDanger={(days <=1 && hours <=6 && minutes <= 60)} />
        <TimeDisplay value={seconds} type={'Segundos'} isDanger={(days <=1 && hours <=6 && minutes <= 60 && seconds <= 60) } />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;