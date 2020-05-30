import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomendedPage } from './recomended.page';

describe('RecomendedPage', () => {
  let component: RecomendedPage;
  let fixture: ComponentFixture<RecomendedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
