import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizmTabComponent } from './tab.component';
import { PrizmTabsService } from '../tabs.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';

describe('PrizmTabComponent', () => {
  let component: PrizmTabComponent;
  let fixture: ComponentFixture<PrizmTabComponent>;
  let tabsService: PrizmTabsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmTabComponent],
      providers: [PrizmTabsService, PrizmDestroyService], // Используем реальный сервис
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmTabComponent);
    component = fixture.componentInstance;
    tabsService = TestBed.inject(PrizmTabsService);
    fixture.detectChanges(); // Инициируем обнаружение изменений
  });

  it('should remove the selected tab and update activeTabIdx accordingly', () => {
    // Создаем и добавляем 3 таба в сервис
    const tab1 = TestBed.createComponent(PrizmTabComponent).componentInstance;
    const tab2 = TestBed.createComponent(PrizmTabComponent).componentInstance;
    const tab3 = TestBed.createComponent(PrizmTabComponent).componentInstance;

    tabsService.addTab(tab1, 0);
    tabsService.addTab(tab2, 1);
    tabsService.addTab(tab3, 2);

    // Выбираем последний таб
    tabsService.selectTab(tab3);

    // Проверяем, что последний таб теперь активный
    expect(tabsService.activeTabIdx).toBe(2); // Предполагая, что индексы начинаются с 0

    // Закрываем последний таб
    tab3.close();

    // Проверяем, что активный таб изменился после закрытия последнего таба
    expect(tabsService.activeTabIdx).not.toBe(2);
  });

  it('should remove the unselected tab and update activeTabIdx accordingly', () => {
    // Создаем и добавляем 3 таба в сервис
    const tab1 = TestBed.createComponent(PrizmTabComponent).componentInstance;
    const tab2 = TestBed.createComponent(PrizmTabComponent).componentInstance;
    const tab3 = TestBed.createComponent(PrizmTabComponent).componentInstance;

    tabsService.addTab(tab1, 0);
    tabsService.addTab(tab2, 1);
    tabsService.addTab(tab3, 2);

    // Выбираем последний таб
    tabsService.selectTab(tab2);

    // Проверяем, что последний таб теперь активный
    expect(tabsService.activeTabIdx).toBe(1); // Предполагая, что индексы начинаются с 0

    // Закрываем последний таб
    tab3.close();

    // Проверяем, что активный таб не изменился после закрытия последнего таба
    expect(tabsService.activeTabIdx).toBe(1);
  });
});
