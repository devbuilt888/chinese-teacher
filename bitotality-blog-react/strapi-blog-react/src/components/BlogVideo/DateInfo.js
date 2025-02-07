import * as React from "react";
import styled from "styled-components";

export function DateInfo({ iconSrc, date }) {
  return (
    <DateWrapper>
      <DateIcon loading="lazy" src={iconSrc} alt="Calendar icon" />
      <DateText>{date}</DateText>
    </DateWrapper>
  );
}

const DateWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const DateIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;

const DateText = styled.div`
  flex-basis: auto;
`;
