import React from 'react';
import styled from 'styled-components';

export function UserActions() {
  return (
    <Actions>
      <LoginButton>Log In</LoginButton>
      <SignUpButton>Sign Up</SignUpButton>
    </Actions>
  );
}

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  font-family: 'Hey Comic', sans-serif;
  font-size: 18px;
  padding: 14px 42px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const LoginButton = styled(Button)`
  color: #FC3C68;
  background: transparent;
  border: 1px solid #FC3C68;
  
  &:hover {
    background: rgba(252, 60, 104, 0.1);
  }
`;

const SignUpButton = styled(Button)`
  color: #FFFFFF;
  background: #FC3C68;
  border: none;
  
  &:hover {
    background: #E62952;
  }
`;