import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia';

@Injectable()
export class ExperienciaService {
	public expes:Array<Experiencia>
	constructor(){
		this.expes=[
			new Experiencia('Media Markt',4,2021,6,2021,['Reparación e instalacion de móviles y ordenadores.','Venta de productos informáticos.']),
			new Experiencia('Servicomtel Telecomunicaciones S.L',4,2021,6,2021,['Instalación y mantenimiento de fibra optica','Configuracion y mantenimiento de redes.'])
		]
	}

	getExp(): Array<Experiencia>{
		return this.expes;
	}

}