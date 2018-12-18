import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-sheet-table',
  templateUrl: './time-sheet-table.component.html',
  styleUrls: ['./time-sheet-table.component.css']
})
export class TimeSheetTableComponent implements OnInit {

  displayedColumns: string[] = ['No.', 'Task', 'Duration', 'Billable'];
  @Input() dataSource;
  constructor() { }

  ngOnInit() {
  }

}
