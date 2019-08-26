import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  qualification: string[];
  experience: string[];
  errorMessage: string;
  newTags = '';
  languages: string[]; 

  constructor() { }

  employee: Employee = {
    firstName: null,
    lastName: null,
    email: null,
    experience: null,
    qualification: null,
    languages: null
  };

  ngOnInit() {
    this.qualification = ['BE', 'ME' ];
    this.experience = ['Fresher', 'Experienced(0 to 1 years)','Experienced(1 to 3 years)','Experienced(3 to 5 years)','Experienced(above 5 years)',];
    this.languages=['English','Hindi','Gujarati'];
  }

  onSubmit(form: NgForm) {
    console.log(this.employee);
  }
}
