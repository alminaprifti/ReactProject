import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import WhenWhere from './WhenWhereComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";
import { CAROUSEL } from "../shared/carousel";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            carousel: CAROUSEL
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    carousel={this.state.carousel.filter(itemCarousel => itemCarousel.homeComponent)}
                    cards={this.state.cards.filter(card => card.homeComponent)}
                />
            );
        };

        const WhenWherePage = () => {
            return (
                <WhenWhere
                    cards={this.state.cards.filter(card => card.whenwhereComponent)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/whenwhere' component={WhenWherePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
