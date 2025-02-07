import * as React from "react";
import styled from "styled-components";

export function BlogPostThumbnail({ src }) {
  return (
    <ThumbnailImage
      loading="lazy"
      src={src}
      alt="Blog post thumbnail"
    />
  );
}

const ThumbnailImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 120px;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(22, 28, 44, 0.08);
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;