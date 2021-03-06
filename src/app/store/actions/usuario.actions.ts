
import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCES = '[Usuario] Cargar usuario SUCCES';

export class CargarUsuarios_ implements Action{
  readonly type = CARGAR_USUARIO;
  constructor(public id:string){}
}

export class CargarUsuariosFail_ implements Action{
  readonly type = CARGAR_USUARIO_FAIL;
  constructor(public payload:any) {
  }
}

export class CargarUsuariosSucces_ implements Action{
  readonly type = CARGAR_USUARIO_SUCCES;
  constructor(public usuario: Usuario) {
  }
}

export type usuarioAcciones = CargarUsuarios_ | CargarUsuariosSucces_ | CargarUsuariosFail_ ;
