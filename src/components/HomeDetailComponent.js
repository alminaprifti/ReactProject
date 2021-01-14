import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Button, Label,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { RenderCardHomeDetailComponent } from "./CardComponent";

function HomeDetail(props) {
    if (props.card) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/homr">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.card.detail.location}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.card.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCardHomeDetailComponent card={props.card} />
                </div>
            </div>
        );
    }
    return <div />
}

export default HomeDetail;
