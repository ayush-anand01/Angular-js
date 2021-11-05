import { Component, OnInit } from '@angular/core';
import { MatDatepickerToggle } from '@angular/material';
import { ChartType } from 'chart.js';
import { SingleDataSet } from 'ng2-charts';
import { Student } from 'src/app/model/student';
import { Assignment } from './../../../model/assignment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class StudentHomeComponent implements OnInit {

  student: Student;
  myAssignment: Assignment[];
  displayedColumns:string[];
  events: any[] = [];
  datePicker: MatDatepickerToggle<{}>

  pieChartLabels: string[] = [ "Courses", "Students", "Test", "Assignments"]
  pieChartData: SingleDataSet = [3, 10, 23, 10];
  chartType: ChartType = "pie";
  pieChartLegend = true;
  
  constructor() { 
    // this.datePicker  
  }

  ngOnInit() {
    this.myAssignment = [
      { _id: "1", courseCode: "Computer Network", status: "completed", dueDate: "10-11-2021" },
      { _id: "2", courseCode: "Operating system", status: "completed", dueDate: "04-11-2021" },
      { _id: "3", courseCode: "Fog and cloud", status: "pending", dueDate: "10-11-2021" },
      { _id: "4", courseCode: "Data Structure", status: "completed", dueDate: "14-11-2021" },
      { _id: "5", courseCode: "C++ programming", status: "pending", dueDate: "22-11-2021" },

    ]

    this.displayedColumns= [ '_id', 'courseCode', 'status', 'dueDate', 'options'];

  }

  
  chartHovered( $event): void{

  }

  chartClicked( $event): void{

  }
}