//Импортируем все редюсеры сюда и одной пачкой экспортируем
import authReducer from "./auth/authReducer";
import loginModalReducer from "./login/loginModalReducer";
export default {
    authReducer,
    loginModalReducer
}
