import { Component, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  
  text: string = null!;
  day: string = null!;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('Please add a task.')
      return;
    }
    const newTask = {
      text: this.text,
      day: this. day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false
  }
}
