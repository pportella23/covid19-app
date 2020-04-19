import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as MoonIcon } from './assets/moon.svg';
import { ReactComponent as SunIcon } from './assets/sun.svg';

const ToggleContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 4rem;
  height: 1.7rem;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.25rem;
  padding: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 1.25rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(50px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-50px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;