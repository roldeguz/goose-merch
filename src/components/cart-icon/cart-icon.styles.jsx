import styledComponents from "styled-components";

export const CartIconContainer = styledComponents.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styledComponents.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;