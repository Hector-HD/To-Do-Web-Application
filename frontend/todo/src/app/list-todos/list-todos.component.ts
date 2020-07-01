import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description : 'Learn to Code'},
    {id: 1, description : 'Learn to Cook'},
    {id: 1, description : 'Learn to Program'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
