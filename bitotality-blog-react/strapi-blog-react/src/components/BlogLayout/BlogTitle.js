import React from "react";
import styled from "styled-components";
import calendar from "../../images/calendar.png";

export function BlogTitle(props) {
  return (
    <TitleSection>
      <Category> {props.featuredContent}</Category>
      <Divider />
      <Date>
        <img className="calendar-img" src={calendar} />

        {/* <CalendarIcon src="/icons/calendar.svg" alt="" /> */}
        <span>Tuesday, 12 August 2022</span>
      </Date>
      <Title>{props.title}</Title>
    </TitleSection>
  );
}

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 29px;
`;

const Category = styled.div`
  flex: 1;
  color: #505050;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const Divider = styled.div`
  flex: 1;
  width: 1px;
  height: 20px;
  background-color: #505050;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #505050;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 80px;
  color: #000000;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 59px;
  }
`;
