import React from 'react';
import { Media } from 'reactstrap';

export function RenderMediaHomeComponent({ media, onClick }) {
    return (
        <Media onClick={onClick}>
            <Media left href="#">
                <Media object src={media.image} alt={media.name} />
            </Media>
            <Media body>
                <Media heading>
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(media.detail.date)))}
                </Media>
            </Media>
        </Media>
    );
};
