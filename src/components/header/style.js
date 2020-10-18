import Styled from 'styled-components';

export const HeaderStyle = Styled.div`
& .fixed-header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: .5rem 0;
    background-color: #fff;
    transition: padding ease .3s;

    & .back {
    width: 1.5rem;
    display: none;
    cursor: pointer;
    }

    &.detail {
    padding: 2rem 0;
    transition: padding ease .3s;
    &  .back {
        display: block;
        }
    &  .profile-section a {
    transform: translateX(1rem);
    transition: transform ease .3s;
        }
    }
}

& .profile-section a {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform ease .3s;

    &>div {
    margin-left: 1rem;
    }
    
    & .profile-picture>img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    }
}


`