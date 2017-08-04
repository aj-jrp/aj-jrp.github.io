import styled from 'styled-components';
import { black } from 'theme/variables';
import { Relative } from 'theme/grid';

export const Title = styled.h1`
    margin-top: 0;
    color: ${black};
    font-weight: bold;
`;

export const VideoContainer =styled(Relative)`
    padding-left: 20px;
    video: 70%;
    flex-shrink: 0;
    flex-grow: 0;
`;