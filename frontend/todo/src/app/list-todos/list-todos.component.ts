import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service'
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo []
  message: string

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('hector').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id){
    console.log(`delete ${id}`);
    this.todoService.deleteTodo('hector', id).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted todo item ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id])
  }
}
