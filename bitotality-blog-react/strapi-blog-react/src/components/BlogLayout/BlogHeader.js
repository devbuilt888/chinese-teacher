import React from "react";
import styled from "styled-components";
import calendar from "../../images/calendar.png";

export function BlogHeader() {
  return (
    <Header>
      <MetaInfo>
        <Category>Marvel News</Category>
        <MetaDivider />
        <Date>
          <img className="calendar-img" src={calendar} />
          {/* <DateIcon src="/icons/calendar.svg" alt="" /> */}
          Tuesday, 12 August 2022
        </Date>
      </MetaInfo>
      <Title>
        A Welcome Return: Rounding Up This Year's Big Comic-Con Moments
      </Title>
      <Author>
        <AuthorImage src="/images/author.jpg" alt="Cody Stark" />
        <AuthorName>By Cody Stark</AuthorName>
      </Author>
    </Header>
  );
}

const Header = styled.header`
  margin-bottom: 40px;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #505050;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const Category = styled.span``;

const MetaDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #505050;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const DateIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h1`
  font-family: "Hey Comic", sans-serif;
  font-size: 60px;
  line-height: 80px;
  color: #000;
  margin: 28px 0;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 59px;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  line-height: 30px;
`;

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  color: #000;
`;
