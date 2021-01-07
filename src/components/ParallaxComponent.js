import React from "react";
import { Parallax, Background } from "react-parallax";
import { bounce, fadeInLeft, fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    fadeInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    },
}

export function RenderParllaxOurStoryComponent({ parallax }) {
    return (
        <React.Fragment>
            <div>
                <Parallax
                    strength={parallax.primary.speed}
                >
                    <Background className="custom-bg">
                        <div
                            style={parallax.primary.image.dimensions}
                        />
                    </Background>
                    <StyleRoot>
                        <div style={styles.fadeInLeft}>
                            <div style={parallax.primary.dimensions} className="divParallax">
                                <div class="content">
                                    <h1>
                                        {parallax.primary.text} {' '}
                                        <i className={`fa ${parallax.primary.styleName}`} />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </StyleRoot>
                </Parallax>
                <section className="normal-scroll">
                    <div className="container">
                        <h1> {parallax.header}</h1>
                        <h5>{parallax.text}</h5>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}