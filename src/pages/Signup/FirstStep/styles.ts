import styled from 'styled-components';
import Theme from '../../../Theme';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid ${Theme.colors.gray};
    padding: 1.5rem;
    border-radius: 10px;

    h1{
        margin-bottom: 0.5rem;
    }
`;