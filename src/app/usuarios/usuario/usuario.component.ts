import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from '../../store/actions/usuario.actions'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;
  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }


  ngOnInit(): void {

    this.router.params
      .subscribe(params => {

        const id = params['id'];
        console.log(id);

        this.store.dispatch(new usuarioActions.CargarUsuarios_(id));
      });

    this.store.select('usuario')
      .subscribe(usuario => {
        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
      });

  }

}
