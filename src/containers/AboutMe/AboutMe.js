import React, { Component } from 'react';
import { Container, Flex } from 'theme/grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P } from 'theme/types';

class AboutMe extends Component {
    render () {
        return (
            <Container>   
                <Title>About AJ</Title>
                <H2 align="right">Wha wha wha about my hAollydays at Ile de Beauté!? Awhooooo!</H2>
                <Flex>
                    <P align="right">This mourning I was
                    walking along the bay gettin' to meet the dogs in town, there were Wadadi wadada...</P>
                    <VideoContainer>
                        <ReactPlayer
                        controls
                        url={require("assets/thebeach.mp4")}/>    
                    </VideoContainer>
                </Flex>
            </Container>
        );   
    }
}

export default AboutMe;

