import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { iUser } from "../../../models/IUser";
import { EventActionEnum, GetEventsAction, SetEventsAction, SetGuestAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: iUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    getEvents: () : GetEventsAction => ({type: EventActionEnum.GET_EVENTS}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<iUser[]>('./users.json')
            console.log(res)
            dispatch(EventActionCreators.setGuests(res.data))
        } catch (error) {
            console.log(error)
        }
    },
    createEvent: (event : IEvent ) => async (dispatch: AppDispatch) => {
        const state = dispatch(EventActionCreators.getEvents())  
        console.log(state); 
    }
}