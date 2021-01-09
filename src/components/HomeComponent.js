import React from 'react';
import { RenderCardHomeComponent } from "./CardComponent";
import { RenderCarouselHomeComponent } from "./CarouselComponent";
import { CardGroup } from 'reactstrap';

function Home({ carousel, cards }) {
    return (
        <React.Fragment>
            <RenderCarouselHomeComponent carousel={carousel} />
            <div className="container">
                <div className="text-center mt-5 text-white">
                    <h1 className="display-4">
                        OUR / WEEDING / GALLERY </h1>
                    <p className="font-italic mb-3"><h2>Two of Us</h2></p>
                </div>
                <div className="row">
                    <CardGroup>
                        {cards.map(card => {
                            return (
                                <div className="col-lg-4 d-flex align-items-stretch my-3" key={card.id} id={card.id}>
                                    <RenderCardHomeComponent item={card} />
                                </div>
                            );
                        })
                        }
                    </CardGroup>
                </div>
                <div className="text-center mt-5 text-white">
                    <h2 className="display-4">
                        OUR / STORY </h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;