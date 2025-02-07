import * as React from "react";
import styled from "styled-components";

export function AuthorName({ name }) {
  return (
    <NameWrapper>
      By {name}
    </NameWrapper>
  );
}

const NameWrapper = styled.div`
  flex-basis: auto;
  margin: auto 0;
`;

