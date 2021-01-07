import React from 'react';
import { RenderParllaxOurStoryComponent } from "./ParallaxComponent";

function OurStory({ parallaxes }) {
    return (
        <div className="content-block">
            {parallaxes.map(parallax => {
                return (
                    <div className="content-push" key={parallax.id} id={parallax.id}>
                        <RenderParllaxOurStoryComponent parallax={parallax} />
                    </div>
                );
            })
            }
        </div>

    );
}

export default OurStory;