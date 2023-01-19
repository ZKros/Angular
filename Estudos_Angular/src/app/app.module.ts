import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { FoodModule } from "./food-truck/food.module";
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipesComponent } from './pipes/pipes.component';
import { SharedModule } from './shared/shared.module';
import { TitleComponent } from './title/title.component';


@NgModule({
	declarations: [
		AppComponent,
		TitleComponent,
		DataBindingComponent,
		DiretivasEstruturaisComponent,
		DiretivasAtributosComponent,
		NgTemplateComponent,
		PipesComponent
	],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		SharedModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		FoodModule
	]
})
export class AppModule { }
