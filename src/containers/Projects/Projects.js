import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    ImageContainer, 
    Title
} from './Projects.style';
import { Container, Relative, Flex } from 'theme/grid';
import { A } from 'theme/types';
import ImagePrallax from 'react-image-parallax2';

class Projects extends Component {
    render() {
        return (
            <Container>
            <Title>The Chapters As They Come</Title>
            <br />
            <Relative marginTop="100px" marginBottom="50px">   
                <Index>
                    <h1>A</h1>
                </Index>
                <h1>This Projects <A href="">AJ-BlockStack</A></h1>
            </Relative>
                <Flex justify={'center'} marginBottom="5em">
                <ReactZoomy
                    imageUrl={require('assets/up-la-citadelle.jpg')}
                    renderThumbnail={({ showImage }) => 
                        <ImageButton onClick={showImage}>
                            <img src={require('assets/up-la-citadelle-thumbnail.jpg')} alt="up-citadelle"/>
                        </ImageButton>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                        style: {
                        width: '100vw',
                        height: 'auto'
                        }
                    }}
                />
                </Flex>
                <Relative marginBottom="50px">   
                <Index>
                    <h1>I</h1>
                </Index>
                <h1>This Chapter <A href="">Les Bords de Marne</A></h1>
                </Relative>
                <ImageContainer>    
                    <ImagePrallax 
                    reduceHeight={1/3}
                    src={require('assets/bdmchptrpic.jpg')}/>
                </ImageContainer>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Container>
               
        );
    }
}

export default Projects;
