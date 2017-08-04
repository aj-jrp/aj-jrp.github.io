import styled from 'styled-components';
import { rose, black } from 'theme/variables';

export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {
        transition: transform .3s;
    }

    &:hover {
        & > img {
            transform: scale(1.3);
        }
    }
`;

export const Index = styled.div`
    position: absolute;
    left: 0;
    z-index: -1;
    bottom: 0;
    font-size: 3em;
    h1 {
        margin: 0;
        font-weight: bold;
        color: ${rose};
        opacity: 0.5;
        transform: translateY(25%);
    }
`;

export const ImageContainer = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const Title = styled.h1`
    margin-top: 0;
    color: ${black};
    font-weight: bold;
`;