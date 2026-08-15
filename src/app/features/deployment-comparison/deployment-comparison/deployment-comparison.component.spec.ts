import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentComparisonComponent } from './deployment-comparison.component';

describe('DeploymentComparisonComponent', () => {
  let component: DeploymentComparisonComponent;
  let fixture: ComponentFixture<DeploymentComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
