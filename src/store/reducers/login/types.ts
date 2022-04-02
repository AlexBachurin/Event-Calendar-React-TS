export interface loginModalState  {
    isModalVisible: boolean,
    isShowRegister: boolean,
}

export enum loginModalEnum {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
    SHOW_REGISTER = 'SHOW_REGISTER'
}

interface openModalAction {
    type: loginModalEnum.OPEN_MODAL
    payload: boolean
}
interface closeModalAction {
    type: loginModalEnum.CLOSE_MODAL
    payload: boolean
}
interface showRegisterAction {
    type: loginModalEnum.SHOW_REGISTER
    payload: boolean
}

export type loginModalActions = 
    openModalAction | closeModalAction| showRegisterAction
