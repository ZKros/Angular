import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo-button-delete',
	templateUrl: './todo-button-delete.component.html',
	styleUrls: ['./todo-button-delete.component.css']
})
export class TodoButtonDeleteComponent implements OnInit {
	@Output() task = new EventEmitter()

	constructor() { }

	ngOnInit(): void {
	}

	delete(e: MouseEvent) {
		this.task.emit(e)
	}
}
