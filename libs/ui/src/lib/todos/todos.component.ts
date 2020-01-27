import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nx-practice-app/data';

@Component({
  selector: 'nx-practice-app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
