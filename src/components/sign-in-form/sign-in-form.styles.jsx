import styledComponents from "styled-components";

export const SigninContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }
`;

export const ButtonsContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;