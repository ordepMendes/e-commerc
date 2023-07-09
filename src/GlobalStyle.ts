import {createGlobalStyle} from 'styled-components';
import Theme from './Theme';

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Theme.fontFamily.primary}
 }
`;

export default GlobalStyle;