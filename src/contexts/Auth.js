
import {createContext, useContext, useReducer} from "react"

import { LOGOUT,SET_AUTH } from "../action/auth"

import {authReducer,initialState} from "../reducers/auth"
//import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";





export const AuthContex = createContext()
//provaides para que puede comunicacarsr
const { Provider } = AuthContex;



export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const logout = () => {
        dispatch({ type: LOGOUT });
        localStorage.removeItem("auth");
    };

    const getUserInformarion = () => jwtDecode(state.jkt)

    const login = async  ({userName, password}) => {
            console.log(`login`);
            const {jkt} = {
                jkt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
            setAuth({jkt})
            return jkt
            // const response =  API.post("/auth", { userName, password }, { headers: { Authorization: localStorage.getItem("auth") } });

            // console.log("Response data:", response.data); // Agregado para depurar
            // console.log(`response`,response );
            // if (userName === "artu" && password === "123456") {
            //     console.log(`artu 123456`);
            //     const { jkt } = response.data;
            //     dispatch({ type: SET_AUTH, payload: { jkt } });
            //     localStorage.setItem("auth", jkt);
            //     return jkt;
            // } else {
            //     // Manejar caso cuando las credenciales no son correctas
            //     // Puedes lanzar un error o manejarlo de alguna manera
            //     console.error("Credenciales incorrectas");
            // }


    };



    const setAuth = ({jkt}) => {
        dispatch({ type: SET_AUTH, payload: { jkt } });
    };

    return (
        <Provider value={{ state, setAuth, logout, login, getUserInformarion }}>
            {children}
        </Provider>
    );
};