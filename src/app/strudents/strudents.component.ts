import { Component, OnInit  } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-strudents',
  templateUrl: './strudents.component.html',
  styleUrls: ['./strudents.component.css']
})
export class StrudentsComponent  implements OnInit{
  constructor( private users : StudentService){

  };

sum = 0;
title  = "This is Component title";

private name = "ujjwal";
result : any;
age :string = '';
userList = [];
  calculate(num1 : number, num2 : number){
    this.sum = num1 + num2;
    return this.sum;
  }

  ngOnInit(): void {
      
  }
  saveData(){
    let info = {
      sumVal: this.calculate(5,5),
      name: "Add Two number",
    }

    this.saveDataIntoConsole(info);
    this.users.getUserDetails().subscribe(response => {
      this.userList = response;
      this.age = response.age;
    })
    // this.service.SaveDetails(info).subscribe(response => {
    //   this.result = response;
    // } )
  



  }

  StudentResult(){
    if(this.calculate(10,20) >= 40){
      return "Pass";
    }
    return "Fail";
  }

 


  saveDataIntoConsole(info : any ){
    console.log(info);
  }
}
