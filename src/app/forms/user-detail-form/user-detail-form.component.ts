import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css']
})
export class UserDetailFormComponent  implements OnInit{
  detailForm: FormGroup =  this.formBuilder.group({
    name: ['', Validators.required],
    password : ['',Validators.required]
  });
  

  constructor(private formBuilder : FormBuilder){

  }

  ngOnInit(): void {
   
      
  }

  createDetailForm():void {
    this.detailForm = this.formBuilder.group({
      name: ['', Validators.required],
      password : ['',Validators.required]
    });
  }


  onSubmit(): void {
    if(this.detailForm?.valid){
      console.log('Form Submitted');
      console.log('Name', this.detailForm.value.name);
      console.log('Password', this.detailForm.value.password);
    }
  }
}
