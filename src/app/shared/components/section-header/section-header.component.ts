import { Component, Input, OnInit } from '@angular/core';
import Button from '../../models/button';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() set button(value: Button) {
    this._button = { ...this._button, ...value };
  };

  _button: Button = { label: '', link: '#', type: 'btn-link' };

  constructor() { }

  ngOnInit(): void {
  }

}
