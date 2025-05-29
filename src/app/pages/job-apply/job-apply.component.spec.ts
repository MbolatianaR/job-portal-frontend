import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { JobApplyComponent } from './job-apply.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('JobApplyComponent', () => {
  let component: JobApplyComponent;
  let fixture: ComponentFixture<JobApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobApplyComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // simulate job id
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
