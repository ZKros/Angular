import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipesComponent } from './pipes/pipes.component';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';


export function tokenGetter() {
	return localStorage.getItem("access_token");
}

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
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ["http://localhost:3000/"],
				disallowedRoutes: ["http://localhost:3000/home"]
			}
		})
	]
})
export class AppModule { }
