
import {createContext, useContext, useReducer} from "react"

import { LOGOUT,SET_AUTH } from "../action/auth"

import {authReducer,initialState} from "../reducers/auth"
//import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

import {API} from "../API"



export const AuthContex = createContext()
//provaides para que puede comunicacarsr
const { Provider } = AuthContex;



export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const logout = () => {
        dispatch({ type: LOGOUT });
        localStorage.removeItem("auth");
    };

    const getUserInformation = () => jwtDecode(state.jkt);

    const login = async (userName, password) => {
        try {
            const response = await API.post("/auth", { userName, password }, { headers: { Authorization: localStorage.getItem("auth") } });
            
            if (response.data.userName === "artu" && response.data.password === "123456") {
                //const { jkt } = response.data;
                const {jkt}={
                    ok: true,
                    jkt: "sdsdghsdgsdgsdghsdgkhusdgkhygsdkhyugfsdygsdgkhyesdgkhyisdgjyigtsdkjyg"
                }
                dispatch({ type: SET_AUTH, payload: { jkt } });
                localStorage.setItem("auth", jkt);
            } else {
                // Manejar caso cuando las credenciales no son correctas
                // Puedes lanzar un error o manejarlo de alguna manera
                console.error("Credenciales incorrectas");
            }
        } catch (error) {
            // Manejar errores de la petición
            console.error("Error en la petición de login", error);
        }
    };

    const setAuth = (jkt) => {
        dispatch({ type: SET_AUTH, payload: { jkt } });
    };

    return (
        <Provider value={{ state, setAuth, logout, login, getUserInformation }}>
            {children}
        </Provider>
    );
};