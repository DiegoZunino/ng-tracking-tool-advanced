import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Project} from '../../models/project';
import {ProjectService} from '../services/project.service';
import {LoggingService} from "../../core/logging/logging.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$!: Observable<Project | undefined>;
  editMode = false;

  constructor(
    private loggingService: LoggingService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.project$ = this.activatedRoute.data.pipe(
      map((data) => data['project'])
    )

    this.loggingService.addLog("Hello from ProjectDetailComponent!")
    this.loggingService.consoleLogs();
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

  updateProject(project: Project): void {
    this.projectService.update(project).subscribe();
    this.changeEditMode();
  }
}
