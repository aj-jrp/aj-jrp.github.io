import styled from 'styled-components';
import { Flex } from 'theme/grid';
import { blue, yellow, black } from 'theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 2em;
    top: 1.8em;

`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${black};
    position: relative;
    text-decoration: none;

    &:hover {
        color: ${yellow};
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${blue};
            z-index: -1;
            transform: scale(1.3, 1.5);
        }
    }
`;