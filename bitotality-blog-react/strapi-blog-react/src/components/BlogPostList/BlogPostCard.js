import * as React from "react";
import styled from "styled-components";

export function BlogPostCard({ title, date }) {
  return (
    <CardContainer>
      <PostTitle>{title}</PostTitle>
      <DateContainer>
        <DateIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d16457c0579a448c49924af58ef717846bfe83ad8aeb458e30dc63a2598f47?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e"
          alt=""
        />
        <DateText>{date}</DateText>
      </DateContainer>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  width: 100%;
  margin-top: 41px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const PostTitle = styled.h2`
  font: 400 20px/30px Hey Comic, sans-serif;
  margin: 0;
`;

const DateContainer = styled.div`
  display: flex;
  margin-top: 9px;
  gap: 3px;
  font: 300 14px Outfit, sans-serif;
`;

const DateIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;

const DateText = styled.time`
  flex-basis: auto;
`;
