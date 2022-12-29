import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TaskList } from '../../model/task-list';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	public taskList: Array<TaskList> = [
		{ task: "Minha nova Task", checked: true },
		{ task: "Concluido", checked: false }
	]
	constructor() { }

	ngOnInit(): void {
	}

	public deleteItem(e: number) {
		Swal.fire({
			text: "Tem certeza que quer deleter essa tarefa?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sim',
			cancelButtonText: 'Não',
			reverseButtons: true,
			confirmButtonColor: '#1fd655',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.isConfirmed) {
				this.taskList.splice(e, 1)
			}
		})
	}

	public deleteAll() {
		Swal.fire({
			text: "Tem certeza que quer deleter todas as tarefas?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sim',
			cancelButtonText: 'Não',
			reverseButtons: true,
			confirmButtonColor: '#1fd655',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.isConfirmed) {
				this.taskList = [];
			}
		})
	}

}
