import * as React from "react";
import styled from "styled-components";
import { AuthorAvatar } from "./AuthorAvatar";
import { AuthorName } from "./AuthorName";

export function AuthorCard() {
  const authorData = {
    name: "Cody Stark",
    avatarUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dee7b8f245e720250f8a7f841735849f31e389363a69c613cef7dbca583190cb?placeholderIfAbsent=true&apiKey=af3b926ef0c2405e9a702a855cd6e35e",
    altText: "Profile picture of Cody Stark",
  };

  return (
    <AuthorWrapper>
      <AuthorAvatar src={authorData.avatarUrl} alt={authorData.altText} />
      <AuthorName name={authorData.name} />
    </AuthorWrapper>
  );
}

const AuthorWrapper = styled.div`
  display: flex;
  gap: 7px;
  color: rgba(0, 0, 0, 1);
  font: 400 18px/2 Outfit, sans-serif;
  position: relative;
  top: 7vh;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 1446px) {
    display: flex;
    gap: 7px;
    color: rgba(0, 0, 0, 1);
    font: 400 18px / 2 Outfit, sans-serif;
    position: relative;
    top: 7rem;
  }

  @media (min-width: 1441px) {
    top: 5rem;
    font-size: 30px;
    
  }
  @media (max-width: 1125px) {
    margin-bottom: 2rem;
    margin-top: 3rem;
    display: flex;
    gap: 7px;
    color: rgba(0, 0, 0, 1);
    font: 400 18px/2 Outfit, sans-serif;
    position: relative;
    top: 7vh;
  }

  @media (max-width: 749px) {
    top: 5vh;
  }

  @media (max-width: 426px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;
