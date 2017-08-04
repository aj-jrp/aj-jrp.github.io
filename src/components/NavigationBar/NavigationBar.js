import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">The Project</NavItem>
                <NavItem to="aboutaj">About AJ</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar; 