import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #254864;
`;

const Time = styled.div`
  margin: 0;
  font-size: 2vw;
  font-weight: bold;
`;

const Small = styled.small`
  font-size: 0.8vw;
`;
const Countdown = (props) => {
  const [countdownDate, setCountdownDate] = useState(props.endTime);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <Wrapper>
        <Section>
          <Time>{state.days || '0'}</Time>
          <Small>Days</Small>
        </Section>
        <Section>
          <Time>:</Time>
        </Section>
        <Section>
          <Time>{state.hours || '00'}</Time>
          <Small>Hours</Small>
        </Section>
        <Section>
          <Time>:</Time>
        </Section>
        <Section>
          <Time>{state.minutes || '00'}</Time>
          <Small>Minutes</Small>
        </Section>
        <Section>
          <Time>:</Time>
        </Section>
        <Section>
          <Time>{state.seconds || '00'}</Time>
          <Small>Seconds</Small>
        </Section>
      </Wrapper>
    </div>
  );
};

export default Countdown;
