import { Injectable } from "@angular/core"
import { Actions,  createEffect,  ofType} from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import {UsuarioService } from '../../services/usuario.service';

import * as usuariosActions from '../actions';



@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions,
    public UsuariosService: UsuarioService) { }

  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    mergeMap(() => this.UsuariosService.getUsers()
      .pipe(
        map(user => new usuariosActions.CargarUsuarioSucces(user)),
        catchError(error=>of( new usuariosActions.CargarUsuarioFail(error)))
    ))
  )
  );

}
