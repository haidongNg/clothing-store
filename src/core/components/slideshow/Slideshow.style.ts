import styled from 'styled-components';

export const SlideshowContainer = styled.div`
  max-width: 1100px;
  position: relative;
  margin: auto;
`;

export const MySlides = styled.div`
  display: ${({ slideDisplay = 'none' }: { slideDisplay: string }) =>
    slideDisplay};
`;

// Base next and prev
const PreNextBase = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

// Next
export const NextSlides = styled(PreNextBase)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

// Prev
export const PrevSlides = styled(PreNextBase)`
  left: 0;
  border-radius: 3px 0 0 3px;
`;

export const ImageSlides = styled.img`
  width: 100%;
  &.fadeAnimation {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;

    @-webkit-keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const CaptionTextSlide = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

export const DotContainer = styled.div`
  text-align: center;
`;

export const DotSlide = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active,
  :hover {
    background-color: #717171;
  }
`;

export const NumberTextSlide = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;
