import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ src }: { src: string }) =>
    `url(${src})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPrice = styled.span`
  width: 10%;
`;
