import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretivas-atributos',
	templateUrl: './diretivas-atributos.component.html',
	styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
	public valor: boolean = true
	public height: string = "20px"
	public flex: string = "flex"
	public center: string = "center"
	public nome: string = ''
	public list: Array<{ nome: string }> = []

	constructor() { }

	ngOnInit(): void {
		setInterval(() => {
			if (this.valor) {
				this.valor = false
			} else {
				this.valor = true
			}

			if (this.height == "20px") {
				this.height = "25px"
			} else {
				this.height = "20px"
			}
		}, 2500)
	}

	public salvar() {
		this.list.push({ nome: this.nome })
		this.nome = ''
	}
}


