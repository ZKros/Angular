import { Component, DoCheck, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultAlert } from '../../model/result-alert';
import { TaskList } from '../../model/task-list';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {
	public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

	constructor() { }

	ngOnInit(): void {
	}

	ngDoCheck(): void {
		this.setLocalStorage()
	}

	public deleteItem(index: number, message: string) {
		if (message.length == 0) {
			Swal.fire({
				text: "Tarefa está vazia, deseja deleter essa tarefa?",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Sim',
				cancelButtonText: 'Não',
				reverseButtons: true,
				confirmButtonColor: '#28a745',
				cancelButtonColor: '#c82333',
			}).then((result: ResultAlert) => {
				if (result.isConfirmed) {
					this.taskList.splice(index)
				}
			})
		} else if (message.match('delete')) {
			Swal.fire({
				text: "Tem certeza que quer deleter essa tarefa?",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Sim',
				cancelButtonText: 'Não',
				reverseButtons: true,
				confirmButtonColor: '#28a745',
				cancelButtonColor: '#c82333',
			}).then((result: ResultAlert) => {
				if (result.isConfirmed) {
					this.taskList.splice(index)
				}
			})
		}
	}

	public deleteAllTask() {
		Swal.fire({
			text: "Tem certeza que quer deleter todas as tarefas?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sim',
			cancelButtonText: 'Não',
			reverseButtons: true,
			confirmButtonColor: '#28a745',
			cancelButtonColor: '#c82333',
		}).then((result: ResultAlert) => {
			if (result.isConfirmed) {
				this.taskList = [];
			}
		})
	}

	newTask(e: string) {
		this.taskList.push({ task: e, checked: false })
	}

	setLocalStorage() {
		if (this.taskList) {
			this.taskList.sort((checkedFalse, CheckedTrue) => Number(checkedFalse.checked) - Number(CheckedTrue.checked))
			localStorage.setItem("list", JSON.stringify(this.taskList))
		}
	}
}
