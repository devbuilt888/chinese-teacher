import React from "react";
import styled from "styled-components";

export function BlogTags() {
  const tags = ["Marvel Comics", "News", "Newest"];

  return (
    <TagsSection>
      <TagsLabel>Tags</TagsLabel>
      <TagsList>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsList>
    </TagsSection>
  );
}

const TagsSection = styled.section`
  margin-top: 97px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TagsLabel = styled.h3`
  color: #505050;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
`;

const TagsList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

const Tag = styled.span`
  background-color: rgba(252, 60, 104, 0.1);
  color: #fc3c68;
  padding: 8px 15px;
  border-radius: 6px;
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
