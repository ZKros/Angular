import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	public adicionarValor: number = 10;
	public getDados: { nome: string, idade: number } | undefined

	constructor() { }

	ngOnInit(): void { }

	setDados(e: { nome: string, idade: number }) {
		this.getDados = e

	}
}
