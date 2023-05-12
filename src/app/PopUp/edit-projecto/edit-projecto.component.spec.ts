import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectoComponent } from './edit-projecto.component';

describe('EditProjectoComponent', () => {
  let component: EditProjectoComponent;
  let fixture: ComponentFixture<EditProjectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
