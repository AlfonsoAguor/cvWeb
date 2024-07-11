import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable()
export class CursoService {
	public cursos: Array<Curso>;

	constructor(){
		this.cursos = [
			new Curso('Curso de angular 15', 15, 'finalizado', 'assets/img/angular.png'),
			new Curso('Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS', 33, 'finalizado', 'assets/img/masterJavaScript.png'),
      new Curso('Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap', 21, 'finalizado', 'assets/img/mastercss.jpg'),
			new Curso('Master en FrameWorks JavaScript', 28, 'en curso', '')
		];
	}

	getCursos(): Array<Curso> {
		return this.cursos;
	}
}
