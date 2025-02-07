import * as React from "react";
import styled from "styled-components";

export function AuthorAvatar({ src, alt }) {
  return (
    <AvatarImage
      loading="lazy"
      src={src}
      alt={alt}
    />
  );
}

const AvatarImage = styled.img`
  aspect-ratio: 1.02;
  object-fit: contain;
  object-position: center;
  width: 47px;
  border-radius: 50%;

    @media (min-width: 1441px) {
        width: 70px;
    
  }
`;