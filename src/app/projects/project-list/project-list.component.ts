import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project';
import {LoggingService} from "../../core/logging/logging.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.addLog("Hello from ProjectListComponent!")
    this.loggingService.consoleLogs();
  }

  select(project: Project): void {
    this.selected.emit(project);
  }
}
