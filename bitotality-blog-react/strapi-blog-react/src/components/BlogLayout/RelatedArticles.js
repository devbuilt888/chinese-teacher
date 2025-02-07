import React from "react";
import styled from "styled-components";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles() {
  const articles = [
    {
      id: 1,
      image: "/images/article1.jpg",
      category: "Fan News",
      author: {
        name: "Chance Geidt",
        avatar: "/images/authors/chance.jpg",
      },
      date: "Tuesday, 12 August 2022",
      title:
        "Entering Sandman: All You Need to Know About Neil Gaiman's Classic",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      accentColor: "#EFC93A",
    },
    {
      id: 2,
      image: "/images/article2.jpg",
      category: "Fan News",
      author: {
        name: "Randy Kors",
        avatar: "/images/authors/randy.jpg",
      },
      date: "Tuesday, 12 August 2022",
      title: "A Welcome Return: Rounding Up This Year's Big Comic-Con Moments",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      accentColor: "#06D5A1",
    },
    {
      id: 3,
      image: "/images/article3.jpg",
      category: "Fan News",
      author: {
        name: "Maren Herwitz",
        avatar: "/images/authors/maren.jpg",
      },
      date: "Tuesday, 12 August 2022",
      title: "Christina Ricci Stars as Harley Quinn in New Spotify Series",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      accentColor: "#0EC8ED",
    },
    {
      id: 4,
      image: "/images/article4.jpg",
      category: "Fan News",
      author: {
        name: "Maria Levin",
        avatar: "/images/authors/maria.jpg",
      },
      date: "Tuesday, 12 August 2022",
      title: "Warner Bros. Discovery Takes Flight at San Diego Comic-Con",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      accentColor: "#ED4169",
    },
  ];

  return (
    <RelatedSection>
      <SectionTitle>Related Comics</SectionTitle>
      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticlesGrid>
      <DecorationImage src="/images/decoration.svg" alt="" />
    </RelatedSection>
  );
}

const RelatedSection = styled.section`
  width: 100%;
  max-width: 1740px;
  margin-top: 136px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 50px;
  color: #000;
  margin-left: 40px;

  @media (max-width: 991px) {
    margin-left: 10px;
    font-size: 40px;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 20px 0;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const DecorationImage = styled.img`
  width: 107px;
  margin-top: 116px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;
