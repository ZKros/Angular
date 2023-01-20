import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/food-truck/service/food-list.service';
import { FoodAddModel } from '../model/food-add.model';

@Component({
	selector: 'app-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
	public foodList: string[] = [];

	constructor(private foodListService: FoodListService) { }

	ngOnInit(): void {
		this.foodList = this.foodListService.foodList();
	}

}
