import Styled from 'styled-components';

export const SendStyle = Styled.div`

    display: flex;
    justify-content: stretch;
    padding: .3rem;
    background: #fff;


    & input {
        flex-grow: 1;
        border: none;
        padding-left: .3rem;
    }

    & button {
        background: transparent;
        width: 30px;
        padding: .3rem;

        & svg {
        fill: var(--blue);
        }
    }


`