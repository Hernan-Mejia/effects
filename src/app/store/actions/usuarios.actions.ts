
import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCES = '[Usuarios] Cargar usuarios SUCCES';

export class CargarUsuario implements Action{
  readonly type = CARGAR_USUARIOS;
}
export class CargarUsuarioFail implements Action{
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor(public payload:any) {
  }
}

export class CargarUsuarioSucces implements Action{
  readonly type = CARGAR_USUARIOS_SUCCES;
  constructor(public usuarios: Usuario[]) {
  }
}

export type usuariosAcciones = CargarUsuario | CargarUsuarioSucces | CargarUsuarioFail ;
