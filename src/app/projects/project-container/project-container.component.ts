import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Project } from '../../models/project';
import { SearchProject } from '../../models/search-project';
import { ProjectService } from '../services/project.service';
import {LoggingService} from "../../core/logging/logging.service";

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
  // providers: [LoggingService]
})
export class ProjectContainerComponent implements OnInit {
  projects$!: Observable<Project[]>;
  selectedProject: Project | undefined;
  searchedProject!: SearchProject;

  constructor(
    private loggingService: LoggingService,
    public projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();

    this.loggingService.addLog("Hello from ProjectContainerComponent!")
    this.loggingService.consoleLogs();
  }

  selectProject(project: Project): void {
    this.router.navigateByUrl(`/projects/${project.id}`);
  }

  addNewProject(project: Project): void {
    this.projectService.add(project).pipe(
      tap(() => this.projects$ = this.projectService.getAll())
    ).subscribe();
  }

  searchProject(searchedProject: SearchProject): void {
    this.searchedProject = searchedProject;
  }
}
