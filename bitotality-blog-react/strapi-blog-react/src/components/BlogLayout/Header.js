import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { UserActions } from './UserActions';

export function BlogHeader() {
  return (
    <Header>
      <HeaderContent>
        <Navigation />
        <UserActions />
      </HeaderContent>
      <Breadcrumbs>
        <BreadcrumbItem>Home page</BreadcrumbItem>
        <Separator>/</Separator>
        <BreadcrumbItem>Popular comics</BreadcrumbItem>
        <Separator>/</Separator>
        <BreadcrumbItem active>Marvel news</BreadcrumbItem>
      </Breadcrumbs>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  max-width: 1720px;
  margin-bottom: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 29px;
  
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Breadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 20px 80px;
  background-color: #FFF0F4;
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  line-height: 30px;
  
  @media (max-width: 991px) {
    padding: 20px;
    overflow-x: auto;
  }
`;

const BreadcrumbItem = styled.span`
  color: ${props => props.active ? '#F14068' : '#000000'};
  white-space: nowrap;
`;

const Separator = styled.span`
  color: #000000;
`;