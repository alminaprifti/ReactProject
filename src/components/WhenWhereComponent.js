import React, { Component } from 'react';
import { RenderCardWhenWhereComponent } from "./CardComponent";
import Timer from "./TimerComponent";
import { CardGroup } from 'reactstrap';
import { TIMEREVENTS } from "../shared/timer";

class WhenWhere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: TIMEREVENTS,
            newDate: "",
            newName: "",
        };
    }

    addNewEvent = () => {
        let evt = { name: this.state.newName, date: this.state.newDate };
        let newEvents = this.state.events.concat(evt);
        this.setState({
            newDate: "",
            newName: "",
            events: newEvents,
        });
    }

    render() {
        const eventList = this.state.events.filter(evt => evt.whenwhereComponent)
        const events = eventList.map((evt) =>
            <Timer key={evt.date} eventName={evt.name} eventDate={evt.date} />
        );
        return (
            <React.Fragment>
                <div className="App">
                    {events}
                </div>
                <div className="container">
                    <div className="row">
                        <CardGroup>
                            {this.props.cards.map(card => {
                                return (
                                    <div className="col-sm-4 d-flex align-items-stretch my-3" key={card.id} id={card.id}>
                                        <RenderCardWhenWhereComponent item={card} />
                                    </div>
                                );
                            })
                            }
                        </CardGroup>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WhenWhere;