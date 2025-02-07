import React from "react";
import styled from "styled-components";

export function ArticleCard({ article }) {
  return (
    <Card>
      <ImageContainer>
        <ArticleImage src={article.image} alt={article.title} />
        <Category>{article.category}</Category>
      </ImageContainer>
      <CardContent>
        <AuthorInfo>
          <Author>
            <AuthorAvatar
              src={article.author.avatar}
              alt={article.author.name}
            />
            <AuthorName>By {article.author.name}</AuthorName>
          </Author>
          <Date>
            <DateIcon src="/icons/calendar.svg" alt="" />
            <span>{article.date}</span>
          </Date>
        </AuthorInfo>
        <Title>{article.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
      </CardContent>
      <AccentBar color={article.accentColor} />
    </Card>
  );
}

const Card = styled.article`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(22, 28, 44, 0.08);
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1.6;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Category = styled.div`
  position: absolute;
  top: 15px;
  right: 70px;
  background: #fc3c68;
  color: white;
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
`;

const CardContent = styled.div`
  padding: 18px 20px 26px;
`;

const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const AuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  color: #000;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: "Outfit", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #000;
`;

const DateIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h3`
  font-family: "Hey Comic", sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #000;
  margin-bottom: 10px;
`;

const Excerpt = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #3a3a3a;
  font-weight: 300;
`;

const AccentBar = styled.div`
  height: 30px;
  background-color: ${(props) => props.color};
`;
