import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrudentsComponent } from './strudents.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentService } from '../services/student.service';
import { of } from 'rxjs';


import { AppRoutingModule } from '../app-routing.module';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { UserDetailFormComponent } from '../forms/user-detail-form/user-detail-form.component';

describe('StrudentsComponent', () => {
  let component: StrudentsComponent;
  let fixture: ComponentFixture<StrudentsComponent>;
  let service : StudentService;
  let userAge : HTMLElement;
  let upperCase : UpperCasePipe
  let lowerCase : LowerCasePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrudentsComponent, UserDetailFormComponent],
      imports:[ AppRoutingModule,HttpClientTestingModule],
      providers:[StudentService]
    }).compileComponents();
    fixture = TestBed.createComponent(StrudentsComponent);
    component = fixture.componentInstance;
    userAge = fixture.nativeElement.querySelector('p');
    upperCase = new UpperCasePipe();
    lowerCase = new LowerCasePipe();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //SpyOm is used to mocking a special function
  it('SpyOn method', ()=>{
    spyOn(component,'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();

  });

  it('SpyOn -1 ', () =>{
    spyOn(component,'calculate').and.returnValues(10,20);
    let result = component.StudentResult();
    expect(result).toBe("Fail");

  });

  it('should verify the  age in view', () => {
    component.saveData();
    fixture.detectChanges();
    expect(userAge.textContent).toBe(component.age);
  })

  it('should test private methods', () => {
    expect(component["name"]).toBe("ujjwal");
  })

  it('should verify uppercase pipe result ', () => {
    expect(upperCase.transform(component.title)).toEqual('THIS IS COMPONENT TITLE');
  })

  it('should verify lowercase pipe result ', () => {
    expect(lowerCase.transform(component.title)).toEqual('this is component title');
  })
  

 
});
