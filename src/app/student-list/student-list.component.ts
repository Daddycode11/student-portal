import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students = [
    { name: 'John Doe', status: 'Regular', advisor: 'Dr. Smith' },
    { name: 'Jane Smith', status: 'Irregular', advisor: 'Dr. Johnson' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
