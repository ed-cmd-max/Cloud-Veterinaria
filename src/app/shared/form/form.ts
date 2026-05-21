import { Component, inject, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
 
  private usuarioServicio = inject(UsuarioService);

  nuevoUsuario:Usuario={
    nombre:'',
    email:'',
    telefono:''
  }

  listaUsuarios = signal<Usuario[]>([]);

    ngOnInit(): void {
    this.usuarioServicio.getUsuarios().subscribe(users => {
      this.listaUsuarios.set(users);
    });
  }
  registrar(){
    this.usuarioServicio.postUsuarios(this.nuevoUsuario).subscribe(
      user =>{
        this.listaUsuarios.set([user, ...this.listaUsuarios()]);
        this.nuevoUsuario={nombre:'', email:'', telefono:''};
        console.log("Usuario registrado");
      }
    )
  }


}
