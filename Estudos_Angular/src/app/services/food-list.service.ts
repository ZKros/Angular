import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FoodListService {
	private list: Array<string> = [
		"X-Bacon",
		"X-Salada",
		"X-Tudo"
	];

	constructor() { }

	public foodList() {
		return this.list;
	}
}
