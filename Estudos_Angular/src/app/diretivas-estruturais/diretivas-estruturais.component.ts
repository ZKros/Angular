import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretivas-estruturais',
	templateUrl: './diretivas-estruturais.component.html',
	styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
	public hide!: boolean;
	public items = [
		{nome: 'Arthur'},
		{nome: 'Breno'},
		{nome: 'Cleiton'},
		{nome: 'Daniel'},
		{nome: 'Emanuel'},
		{nome: 'Felix'},
		{nome: 'Gabriel'},
		{nome: 'Heitor'},
		{nome: 'Ismael'},
		{nome: 'Jack'},
		{nome: 'Lauro'},
		{nome: 'Manuel'},
		{nome: 'Marlon'},
	]
	constructor() { }

	ngOnInit(): void {
		setInterval(() => {
			if (this.hide === undefined) {
				this.hide = false;
			} else if (this.hide === true) {
				this.hide = false;
			} else {
				this.hide = true;
			}
		}, 5000)

	}

	show() {
		if (this.hide === false) {
			this.hide = true;
		} else {
			this.hide = false;
		}
	}
}
