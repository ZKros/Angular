import { EventEmitter, Injectable } from '@angular/core';
import { FoodAddModel } from '../model/food-add.model';

export interface IFood {
	food: String
}

@Injectable({
	providedIn: 'root'
})
export class FoodListService {
	public event = new EventEmitter
	private foodTruck: IFood[] = [
		{ food: "X-Bacon" },
		{ food: "X-Salada" },
		{ food: "X-Tudo" },
	];

	constructor() { }

	public foodList() {
		return this.foodTruck.map((res) => { return res.food });
	}

	public foodListAdd(obj: FoodAddModel) {
		this.foodListAlert(obj)
		this.foodTruck.push(obj)
		return this.foodTruck = [...this.foodTruck]
	}

	public foodListAlert(obj: FoodAddModel) {
		return this.event.emit(obj)
	}
}
