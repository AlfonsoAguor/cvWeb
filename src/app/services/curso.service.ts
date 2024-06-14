import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';


@Injectable()
export class CursoService {
	public cursos:Array<Curso>;

	constructor(){
		this.cursos=[
			new Curso('Curso de angular 15',15, 'finalizado', 'assets/img/angular.png'),
			new Curso('Master en JavaScript',15, 'finalizado', 'assets/img/masterJavaScript.png'),
			new Curso('Master en FrameWorks JavaScript',15, 'en curso', ''),
		]
	}
	getCursos(): Array<Curso>{
		return this.cursos;
	}
}