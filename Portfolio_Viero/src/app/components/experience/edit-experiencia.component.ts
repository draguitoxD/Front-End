import { SExperienciaService } from './../../service/s-experiencia.service';
import { Experiencia } from './../../model/experiencia';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent {
  expLab: Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe({
      next: (data) => {
        this.expLab = data;
      },
      error: () => {
        alert('Error al editar la experiencia');
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        alert('Error al editar la experiencia');
        this.router.navigate(['']);
      },
    });
  }
}
