import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})


export class TasksItemComponent{

  constructor(
    private taskService : TaskService //Inicializo el servicio
  ){}

  
  @Input() task:Task={ id:0,text:"",day:"",reminder: false};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;
  faTimes = faTimes;

  onDelete(task:Task){
      this.onDeleteTask.emit(task);
    }

  onToggle(task:Task){
      this.onToggleReminder.emit(task);
  }

}
