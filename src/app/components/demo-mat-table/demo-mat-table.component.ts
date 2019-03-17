import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { getColumnNames } from 'src/app/util/data-utils';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-demo-mat-table',
  templateUrl: './demo-mat-table.component.html',
  styleUrls: ['./demo-mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoMatTableComponent implements OnInit, OnChanges {
  @Input()
  data: any[];

  dataSource = new MatTableDataSource();
  displayedColumns = getColumnNames();
  filterValue = '';
  filterData = this.data;

  constructor() {}

  ngOnInit() {
    this.filterData = this.data;
    this.dataSource.data = this.filterData;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterData = this.data;
    this.filterValue = '';
  }

  applyFilter() {
    this.filterData = this.data.filter(d => {
      const values = Object.values(d).join('');
      return values.includes(this.filterValue);
    });
  }
}
