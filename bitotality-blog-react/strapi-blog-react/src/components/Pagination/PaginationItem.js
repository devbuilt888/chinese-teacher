import styled from "styled-components";

const PaginationItem = ({ children, isActive, isArrow }) => {
  return (
    <StyledPaginationItem isActive={isActive} isArrow={isArrow}>
      {children}
    </StyledPaginationItem>
  );
};

const StyledPaginationItem = styled.div`
  border-radius: 6px;
  background-color: ${props => props.isActive ? 'rgba(252, 60, 104, 1)' : 'rgba(255, 255, 255, 1)'};
  color: ${props => props.isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
  text-align: center;
  width: 40px;
  height: 40px;
  padding: ${props => props.isArrow ? '0' : '0 15px'};
  border: 1px solid ${props => 
    props.isActive ? 'transparent' : 
    props.isArrow ? 'rgba(232, 232, 232, 1)' : 'rgba(255, 211, 221, 1)'};
  display: ${props => props.isArrow ? 'flex' : 'block'};
`;

export default PaginationItem;