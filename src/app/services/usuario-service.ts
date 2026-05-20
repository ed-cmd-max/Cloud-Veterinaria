import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  private API_USARIOS = 'https://app-fire-98f40-default-rtdb.firebaseio.com/usuarios.json'

  //Método POST
  postUsuarios(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.API_USARIOS, usuario);
  }
  
}
