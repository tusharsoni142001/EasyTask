import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTask } from '../task/task.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required:true}) userId!:string;

  title='';
  summary='';
  dueDate='';

  private taskService = inject(TasksService)

  onCancel()
  {
    this.close.emit();
  }

  onSubmit()
  {
    // return this.add.emit({
    //   title: this.title,
    //   summary: this.summary,
    //   dueDate: this.dueDate
    // })

    this.taskService.addTask({
      title:this.title,
      summary:this.summary,
      dueDate: this.dueDate
    },this.userId)

    this.close.emit();
  }
}
