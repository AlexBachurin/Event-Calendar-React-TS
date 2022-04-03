import { EventActionEnum, EventState, EventAction } from "./types";

const initialState: EventState = {
	guests: [],
	events: [],
};

const eventReducer = (
	state = initialState,
	action: EventAction
): EventState => {
	if (action.type === EventActionEnum.SET_GUESTS) {
		return { ...state, guests: action.payload };
	}
	if (action.type === EventActionEnum.SET_EVENTS) {
		return { ...state, events: action.payload };
	}
	if (action.type === EventActionEnum.GET_EVENTS) {
		return state;
	}
	return state;
};

export default eventReducer;
