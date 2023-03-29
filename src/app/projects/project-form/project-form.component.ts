import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Partial<Project> = {};
  @Input() buttonLabel = 'Crea Progetto';
  @Input() quickMode = false;

  @Output() submitted = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  submitProjectForm(form: NgForm): void {
    const { start, end, ...data } = form.value;

    this.submitted.emit({
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      start: new Date(start),
      done: false,
      tasks: [],
      ...(end && { end: new Date(end) }),
      ...data
    });
  }
}
