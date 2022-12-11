import { Component, Input, OnInit} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {

  constructor(
    private taskService : TaskService //Inicializo el servicio
  ){}

//  @Input() task:Task= (this.taskService.getTasks() );
  @Input() task:Task={ id:0,text:"",day:"",reminder: false};

  faTimes = faTimes;

}
