import { SEducacionService } from './../../service/s-educacion.service';
import { Educacion } from './../../model/educacion';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  edu: Educacion[] = [];

  constructor(
    private sEducacion: SEducacionService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.edu = data;
    });
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe({
        next: () => {
          this.cargarEducacion();
        },
        error: () => {
          alert('Falló');
        },
      });
    }
  }
}
