import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(edu).subscribe({
      next: () => {
        alert('Estudio añadido');
        this.router.navigate(['']);
      },
      error: () => {
        alert('Falló');
        this.router.navigate(['']);
      },
    });
  }

  Mensaje(): void {
    alert('Mensaje');
  }
}
