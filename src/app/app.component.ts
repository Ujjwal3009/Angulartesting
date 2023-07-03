import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';

   count = 1;

   increaseCount(){
    this.count++;
   }

   decreaseCount(){
    this.count--;
   }




  showMessage(message : string){
    return message;
  }

  additionofTwoNumber(num1 : number , num2 : number){
    return num1 + num2;
  }
}
