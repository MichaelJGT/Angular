import { CAMBIAR_LOGIN, CAMBIAR_NOMBRE, CAMBIAR_EDAD } from "./redux-actions";
import { tassign } from "tassign";

export interface IappState{
    //Aqui van los tipos de las variables de la aplicación.
    //Declaración de las variables globales.

    login: boolean;
    usuario: String;
    edad: number;
}
export const INITIAL_STATE: IappState={
    //Valores iniciales de las variables del objeto INITIAL... tipo interfaz Iappstate.
    login:true,
    usuario:"user",
    edad:25
}
//action => cambios en los valores login,usuario y edad.
//
export function rootReducer(state, action){
    switch (action.type) {
        case CAMBIAR_LOGIN:
            return tassign(state, action.data);
            break;
        case CAMBIAR_NOMBRE:
            return tassign(state, action.data);
            break;
        case CAMBIAR_EDAD:
            return tassign(state, action.data);
            break;
        default:
            break;
    }

    return state;
}