import styled from 'styled-components';

export const CardListUl = styled.ul`
  background-color: ${({ active }) => {
    console.log('active', active);
    return active ? 'var(--marine)' : 'var(--main-grey)';
  }};
`;
