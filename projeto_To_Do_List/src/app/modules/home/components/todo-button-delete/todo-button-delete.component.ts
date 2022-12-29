import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo-button-delete',
	templateUrl: './todo-button-delete.component.html',
	styleUrls: ['./todo-button-delete.component.css']
})
export class TodoButtonDeleteComponent implements OnInit {
	@Output() buttonDelete = new EventEmitter()

	constructor() { }

	ngOnInit(): void {
	}

	public clickDelete(e: MouseEvent) {
		this.buttonDelete.emit(e)
	}
}
