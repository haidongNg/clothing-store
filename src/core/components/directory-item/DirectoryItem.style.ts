import styled from 'styled-components';

export const DirectoryImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgUrl }: { imgUrl: string }) => `url(${imgUrl})`};
`;

export const DirectoryContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const DirectoryTitle = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const DirectorySubtile = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: ${({ sizeDiv }: { sizeDiv: string }) =>
    sizeDiv === 'large' ? '380px' : '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  justify-content: center;

  &:hover {
    cursor: pointer;
    ${DirectoryImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${DirectoryContent} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;
