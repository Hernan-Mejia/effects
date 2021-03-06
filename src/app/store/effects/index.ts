

export * from './usuarios.effects';
export * from './usuario.effects';

import { UsuariosEffects } from '../effects/usuarios.effects';
import { UsuarioEffects } from '../effects/usuario.effects';


export const effectsArr: any[] = [UsuariosEffects, UsuarioEffects];


