import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import HomeDetail from "./HomeDetailComponent";
import OurStory from './OurStoryComponent';
import WhenWhere from './WhenWhereComponent';
import Shop from './ShopComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        cards: state.cards,
        carousel: state.carousel,
        parallaxes: state.parallaxes
    };
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    carousel={this.props.carousel.filter(itemCarousel => itemCarousel.homeComponent)}
                    cards={this.props.cards.filter(card => card.homeComponent)}
                />
            );
        };

        const HomePageWithId = ({ match }) => {
            return (
                <HomeDetail
                    card={this.props.cards.filter(card => card.id === +match.params.homeComponentId)[0]}
                />
            );
        };

        const WhenWherePage = () => {
            return (
                <WhenWhere
                    cards={this.props.cards.filter(card => card.whenwhereComponent)}
                />
            );
        };

        const OurStoryPage = () => {
            return (
                <OurStory
                    parallaxes={this.props.parallaxes.filter(parallax => parallax.ourstoryComponent)}
                />
            );
        };

        const ShopPage = () => {
            return (
                <Shop
                    cards={this.props.cards.filter(card => card.shopComponent)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/home/:homeComponentId' component={HomePageWithId} />
                    <Route exact path='/ourstory' component={OurStoryPage} />
                    <Route exact path='/whenwhere' component={WhenWherePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
