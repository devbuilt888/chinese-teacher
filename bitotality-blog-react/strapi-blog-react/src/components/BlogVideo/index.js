import * as React from "react";
import styled from "styled-components";
import { AuthorInfo } from "./AuthorInfo";
import { DateInfo } from "./DateInfo";

function BlogVideo() {
  return (
    <BlogContainer>
      <ArticleWrapper>
        <HeroImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b347a42cadf8ff1af522d54bb7eef172a4bdf58aad339dbd7b0808aa8a2d05?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e"
          alt="Comic-Con event coverage"
        />
        <LogoCircle />
        <CategoryTag>Marvel Comics</CategoryTag>
        <ContentSection>
          <ArticleTitle>
            A Welcome Return: Rounding Up This Year's Big Comic-Con Moments
          </ArticleTitle>
          <MetaInfoContainer>
            <AuthorInfo
              avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e29426bf1f8d0f970b30aab25fbd5d4983918f279ca6cb5497d8b379333961?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e"
              authorName="Chance Geidt"
            />
            <DateInfo
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d16457c0579a448c49924af58ef717846bfe83ad8aeb458e30dc63a2598f47?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e"
              date="Tuesday, 12 August 2022"
            />
          </MetaInfoContainer>
        </ContentSection>
      </ArticleWrapper>
    </BlogContainer>
  );
}

export default BlogVideo;

const BlogContainer = styled.div`
  border-radius: 0;
  display: flex;
  max-width: 40%;
  flex-direction: column;
  color: #fff;
  position: relative;
  top: 200vh;
`;

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 4px 24px rgba(22, 28, 44, 0.08);
  position: relative;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-top: 100px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const LogoCircle = styled.div`
  position: relative;
  border-radius: 50%;
  align-self: center;
  display: flex;
  width: 60px;
  height: 60px;
`;

const CategoryTag = styled.div`
  position: relative;
  align-self: start;
  border-radius: 6px;
  background-color: #fc3c68;
  margin: 21px 0 0 35px;
  padding: 8px 15px;
  font: 500 16px Outfit, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const ContentSection = styled.div`
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 24px rgba(22, 28, 44, 0.08);
  display: flex;
  flex-direction: column;
  padding: 23px 80px 23px 34px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ArticleTitle = styled.h1`
  font: 400 36px/46px Hey Comic, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MetaInfoContainer = styled.div`
  align-self: start;
  display: flex;
  margin-top: 15px;
  gap: 33px;
  font: 500 14px/30px Outfit, sans-serif;
`;
