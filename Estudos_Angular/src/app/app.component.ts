import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	public adicionarValor: number = 10;

	constructor() { }

	ngOnInit(): void {
	}

	getDadosPai(e: any) {
		console.log(e)
	}
}
