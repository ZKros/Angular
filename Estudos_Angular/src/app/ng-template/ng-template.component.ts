import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-template',
	templateUrl: './ng-template.component.html',
	styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {
	public tempo?: boolean = undefined
	public list: Array<string> = ["Daniel", "Dener", "Kros"]

	constructor() { }

	ngOnInit(): void {
		setInterval(() => {
			if (this.tempo == undefined) {
				this.tempo = true
			} else if (this.tempo == true) {
				this.tempo = false
			} else {
				this.tempo = true
			}
		}, 2500)
	}

}
