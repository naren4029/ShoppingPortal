import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SepServiceManagerService } from './services/serviceManager/sep-service-manager.service';
import { SepFilterDataService } from './services/sepFilterDataService/sep-filter-data.service';
import { WindowEventsService } from './services/windowEventsService/window-events.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}) ,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    SepServiceManagerService,
    SepFilterDataService,
    WindowEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
