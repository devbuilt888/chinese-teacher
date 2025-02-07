import React from "react";
import styled from "styled-components";

export function BlogBody(props) {
  const { blog } = props;

  return (
    <Content>
      <MainImage
        src={`https://strapi-bnlu.onrender.com${blog.featuredImage[0]?.url}`}
        alt={blog.featuredTitle}
      />
      <TextContent>
        <Paragraph>{blog.featuredContent}</Paragraph>
        <Quote>{blog.specialText}</Quote>

        <Section>
          <SectionTitle>{blog.p1Title}</SectionTitle>
          <Paragraph>{blog.p1Text}</Paragraph>
        </Section>

        <Section>
          <SectionTitle>{blog.p2Title}</SectionTitle>
          <Paragraph>{blog.p2Text}</Paragraph>
        </Section>

        <Section>
          <SectionTitle>{blog.p3Title}</SectionTitle>
          <Paragraph>{blog.p3Text}</Paragraph>
        </Section>

        <Section>
          <SectionTitle>{blog.p4Title}</SectionTitle>
          <Paragraph>{blog.p4Text}</Paragraph>
        </Section>
      </TextContent>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 40px;
  max-width: 700px;
  @media (min-width: 760px) {
    max-width: 60%;
  }
`;

const TextContent = styled.div`
  font-family: "Outfit", sans-serif;
  color: #3a3a3a;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  margin-bottom: 24px;
`;

const Quote = styled.blockquote`
  font-size: 26px;
  line-height: 48px;
  color: #000000;
  padding: 27px 36px;
  border: 5px solid #06d5a1;
  border-radius: 6px;
  margin: 40px 0;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #000000;
  margin-bottom: 24px;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #f14068;
`;
