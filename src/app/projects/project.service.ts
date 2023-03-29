import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.baseUrl}/projects`);
  }

  get(id: number): Observable<Project | undefined> {
    return this.http.get<Project[]>(`${environment.baseUrl}/projects`).pipe(
      map((projects) => projects.find((project) => project.id === id))
    );
  }

  add(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.baseUrl}/projects`, project);
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(`${environment.baseUrl}/projects/${project.id}`, project);
  }
}
