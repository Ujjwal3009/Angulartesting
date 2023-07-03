import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component :  AppComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  },
 ), );

 //Arrange 
 beforeEach(() => {
  component = new AppComponent()
 })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  });

  it('should  return welcome message',() =>{
    expect(component.showMessage('Hello World')).toBe('Hello World');
  })

  // How to exclude one test case
  xit('this is pending test case', () =>{
    expect(component.showMessage('Hello World')).toBe('Hello everyone');
  })

  // ===================== Jasmine Matchers ====================

  // Built in Matchers 
  it('Should return addition result of two numbers ', () =>{
    expect(component.additionofTwoNumber(5,13)).toBe(18);
  });

  it('testing equality of two variables' , ()=>{
    let a = "Hello";
    let b = "Hello";
    expect(a).toBe(b);
  });

  it('testing equality by toEqual for non primitive type', () =>{
    let a = ["Hello"];
    let b = ["Hello"];

    expect(a).toEqual(b);

  });

  it('should test the toBeTrue matcher', () =>{
    let b = true;
    expect(b).toBeTrue();

  });

  it('should increase the value ', () =>{
    //Act 
    component.increaseCount();
    expect(component.count).toBe(2); // assert toBE
  });

  
  it('should decrease the value ', () =>{
    component.decreaseCount();
    expect(component.count).toBe(0);
  });

  // Arrangfe Act Assert ////
  /***
   * Arrange => setup the test case
   * Act => Act on the target behaviour
   * Assert => 
   */








});
