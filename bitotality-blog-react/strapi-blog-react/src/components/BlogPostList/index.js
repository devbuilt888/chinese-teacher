import * as React from "react";
import styled from "styled-components";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPostThumbnail } from "./BlogPostThumbnail";

const blogPosts = [
  {
    id: 1,
    title: "A Welcome Return: Rounding Up This Year's Big Comic-Con Moments",
    date: "Tuesday, 12 August 2022",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ffdcc309731e5656b2f22b01512ad44f09170249557145ab8898c5cd53534b?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e",
  },
  {
    id: 2,
    title: "Warner Bros. Discovery Takes Flight at San Diego Comic-Con",
    date: "Tuesday, 15 August 2022",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/df126a701693bfa5db3ec2cef3ed4e2f5d1b076932000ecb84354e1fd368384b?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e",
  },
  {
    id: 3,
    title: "Christina Ricci Stars as Harley Quinn in New Spotify Series",
    date: "Tuesday, 20 August 2022",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e5058caf6f5a7c2e211242e5c47fd94e28eb6bdab376fb822cf07c6c41b821f5?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e",
  },
  {
    id: 4,
    title: "Entering Sandman: All You Need to Know About Neil Gaiman's Classic",
    date: "Tuesday, 25 August 2022",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d12b5405b55d46b06b626452d52a3e1e2d4091595b7583dda6e936e1ba55a120?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e",
  },
];

function BlogPostList() {
  return (
    <BlogContainer>
      <ContentWrapper>
        <ThumbnailColumn>
          <ThumbnailGrid>
            {blogPosts.map((post) => (
              <BlogPostThumbnail key={post.id} src={post.thumbnail} />
            ))}
          </ThumbnailGrid>
        </ThumbnailColumn>
        <MainColumn>
          <PostsContainer>
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} title={post.title} date={post.date} />
            ))}
          </PostsContainer>
        </MainColumn>
      </ContentWrapper>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  border-radius: 0;
  max-width: 586px;
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  position: relative;
  left: 50vw;
  top: 150vh;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ThumbnailColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 21%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ThumbnailGrid = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 79%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PostsContainer = styled.div`
  z-index: 10;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: stretch;
  align-items: start;
  color: rgba(0, 0, 0, 1);
  margin: auto 0;
  font: 400 20px/30px Hey Comic, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 27px -12px 0 0;
  }
`;

export default BlogPostList;
