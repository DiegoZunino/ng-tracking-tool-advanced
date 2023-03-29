import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { SearchProject } from '../../models/search-project';
import { Priority } from '../../models/project';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {
  @Output() searching = new EventEmitter<SearchProject>();
  @ViewChild('filterName', { static: false }) filterName!: ElementRef;
  @ViewChild('filterPriority', { static: false }) filterPriority!: ElementRef;
  @ViewChild('filterDone', { static: false }) filterDone!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  private get name(): string {
    const inputName = this.filterName.nativeElement as HTMLInputElement;

    return inputName.value;
  }

  private get priority(): Priority {
    const inputPriority = this.filterPriority.nativeElement as HTMLSelectElement;

    return inputPriority.value as Priority;
  }

  private get done(): boolean | undefined {
    const inputDone = this.filterDone.nativeElement as HTMLSelectElement;

    return inputDone.value ? inputDone.value === 'true' : undefined;
  }

  search(): void {
    this.searching.emit({
      name: this.name,
      priority: this.priority,
      done: this.done,
    })
  }
}
