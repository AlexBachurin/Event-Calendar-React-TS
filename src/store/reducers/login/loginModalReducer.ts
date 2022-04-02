import { loginModalActions, loginModalEnum, loginModalState } from "./types";

const initialState = {
     isModalVisible: false,
     isShowRegister: false

}

export default function loginModalReducer(state = initialState, action: loginModalActions) : loginModalState {
     if (action.type === loginModalEnum.OPEN_MODAL) {
          return {...state, isModalVisible: action.payload}
     }
     if (action.type === loginModalEnum.CLOSE_MODAL) {
          return {...state, isModalVisible: action.payload}
     }
     if (action.type === loginModalEnum.SHOW_REGISTER) {
          return {...state, isShowRegister: action.payload}
     }

     return state

}