import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
	public nome: string = "Daniel";
	public anoAtual!: number;
	public idade: number = 23;
	public form!: FormGroup;
	public imgSrc: string = "https://thumbs.dreamstime.com/b/business-leader-assembling-phrase-good-job-white-cards-letters-them-wooden-background-order-to-compliment-58933365.jpg"
	public hide: boolean = true;
	public position: { x: number, y: number } = { x: 0, y: 1 }
	constructor(
		private formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			hobby: ['', Validators.required]
		})

		this.catchYear()
	}

	catchYear() {
		const currentYear = new Date;
		this.anoAtual = currentYear.getFullYear();
	}

	alertaInfo(value: MouseEvent) {
		console.log(value);
		
	}

	mouseMoveTeste(value: MouseEvent) {
		this.position.x = value.offsetX;
		this.position.y = value.offsetY;
	}

	save() {
		if (this.form.valid) {
			this.hide = false;
			this.form.reset();
		}
	}

}
