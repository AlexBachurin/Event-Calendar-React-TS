import {
	closeModalAction,
	loginModalEnum,
	openModalAction,
	showRegisterAction,
} from "./types";

export const ModalActionCreators = {
	openModal: (boolean: boolean): openModalAction => ({
		type: loginModalEnum.OPEN_MODAL,
		payload: boolean,
	}),
	closeModal: (boolean: boolean): closeModalAction => ({
		type: loginModalEnum.CLOSE_MODAL,
		payload: boolean,
	}),
	showRegister: (boolean: boolean): showRegisterAction => ({
		type: loginModalEnum.SHOW_REGISTER,
		payload: boolean,
	}),
};
