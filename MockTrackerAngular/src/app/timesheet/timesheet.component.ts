import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeSheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { TaskType } from '../tasktype';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  sheets:TimeSheet[]=[];
 // displayedColumns: string[] = ['Task type', 'Duration', 'Billable', 'symbol'];
  //dataSource = new MatTableDataSource<TimeSheet>(this.sheets);
tasktypes:TaskType[]=[];
  displayedColumns: string[] = ['No.','Task', 'Duration', 'Billable'];
  dataSource ;

 


  constructor(private timesheetService:TimesheetService) 
  {


   }

  ngOnInit() {
   
     this.GetSheets();
     this.dataSource=this.sheets;
     
  }

  GetSheets():void{
  this.timesheetService.getTimeSheets().subscribe(sheets=>this.sheets=sheets)

  }

  GetTaskTypes():void{
    this.timesheetService.getTimeSheets().subscribe(sheets=>this.sheets=sheets)
  
    }

  
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
