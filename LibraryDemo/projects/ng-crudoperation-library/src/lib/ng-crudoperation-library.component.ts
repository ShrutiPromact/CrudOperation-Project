import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Employee } from './crudoperation-employee.model';

@Component({
  selector: 'lib-ng-crudoperation-library',
  templateUrl: './ng-crudoperation-library.html',
})
export class NgCrudoperationLibraryComponent implements OnInit {
  eId: string;
  eName: string;
  eNumber: string;
  empArray =  Array<Employee>();
  empObj: Employee;
  eIdErrmsg: string;
  action: string;
  isEdit: boolean;
  index: number;
  isEmployeeListTable: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.action = 'Add New Employee';
    this.isEmployeeListTable = false ; 
  }

  /**
   * Method for add and update employee
   */
  addNewEmployee() {
    if (this.eId && this.eName && this.eNumber) {
      this.empObj = {
        id: this.eId,
        name: this.eName,
        phoneNumber: this.eNumber
      };
      if (!this.isEdit) {
        this.empArray.push(this.empObj);
        this.isEmployeeListTable = true; 
      } else {
        this.empArray.splice(this.index, 1, this.empObj);
      }
      this.eId = '';
      this.eName = '';
      this.eNumber = '';  
      this.action = 'Add New Employee';
      this.isEdit = false;
    }   
  }

  /**
   * Method for delete Employee
   */
  deleteEmployee(array, elem) {
    this.index = array.indexOf(elem);
    while (this.index > -1) {
      array.splice(this.index, 1);
      this.index = array.indexOf(elem);
    }
  }

  /**
   * Method for edit employee
   */
  editEmployee(array, elem) {
    this.isEdit = true;
    this.action = 'Update Employee detail';
    this.eId = elem.id;
    this.eName = elem.name;
    this.eNumber = elem.phoneNumber;
    this.index = array.indexOf(elem);
  }

}

