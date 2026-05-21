import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);

  private API_USARIOS = 'https://eduardo-b4f86-default-rtdb.firebaseio.com/usuarios.json'

  //Método POST
  postUsuarios(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.API_USARIOS, usuario);
  }
  
  //GET
 getUsuarios(): Observable<Usuario[]> {
  return this.http
    .get<{ [key: string]: Usuario }>(this.API_USARIOS)
    .pipe(
      map(res => {
        if (!res) return [];

        return Object.keys(res).map(id => ({
          ...res[id],
          id: id
        }));
      })
    );
}
}
