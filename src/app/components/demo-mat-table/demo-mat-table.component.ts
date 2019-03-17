import { Component, OnInit, Input } from '@angular/core';
import { getColumnNames } from 'src/app/util/data-utils';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-mat-table',
  templateUrl: './demo-mat-table.component.html',
  styleUrls: ['./demo-mat-table.component.scss']
})
export class DemoMatTableComponent implements OnInit {
  @Input()
  data$: Observable<any[]>;

  dataSource = new MatTableDataSource();

  displayedColumns = getColumnNames();

  constructor() {}

  ngOnInit() {
    this.data$.subscribe(data => (this.dataSource.data = data));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
