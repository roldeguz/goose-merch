import styledComponents from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styledComponents(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;  