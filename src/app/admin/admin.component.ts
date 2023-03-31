import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../core/logging/logging.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.addLog("Hello from AdminComponent!")
    this.loggingService.consoleLogs();
  }

}
