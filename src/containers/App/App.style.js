import styled from 'styled-components';
import { gray } from 'theme/variables';

export const Background = styled.div`
    position: fixed;
    left: 9.3vw;
    width: 80vw;
    top: 10vh;
    height: 100vh;
    background-image: url(${require('assets/body-background.png')});
    background-color: ${gray};
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    z-index: -99;
`;
