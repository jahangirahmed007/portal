import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AgentReducer from './AgentRegisterReducer';

export default combineReducers({
    Auth: AuthReducer,
    AgentRegister: AgentReducer
})