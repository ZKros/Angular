import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FoodListService {
	private foodTruck: Array<string> = [
		"X-Bacon",
		"X-Salada",
		"X-Tudo"
	];

	constructor() { }

	public foodList() {
		return this.foodTruck;
	}
}
