import Styled from 'styled-components';

export const DetailStyle = Styled.div`

    padding-top: 2rem;
    border-top: 1px solid#e3e3e3;
    padding: 2rem 1rem;

    & h4 {
        color: var(--blue);
    }

    & > div > div {
        margin-top: 1rem;
        
        & small {
        color: #777;
        }   
    }

`