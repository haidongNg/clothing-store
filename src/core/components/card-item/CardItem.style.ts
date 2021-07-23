import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 2px 16px;
`;

export const CardTitle = styled.h1``;