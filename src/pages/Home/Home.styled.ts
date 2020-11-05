import styled from 'styled-components';
import tropical from '../../assets/tropical.jpg';

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${tropical}");
`;
