import { Component } from '@angular/core';
import {Task} from 'src/app/Task';
import {TASKS} from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:Task[] = TASKS;
  faTimes = faTimes;
}
