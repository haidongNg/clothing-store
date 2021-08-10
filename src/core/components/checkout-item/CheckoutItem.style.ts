import styled from 'styled-components';

export const CheckoutItemImage = styled.img`
  background-image: ${({ imgUrl }: { imgUrl: string }) => `url(${imgUrl})`};
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  ${CheckoutItemImage} {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemSpan = styled.span`
  width: 23%;
  &.quantity {
    padding-left: 20px;
  }
`;

export const CheckoutItemRemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
