import styled from 'styled-components';
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
    gap: 2rem;
    border: 1px solid ${Theme.colors.gray};
    padding: 1.5rem;
    border-radius: 10px;
`;