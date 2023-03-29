import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$!: Observable<Project | undefined>;
  editMode = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectId = +(params.get('id') || 0);

        return this.projectService.get(projectId);
      })
    );
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

  updateProject(project: Project): void {
    this.projectService.update(project).subscribe();
    this.changeEditMode();
  }
}
