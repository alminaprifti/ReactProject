import React, { Component } from "react";
import { RenderFlipCard } from "./CardComponent";

class FlipCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            colorStyle: 'color-1',
        }
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    hoverOn() {
        this.setState({ hover: true });
    }

    hoverOff() {
        this.setState({ hover: false });
    }

    colorChange = (colorStyle) => {
        console.log(colorStyle + "From Here")
        this.setState({
            colorStyle: colorStyle,
        })
    }


    render() {
        return (
            <div>
                <div className={`flipCard ${this.state.colorStyle}`} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <RenderFlipCard name={this.state.hover ? "hover-on" : "hover-off"} item={this.props.item} />
                </div>
            </div>
        );
    }
}

export default FlipCard;
