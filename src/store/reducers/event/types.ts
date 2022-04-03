import { IEvent } from "../../../models/IEvent";
import { iUser } from "../../../models/IUser";


export interface EventState {
    guests: iUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    GET_EVENTS = 'GET_EVENTS'
}

export interface SetGuestAction {
    type: EventActionEnum.SET_GUESTS;
    payload: iUser[];
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}
export interface GetEventsAction {
    type: EventActionEnum.GET_EVENTS;
    payload?: IEvent;
}

export type EventAction = 
    SetGuestAction | SetEventsAction | GetEventsAction
