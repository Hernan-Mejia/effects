import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('usuarios')
      .subscribe(usuarios => {
        this.usuarios = usuarios.user;
        this.loading = usuarios.loading;
        this.error = usuarios.error;

      });

    this.store.dispatch(new usuariosActions.CargarUsuario());

  }

}
