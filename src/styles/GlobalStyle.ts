import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      overflow-y: scroll;
   }

   *,
   ::before,
   ::after {
      box-sizing: inherit;
   }

   body{
      font-family: 'Poppins', sans-serif;
   }

   main{
      padding-bottom: 100px;
   }

   #root {
      min-height: 100vh;
      position: relative;
   }
`;
