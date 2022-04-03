//Импортируем все редюсеры сюда и одной пачкой экспортируем
import authReducer from "./auth/authReducer";
import loginModalReducer from "./login/loginModalReducer";
import eventReducer from "./event/eventReducer";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	authReducer,
	loginModalReducer,
	eventReducer,
};
