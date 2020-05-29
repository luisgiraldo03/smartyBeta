import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapRecomendedPage } from './map-recomended.page';

describe('MapRecomendedPage', () => {
  let component: MapRecomendedPage;
  let fixture: ComponentFixture<MapRecomendedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRecomendedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapRecomendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
