import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardImgOverlay, Button } from 'reactstrap';

export function RenderCardHomeComponent({ item }) {
    return (
        <React.Fragment>
            <Card className="cardHeight">
                <CardImg src={item.image} alt={item.name} className="card-img-top" />
                <CardImgOverlay className="content-overlay">
                    <CardText className="text-right">
                        <Button variant="secondary" ><i className="fa fa-commenting" /> {item.button} </Button>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </React.Fragment>
    );
}

export function RenderCardWhenWhereComponent({ item }) {
    return (
        <React.Fragment>
            <Card className="cardContent">
                {item.image ? (
                    <CardImg src={item.image} alt={item.name} className="cardWW-img-top" />
                ) : (<div />
                    )}
                {item.image ? (
                    <React.Fragment>
                        <CardTitle tag="h2" className="card-title text-center">{item.name}</CardTitle>
                        <CardText className="text-center text-primary" tag="p">
                            <i className="fa fa-commenting" /> {item.text}
                        </CardText>
                    </React.Fragment>
                ) : (
                        item.name.map((nameHeader, indexHeader) =>
                            <div key={`Key${indexHeader}`}>
                                <CardTitle tag="h2" className="card-title text-center">{nameHeader}</CardTitle>
                                {item.text.map((textContent, indexText) =>
                                    indexHeader === indexText ?
                                        (
                                            <div className="text-center" tag="p" key={`Key${indexHeader + indexText}`}>
                                                {textContent.split("\n").map((lineTextContent, indexLine) => {
                                                    return <div key={`Key${indexHeader + indexText + indexLine}`}>{lineTextContent}</div>;
                                                })}
                                            </div>
                                        ) :
                                        (
                                            <div key={`Key${indexHeader + indexText}`} />
                                        )
                                )}
                            </div>
                        )

                    )}
            </Card>
        </React.Fragment>
    );
}

export const RenderFlipCard = (props) => {
    const holdTempClass = "flipCard ";
    return (
        <div className={holdTempClass + props.name}>
            <div className="flipContent">
                <div className="front">
                    <CardImg src={props.item.image} alt={props.item.name} className="imgFlipCard" />
                    <p className="card-title pt-0"> {props.item.name}</p>
                </div>
                <div className="back bg-white">
                    <CardTitle tag="p" className="card-title text-center">{props.item.name}</CardTitle>
                    <CardText className="text-center px-3" tag="p">
                        {props.item.text}
                    </CardText>
                    <div className="row py-1">
                        <div className="col-sm-6 d-flex align-items-stretch py-2">
                            <CardText className="text-center px-3">
                                Price <b>{props.item.textPrice}</b>
                            </CardText>
                        </div>
                        <div className="col-sm-6 d-flex align-items-stretch">
                            <Button variant="secondary" className="btn btn-danger" ><i className="fa fa-cart" /> {props.item.button}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
