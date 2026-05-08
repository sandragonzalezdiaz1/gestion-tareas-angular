import { Component, signal } from '@angular/core';
import { GestorTareasComponent } from "./gestor-tareas/gestor-tareas.component";

@Component({
  selector: 'app-root',
  imports: [GestorTareasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {}
