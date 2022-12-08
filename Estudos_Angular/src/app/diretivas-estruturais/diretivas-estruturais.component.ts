import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-diretivas-estruturais',
	templateUrl: './diretivas-estruturais.component.html',
	styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
	public form!: FormGroup
	public hide!: boolean;
	public selectNumber!: number;
	public items: Array<{ nome: string }> = [
		{ nome: 'Arthur' },
		{ nome: 'Breno' },
		{ nome: 'Cleiton' },
		{ nome: 'Daniel' },
		{ nome: 'Emanuel' },
		{ nome: 'Felix' },
		{ nome: 'Gabriel' },
		{ nome: 'Heitor' },
		{ nome: 'Ismael' },
		{ nome: 'Jack' },
		{ nome: 'Kros' },
		{ nome: 'Lauro' },
		{ nome: 'Manuel' },
	]
	constructor(
		private formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			selectNumber: [0, [Validators.max(10)]]
		})

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

	addItems() {
		this.items.push({ nome: "Testando" });
	}

	deleteItems() {
		this.items.pop()
	}

	sumNumber() {
		if (this.selectNumber >= 0 && this.selectNumber <= 10) {
			this.selectNumber += 1;
		}

	}

}
