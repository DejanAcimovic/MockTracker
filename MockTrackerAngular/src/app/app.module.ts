import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
//angular material modules --> TODO: Move all to one separate module and import it here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//
import { HttpClientModule } from '@angular/common/http';
import { TimeSheetTableComponent } from './time-sheet-table/time-sheet-table.component';
import { BoolToYesOrNoPipe } from './bool-to-yes-or-no.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    TimeSheetTableComponent,
    BoolToYesOrNoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
