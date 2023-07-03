import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailFormComponent } from './user-detail-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('UserDetailFormComponent', () => {
  let component: UserDetailFormComponent;
  let fixture: ComponentFixture<UserDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [UserDetailFormComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize fields with empty values', () => {
    expect(component.detailForm.get('name')?.value).toEqual('');
    expect(component.detailForm.get('password')?.value).toEqual('');
  });

  it('should set the name field as required', () => {
    const nameControl = component.detailForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalsy();
    nameControl?.setValue('Ujjwal');
    expect(nameControl?.valid).toBeTruthy();
  });
  it('should set the password field as required', () => {
    const passwordControl = component.detailForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.valid).toBeFalsy();
    passwordControl?.setValue('12345678');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should submit the form when valid', () => {
    spyOn(component,'onSubmit');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should not submit the form when invalid', () => {
    spyOn(component,'onSubmit');
    const nameControl = component.detailForm.get('name');
    nameControl?.setValue('');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });




});
