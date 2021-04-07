import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Header from './Header';
// import Header from '../Header/Header.js';
import Monitor from './Monitor';
import CalendarGrid from './CalendarGrid';
import { HeaderCalendarDescription } from './HeaderCalendarDescription/HeaderCalendarDescription.js';

const FormCalendarWrapper = styled('div')``;
const ShadowWrapper = styled('div')``;
const BootstrapContainer = styled('div')``;

export const Calendar = () => {
  moment.updateLocale('ru', { week: { down: 1 } });
  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  window.moment = moment;

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, 'month'));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <>
      <HeaderCalendarDescription />
      <BootstrapContainer className="container">
        <FormCalendarWrapper className="FormCalendarWrapper">
          <ShadowWrapper className="ShadowWrapper">
            <Header />
            <Monitor
              today={today}
              prevHandler={prevHandler}
              todayHandler={todayHandler}
              nextHandler={nextHandler}
            />
            <CalendarGrid startDay={startDay} today={today} />
          </ShadowWrapper>
        </FormCalendarWrapper>
      </BootstrapContainer>
    </>
  );
};
