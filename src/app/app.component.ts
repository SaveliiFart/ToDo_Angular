import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoGroupComponent } from './components/todo-group/todo-group.component';
import { CommonModule } from '@angular/common';
import { TodoGroup, TodoItem, ToDoStatus } from './interfaces/todo-group.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoGroupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [{
      title: 'First Group',
      items: [{
        title: 'First Item',
        status: ToDoStatus.IN_PROGRESS,
        description: 'This is the first item in the first group.'
      },
      {
        title: 'Second Item',
        status: ToDoStatus.DONE,
        description: 'This is the second item in the first group.'
      },
      {
        title: 'Third Item',
        status: ToDoStatus.NOT_STARTED,
        description: 'This is the third item in the first group.'
      }]
    }]
  }

  public addGroup(): void {
    let tempGroup: TodoGroup = {
      title: '',
      items: []
    };

    this.todoGroups.push(tempGroup);
  }

  public handleChangeTitle(value: {value: string, index: number}): void {
    this.todoGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(index: number): void {
    this.todoGroups.splice(index, 1);
  }

  public handleNewItem(value: {item: TodoItem, index: number}): void {
    this.todoGroups[value.index].items?.push(value.item);
  }

  public handleChangeItemDescription(value: {description: string, indexGroup: number, indexItem: number}): void {
    this.todoGroups[value.indexGroup].items![value.indexItem].description = value.description;
  }
  
  public handleChangeItemStatus(value: {status: ToDoStatus, indexGroup: number, indexItem: number}): void {
    this.todoGroups[value.indexGroup].items![value.indexItem].status = value.status;
  }

  public handleDeleteToDo(value: {indexGroup: number, indexItem: number}): void {
    this.todoGroups[value.indexGroup].items?.splice(value.indexItem, 1);
  }
}
