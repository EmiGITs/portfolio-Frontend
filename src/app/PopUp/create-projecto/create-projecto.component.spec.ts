import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectoComponent } from './create-projecto.component';

describe('CreateProjectoComponent', () => {
  let component: CreateProjectoComponent;
  let fixture: ComponentFixture<CreateProjectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
