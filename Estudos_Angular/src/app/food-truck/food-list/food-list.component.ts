import { Component, DoCheck, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/food-truck/service/food-list.service';

@Component({
	selector: 'app-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit, DoCheck {
	public foodList: String[] = [];

	constructor(private foodListService: FoodListService) { }

	ngOnInit(): void {
		this.foodListService.event.subscribe(
			res => alert(`Olha você adicionou uma nova comida ${res.food}`)
		);
	}

	ngDoCheck(): void {
		this.foodList = this.foodListService.foodList()
	}


}
