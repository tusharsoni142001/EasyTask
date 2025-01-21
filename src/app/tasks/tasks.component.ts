import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { every } from 'rxjs';
import { addTask } from './task/task.model';
import { TasksService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!: string;
  @Input() cancel!: boolean;

  showAddTask: boolean = false;

  constructor(public tasksService: TasksService){}


  
  get selectedUserTasks()
  {
    return this.tasksService.getUserTasks(this.userId);
  }


  addTaskCheck()
  {
    this.showAddTask = true;
  }

  onCloselAddTask()
  {
    this.showAddTask=false;
  }


}


