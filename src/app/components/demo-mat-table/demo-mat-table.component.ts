import { Component, OnInit, Input } from '@angular/core';
import { getColumnNames } from 'src/app/util/data-utils';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-demo-mat-table',
  templateUrl: './demo-mat-table.component.html',
  styleUrls: ['./demo-mat-table.component.scss']
})
export class DemoMatTableComponent implements OnInit {
  @Input()
  data: any[];

  dataSource = new MatTableDataSource();

  displayedColumns = getColumnNames();

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.data;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}