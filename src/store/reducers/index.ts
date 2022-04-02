//Импортируем все редюсеры сюда и одной пачкой экспортируем
import authReducer from "./auth/authReducer";
import loginModalReducer from "./login/loginModalReducer";
import eventReducer from "./event/eventReducer";
export default {
    authReducer,
    loginModalReducer,
    eventReducer,
}
