
import { Usuario } from "src/app/models/usuario.model";
import * as fromUsuarios from '../actions';


export interface UsuariosState{
  user: Usuario[];
  loaded: boolean,
  loading: boolean,
  error: any;

}

const estadoInicial: UsuariosState = {
  user: [],
  loaded: false,
  loading: false,
  error: null
};

export function usuariosReducer(state = estadoInicial,action: fromUsuarios.usuariosAcciones): UsuariosState{

  switch (action.type) {

    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error : null
      };

    case fromUsuarios.CARGAR_USUARIOS_SUCCES:
      return {
        ...state,
        loading: false,
        loaded: true,
        user:[...action.usuarios]
      };

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          urel: action.payload.url
        }
      };

    default: return state;
  }

  }
