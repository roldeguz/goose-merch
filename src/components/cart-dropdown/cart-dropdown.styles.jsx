import styledComponents from "styled-components";

import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styledComponents.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItems = styledComponents.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const EmptyMessage = styledComponents.span`
  font-size: 18px;
  margin: 50px auto;
  webkit
`;

/*
  button {
    margin-top: auto;
  }
*/ 