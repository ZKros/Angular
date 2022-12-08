import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipes',
	templateUrl: './pipes.component.html',
	styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
	public dinheiro: number = 1500
	public nome: string = "Daniel"
	public sobrenome: string = "Pereira"
	public titulo: string = "pokemon digimon"
	public data: Date = new Date

	constructor() { }

	ngOnInit(): void {
	}

}
