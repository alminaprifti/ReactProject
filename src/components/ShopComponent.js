import React from 'react';
import FlipCard from "./FlipCardComponent";
import { CardGroup } from 'reactstrap';

function Shop({ cards }) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="text-center mt-0 text-white">
                    <h1 className="display-4">
                        CHOOSE / THE / PERFECT / GIFT </h1>
                    <p className="font-italic mb-3"><h2>Wedding Shop</h2></p>
                </div>
                <div className="row">
                    <CardGroup>
                        {cards.map(card => {
                            return (
                                <div className="col-md-4 d-flex align-items-stretch my-3" key={card.id} id={card.id}>
                                    <FlipCard item={card} />
                                </div>
                            );
                        })
                        }
                    </CardGroup>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Shop;