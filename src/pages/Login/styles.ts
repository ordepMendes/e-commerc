import styled from 'styled-components';
import ButtonMui from '@mui/material/Button';
import Theme from '../../Theme';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;

    h1{
        text-align: center;
    }
    
    p {
        text-align: center;
    }

    span{
        color: ${Theme.colors.primary};
        cursor: pointer;
    }

`;

export const Box = styled.div` 
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   div{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
   }
`;



