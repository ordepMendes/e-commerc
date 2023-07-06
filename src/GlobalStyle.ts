import {createGlobalStyle} from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: ${Theme.fontFamily.primary}
 }
`;

export default GlobalStyle;