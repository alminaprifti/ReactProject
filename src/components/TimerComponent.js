import React, { Component } from 'react';
import { bounce, fadeInLeft, bounceInDown } from 'react-animations';
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
    bounceInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentDidMount() {
        this.getTimeDifference(this.props.eventDate);
        setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
    }

    leadingZero(num) {
        return (num < 10 && num > 0) ? "0" + num : num;
    }

    getTimeDifference(eventDate) {
        const time = Date.parse(eventDate) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        this.setState({ days, hours, minutes, seconds });
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div className="row row-content align-items-center animate__animated animate__fadeInLeft">
                        <div className="col-sm-12">
                            <StyleRoot>
                                <div style={styles.fadeInLeft}>
                                    <h2 className="text-center">We are getting married <b>{this.props.eventDate}</b></h2>

                                    <div className="containerCD">
                                        <div className="countdown">
                                            <div id="day">{this.leadingZero(this.state.days)}</div>
                                            <div id="hour">{this.leadingZero(this.state.hours)}</div>
                                            <div id="minute">{this.leadingZero(this.state.minutes)}</div>
                                            <div id="second">{this.leadingZero(this.state.seconds)}</div>
                                        </div>
                                    </div>
                                </div>
                            </StyleRoot>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Timer;