import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCreateComponent } from './catalogue-create.component';

describe('CatalogueCreateComponent', () => {
  let component: CatalogueCreateComponent;
  let fixture: ComponentFixture<CatalogueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogueCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
