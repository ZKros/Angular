import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-output',
	templateUrl: './output.component.html',
	styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
	@Output() enviarDados = new EventEmitter()
	public list: Array<{ nome: string, idade: number }> = [
		{ nome: "Daniel", idade: 23 },
		{ nome: "Kros", idade: 22 },
		{ nome: "Zero", idade: 21 },
		{ nome: "Law", idade: 20 }
	]

	constructor() { }

	ngOnInit(): void {
	}

	getDados(e: number) {
		this.enviarDados.emit(this.list[e])
	}
}
