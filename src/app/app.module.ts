import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { effectsArr, UsuariosEffects } from './store/effects';



import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { UsuariosModule } from './usuarios/usuarios.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsuariosModule,
    EffectsModule.forRoot(effectsArr),
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
