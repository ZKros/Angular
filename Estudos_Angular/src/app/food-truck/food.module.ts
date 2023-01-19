import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListComponent } from './food-list/food-list.component';



@NgModule({
	declarations: [
		FoodListComponent,
		FoodAddComponent
	],
	exports: [
		FoodListComponent,
		FoodAddComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
	]
})
export class FoodModule { }
