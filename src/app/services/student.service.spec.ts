import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[StudentService]
    });
    service = TestBed.inject(StudentService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve the user details from the API', () => {
    const mockResponse = [
      {"name":"Ujjwal","age":"20"}

    ];
     service.getUserDetails().subscribe(res => {
      expect(res).toEqual(mockResponse);
     });

     const req = httpTestingController.expectOne('https://mocki.io/v1/65781668-602e-41a9-ac6a-ccbcb60964d4');
     expect(req.request.method).toBe('GET');
     expect(req.cancelled).toBeFalsy();
     expect(req.request.responseType).toEqual('json');
     req.flush(mockResponse);    
  })
});
