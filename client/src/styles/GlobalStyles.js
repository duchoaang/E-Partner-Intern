import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
     body {
          background-color:var(--bg-color);
          font-size: var(--text-mobile); 
          color: var(--text-color)
        }
    @media (max-width: 414px) {
        body {
          padding:10px 10px;
          width: 100%;
          height: 896px;
          top: -448px;
          left: -1751px;

        }
    }
`;
