import { CARDS } from "../shared/cards";
import { CAROUSEL } from "../shared/carousel";
import { PARALLAXES } from "../shared/parallax";

export const initialState = {
    cards: CARDS,
    carousel: CAROUSEL,
    parallaxes: PARALLAXES
};

export const Reducer = (state = initialState, action) => {
    return state;
};