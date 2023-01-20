import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	exports: [
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule
	],
})
export class MaterialModule { }

