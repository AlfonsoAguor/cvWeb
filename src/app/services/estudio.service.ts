import { Injectable } from '@angular/core';
import { Estudio } from '../models/estudios';

@Injectable()
export class EstudioService {
	public estudios:Array<Estudio>;

	constructor(){
		this.estudios=[
			new Estudio('Curso de especialización en ciberseguridad en entornos de las tecnologías de la información',9,2023,6,2024,'IES Juan Bosco, Alcázar de San Juan (Ciudad real)'),
			new Estudio('Grado Superior en Administración de Sistemas Informáticos y Redes',9,2019,6,2021,'IES Valdehierro, Madridejos (Toledo)'),
			new Estudio('Grado Medio en Sistemas Microinformaticos y Redes',9,2017,6,2019,'IES Valdehierro, Madridejos (Toledo)'),
		]
	}

	getEstudios(): Array<Estudio>{
		return this.estudios;
	}

}