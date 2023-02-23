import styledComponents from "styled-components";

export const CheckoutItemContainer = styledComponents.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styledComponents.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styledComponents.span`
  width: 23%;
`;

export const Quantity = styledComponents(BaseSpan)`
  display: flex;
`;

export const Arrow = styledComponents.div`
  cursor: pointer;
`;

export const Value = styledComponents.span`
  margin: 0 10px;
`;

export const RemoveButton = styledComponents.div`
  padding-left: 12px;
  cursor: pointer;
`;