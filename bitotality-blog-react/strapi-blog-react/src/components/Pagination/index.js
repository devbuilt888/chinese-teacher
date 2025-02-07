import * as React from "react";
import styled from "styled-components";
import PaginationItem from "./PaginationItem";

function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <PaginationContainer>
      <PaginationItem isArrow />
      {pages.map((page, index) => (
        <PaginationItem key={index} isActive={page === 3}>
          {page}
        </PaginationItem>
      ))}
      <PaginationItem isArrow />
    </PaginationContainer>
  );
}

const PaginationContainer = styled.nav`
  display: flex;
  gap: 10px;
  padding-left: 20vw;

  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  font: 400 18px Hey Comic, sans-serif;
  position: relative;
  top: 160vh;

  @media (max-width: 376px) {
    top: 205rem;
  }

`;

export default Pagination;
