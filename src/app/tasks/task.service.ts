import { Injectable } from '@angular/core';
import { type addTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks)
    {
      this.tasks = JSON.parse(tasks);
    } 
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: addTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });

    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
