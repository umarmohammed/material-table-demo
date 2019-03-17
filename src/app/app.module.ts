import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { DemoMatTableComponent } from './components/demo-mat-table/demo-mat-table.component';
import { DemoCdkScrollComponent } from './components/demo-cdk-scroll/demo-cdk-scroll.component';

const routes: Routes = [
  { path: 'material-table', component: DemoMatTableComponent },
  { path: 'cdk-scroll', component: DemoCdkScrollComponent },
  { path: '', redirectTo: 'material-table', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, DemoMatTableComponent, DemoCdkScrollComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollDispatchModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
