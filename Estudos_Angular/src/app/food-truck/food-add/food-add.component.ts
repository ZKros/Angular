import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodAddModel } from '../model/food-add.model';
import { FoodListService } from '../service/food-list.service';

@Component({
	selector: 'app-food-add',
	templateUrl: './food-add.component.html',
	styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

	public foodForm!: FormGroup

	constructor(private fb: FormBuilder, private foodListService: FoodListService) { }

	ngOnInit(): void {
		this.foodForm = this.fb.group(new FoodAddModel)
	}

	save() {
		if (this.foodForm.valid) {
			return this.foodListService.foodListAdd(this.foodForm.getRawValue())
		}
		return
	}
}
