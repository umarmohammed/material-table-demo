import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { getColumnNames } from './util/data-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$ = this.dataService.getData();

  constructor(private dataService: DataService) {}
}
