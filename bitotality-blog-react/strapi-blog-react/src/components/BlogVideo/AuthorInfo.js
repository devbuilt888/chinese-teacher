import * as React from "react";
import styled from "styled-components";

export function AuthorInfo({ avatarSrc, authorName }) {
  return (
    <AuthorWrapper>
      <AuthorAvatar
        loading="lazy"
        src={avatarSrc}
        alt={`${authorName}'s avatar`}
      />
      <AuthorName>{authorName}</AuthorName>
    </AuthorWrapper>
  );
}

const AuthorWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

const AuthorAvatar = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
  border-radius: 50%;
  align-self: start;
`;

const AuthorName = styled.div`
  flex-basis: auto;
`;