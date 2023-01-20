import { Injectable } from '@angular/core';
import { FoodAddModel } from '../model/food-add.model';

@Injectable({
	providedIn: 'root'
})
export class FoodListService {
	private foodTruck: Array<FoodAddModel> = [
		{ food: "X-Bacon" },
		{ food: "X-Salada" },
		{ food: "X-Tudo" },
	];

	constructor() { }

	public foodList() {
		return this.foodTruck.map((res) => { return res.food });
	}

	public foodListAdd(obj: FoodAddModel) {
		console.log(this.foodTruck.push(...[obj]))
		return this.foodTruck.push(...[obj])
	}
}
