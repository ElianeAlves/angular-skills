import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBar, MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { TitleComponent } from './dashboard/title/title.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardProjectComponent } from './dashboard/card-project/card-project.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    CardComponent,
    LoadingComponent,
    TitleComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 3000 }),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
