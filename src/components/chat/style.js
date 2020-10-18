import Styled from 'styled-components';

export const ChatStyle = Styled.div`

& .messages {
    background-color: #f6f6f6;

    & >ul {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: calc(100vh - 110px);
    overflow-y: scroll;
    scrollbar-width: thin;

        &::-webkit-scrollbar {
        width: .3rem;
        }
        &::-webkit-scrollbar-track {
        background: #f6f6f6;
        }
        &::-webkit-scrollbar-thumb {
        background: #e3e3e3;
        }
    }

    & li .text {
    position: relative;
    color: #fff;
    padding: .5rem .5rem 1.2rem;
    background-color: var(--blue);
    float: left;
    width: auto;
    min-width: 20%;
    max-width: 80%;
    border-radius: 6px;
    word-break: break-all;
    
    }

    & li.reciever .text {
    float: right;
    background-color: #fff;
    color: #444;
    }

    & li:not(:last-of-type) {
    margin-bottom: 1rem;
    }

    & .time {
    position: absolute;
    left: .5rem;
    bottom: .3rem;
    font-size: 10px;
    }
}


`