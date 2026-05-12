import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnInit {
  nombre: string = '';
  rutina: string = '';
  horario: string = '';
  
  listaInscritos: any[] = [];

  ngOnInit() {
    const data = localStorage.getItem('usuarios_inscritos');
    if (data) {
      this.listaInscritos = JSON.parse(data);
    }
  }

  enviar(form: any) {
    if (form.invalid) return;
    
    const nuevoUsuario = {
      nombre: this.nombre,
      rutina: this.rutina,
      horario: this.horario
    };

    this.listaInscritos.push(nuevoUsuario);
    localStorage.setItem('usuarios_inscritos', JSON.stringify(this.listaInscritos));
    
    form.reset();
  }
}