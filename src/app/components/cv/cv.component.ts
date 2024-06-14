import { Component, HostListener } from '@angular/core';
import { Estudio } from '../../models/estudios';
import { Curso } from '../../models/curso';
import { Experiencia } from '../../models/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';
import { EstudioService } from '../../services/estudio.service';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [ExperienciaService, EstudioService, CursoService]
})
export class CvComponent {
  public isSmallScreen: boolean;
  public tituloOpenIndex: number[] = [];

  public expes: Array<Experiencia>;
  public estudios: Array<Estudio>;
  public cursos: Array<Curso>;


  constructor(
    private _experienciaService: ExperienciaService,
    private _estudioService: EstudioService,
    private _cursoService: CursoService
  ){
    this.isSmallScreen = false;

    this.expes=[];
    this.estudios=[];
    this.cursos=[];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();

    this.expes = this._experienciaService.getExp();
    this.estudios = this._estudioService.getEstudios();
    this.cursos = this._cursoService.getCursos();
  }

  getMonthName(month: number): string {
    const adjustedMonth = month - 1;
    const date = new Date(0, adjustedMonth);
    return date.toLocaleString('default', { month: 'long' });
  }

  toggleTitulo(index: number) {
    const indexFound = this.tituloOpenIndex.indexOf(index);
    if (indexFound !== -1) {
      this.tituloOpenIndex.splice(indexFound, 1);
    } else {
      this.tituloOpenIndex.push(index);
    }
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 576;
  }
}
