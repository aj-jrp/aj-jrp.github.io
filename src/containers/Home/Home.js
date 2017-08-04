import React, { Component, PropTypes } from 'react';
import { Container } from 'theme/grid';
import { Title, HeroImage, RevealP } from './Home.style';
import WhenInView from 'components/WhenInView/WhenInView';

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <Container>
                <Title>AJ Sens Project</Title>
                <br />
                <HeroImage>
                    <h1>Apple Jack</h1>
                    <h2>Heroïn Beast</h2>
                </HeroImage>
                {/*<Image src={require('../assets/hero.gif')} alt="hero-image" />*/}
                <br />
                <WhenInView>
                    { ({ isInView }) =>
                    <RevealP hide={!isInView}>
                    Hi! This is AJ barkin', and I'm very enthousiastic to present the new comer game inspired
                    from my delightfull doggy livin'.
                    </RevealP>
                    }
                </WhenInView>
                <br />
                <WhenInView>
                    { ({ isInView }) =>
                    <RevealP hide={!isInView}>
                    I was born in September 2015. It's the start of the wonderfull story of my understandin'
                    with Mankind. 
                    And how crucial our friendship turned out to be?! This I will explain it in details
                    all through the different levels and cinematics.
                    </RevealP>
                    }
                </WhenInView>
                <br />
                <WhenInView>
                    { ({ isInView }) =>
                    <RevealP hide={!isInView}>
                    See I'm a Jack Russel, reputated to be a dominant dog. And this temper, not a positive amongst
                    Masters when they come to talk about our proses and cons, will actually be the main factor for me to grasp
                    there condition for a livin'.
                    </RevealP>
                    }
                </WhenInView>
            </Container>
        );
    }
}
