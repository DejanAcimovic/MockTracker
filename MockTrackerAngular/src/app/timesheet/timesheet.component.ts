import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeSheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  sheets:TimeSheet[]=[];
  displayedColumns: string[] = ['Task type', 'Duration', 'Billable', 'symbol'];
  dataSource = new MatTableDataSource<TimeSheet>(this.sheets);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private timesheetService:TimesheetService) 
  {


   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
     this.GetSheets();
     
  }

  GetSheets():void{
  this.timesheetService.getTimeSheets().subscribe(sheets=>this.sheets=sheets)

  }
}
