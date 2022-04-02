import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { iUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: iUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvent: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const res = await axios.get<iUser[]>('./users.json')
            console.log(res)
            dispatch(EventActionCreators.setGuests(res.data))
        } catch (error) {
            console.log(error)
        }
    } 
}