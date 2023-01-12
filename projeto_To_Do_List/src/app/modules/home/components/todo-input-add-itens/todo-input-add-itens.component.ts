import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo-input-add-itens',
	templateUrl: './todo-input-add-itens.component.html',
	styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit {
	@Output() task = new EventEmitter();
	public addTask: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	add() {
		this.addTask = this.addTask.trim()
		if (this.addTask !== '') {
			this.task.emit(this.addTask);
			this.addTask = '';
		}
	}

}
