import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/auth/services/auth.service";
import {LoggingService} from "./core/logging/logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private loggingService: LoggingService) {}
  ngOnInit(): void {
    this.authService.autologin();

    this.loggingService.addLog("Hello from AppComponent!")
    this.loggingService.consoleLogs();
  }
}
