import styled, { css } from 'styled-components';
import { black } from 'theme/variables';

export const Title = styled.h1`
    margin-top: 0;
    color: ${black};
    font-weight: bold;
`;

export const Image = styled.img`
  width: 50%;
`;

export const HeroImage = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/bdm-after-a-track.jpg')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: purple;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    font-size: 2em;

    h1 {
        margin-bottom: 0;
    }
`;

export const RevealP = styled.p`
    position: relative;
    &:after{
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;

        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 5s;
    }

    ${({ hide }) => hide && css`
        &:after {
           transform: rotateY(0deg);
        }
    `}
`;
