import { Injectable } from "@angular/core"
import { Actions,  createEffect,  ofType} from '@ngrx/effects';

import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import {UsuarioService } from '../../services/usuario.service';

import * as usuarioActions from '../actions';



@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions,
    public UsuariosService: UsuarioService) { }

   cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(usuarioActions.CARGAR_USUARIO),
     switchMap(accion => {

      const id = accion['id']
       return this.UsuariosService.getUserByID(id)
        .pipe(
          map(user => new usuarioActions.CargarUsuariosSucces_(user)),
           catchError(error => of(new usuarioActions.CargarUsuariosFail_(error))))
    } )));
}

