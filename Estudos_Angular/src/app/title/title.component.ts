import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
	@Input() public title: string = '';
	public valor: number = 0;
	public destruirC: boolean = true
	constructor() { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		console.log("ngOnDestroy");
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log("Alterado com sucesso");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	adicionar(): number {
		return this.valor += 1
	}

	destruir() {
		this.destruirC = false
	}
}
