import { useCartStore } from '../../states/cart';
import React from 'react';
import styled from 'styled-components';
const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.2em;
`;
/**
 * a small component telling the user that the cart is empty if total is less or equal to 0
 * @returns paragraph component
 */
export function EmptyCartMessage() {
  const total = useCartStore((state) => state.total);
  if (total <= 0) {
    return <StyledParagraph>Your Cart is empty</StyledParagraph>;
  }
}
