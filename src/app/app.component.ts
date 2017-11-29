import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from 'microsoft-applicationinsights-angular5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logger: AppInsightsService) { }
  
  ngOnInit() {
    this.logger.logTrace("AppComponent initialized");
    this.logger.logEvent("AppComponent initialized");
    this.logger.logPageView("AppComponent", "http://localhost:4200");
    this.logger.logException(new Error("Test exception"));
  }
}