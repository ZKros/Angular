import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodAddModel } from '../model/food-add.model';

@Component({
	selector: 'app-food-add',
	templateUrl: './food-add.component.html',
	styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {
	public foodForm!: FormGroup

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.foodForm = this.fb.group(new FoodAddModel)
	}

}
