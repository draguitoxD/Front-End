import { Experiencia } from './../../model/experiencia';
import { TokenService } from 'src/app/service/token.service';
import { SExperienciaService } from './../../service/s-experiencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  expe: Experiencia[] = [];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.expe = data;
    });
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe({
        next: () => {
          this.cargarExperiencia();
        },
        error: () => {
          alert('Falló');
        },
      });
    }
  }
}
