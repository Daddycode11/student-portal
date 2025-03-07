import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.css']
})
export class AdviserComponent implements OnInit {
  students = [
    { name: 'John Doe', status: 'Regular' },
    { name: 'Jane Smith', status: 'Irregular' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
