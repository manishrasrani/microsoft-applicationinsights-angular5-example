import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppInsightsModule } from 'microsoft-applicationinsights-angular5';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, AppInsightsModule.forRoot('ee846cbc-14ab-4233-905e-a13bfd30200d')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
