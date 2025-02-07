import React from "react";
import styled from "styled-components";

export function BlogAuthor() {
  return (
    <AuthorSection>
      <AuthorAvatar
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee7b8f245e720250f8a7f841735849f31e389363a69c613cef7dbca583190cb?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e"
        alt="Cody Stark"
      />
      <AuthorName>By Cody Stark</AuthorName>
    </AuthorSection>
  );
}

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 37px;
`;

const AuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.span`
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
`;
