import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from 'microsoft-applicationinsights-angular5';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logger: AppInsightsService) { }

  ngOnInit() {
    this.logger.logEvent("Header initialized");
  }
}