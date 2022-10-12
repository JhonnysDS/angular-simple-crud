import { provideImageKitLoader } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple-crud';
  employeeArray: Employee[] = [
    {
      id: 1,
      name: "Kalel",
      country: "kripton"
    },
    {
      id: 2,
      name: "peter parker",
      country: "USA"
    },
    {
      id: 3,
      name: "Bruce Wayne",
      country: "Gotham"
    }
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }
  
}
