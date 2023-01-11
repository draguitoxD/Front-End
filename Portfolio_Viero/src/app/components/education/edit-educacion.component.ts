import { SEducacionService } from 'src/app/service/s-educacion.service';
import { Educacion } from './../../model/educacion';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent {
  eduLab: Educacion = null;

  constructor(
    private sEducacion: SEducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe({
      next: (data) => {
        this.eduLab = data;
      },
      error: () => {
        alert('Error al editar el Estudio');
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.eduLab).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        alert('Error al editar el Estudio');
        this.router.navigate(['']);
      },
    });
  }
}
