import React from 'react';
import { RenderCardWhenWhereComponent } from "./CardComponent";
import { CardGroup } from 'reactstrap';

function WhenWhere({ cards }) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <CardGroup>
                        {cards.map(card => {
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
    );
}

export default WhenWhere;