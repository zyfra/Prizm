import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';
import { PRIZM_ICONS_SVG_SET, PrizmIconSvgEnum, PrizmIconsSvgRegistry, PrizmIconType } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  readonly nameVariants = Object.values(PrizmIconSvgEnum);
  public name = this.nameVariants[0];

  readonly sizeVariants = ['32px', 24, 16];
  public size = this.sizeVariants[0];

  // private readonly iconsSetObject = Object.values(PrizmIconType)
  private readonly iconsSetObject = Object.values(PrizmIconSvgEnum);
  private readonly iconsSet = Object.values(this.iconsSetObject);
  public editorDecoratorIcons = this.iconsSet.filter(i => i.startsWith('editor_decor'));
  public chartsDiagramsIcons = this.iconsSet.filter(i => i.startsWith('charts_diagrams'));
  public dataNetworkIcons = this.iconsSet.filter(i => i.startsWith('data_network'));
  public dataTimeIcons = this.iconsSet.filter(i => i.startsWith('date_time'));
  public documentsFoldersIcons = this.iconsSet.filter(i => i.startsWith('documents_folders'));
  public logisticsTransportationIcons = this.iconsSet.filter(i => i.startsWith('logistics_transportation'));
  public MapLocationIcons = this.iconsSet.filter(i => i.startsWith('map_location'));
  public multimediaDevicesIcons = this.iconsSet.filter(i => i.startsWith('multimedia_devices'));
  public notificationsAlertsIcons = this.iconsSet.filter(i => i.startsWith('notifications_alerts'));
  public otherIcons = this.iconsSet.filter(i => i.startsWith('other'));
  public powerEnergyIcons = this.iconsSet.filter(i => i.startsWith('power_energy'));
  public productionIndustryIcons = this.iconsSet.filter(i => i.startsWith('production_industry'));
  public settingsToolsIcons = this.iconsSet.filter(i => i.startsWith('settings_tools'));
  public shapeGeometryIcons = this.iconsSet.filter(i => i.startsWith('shape_geometry'));
  public userAccountIcons = this.iconsSet.filter(i => i.startsWith('user_account'));

  public defs = [
    {
      dir: 'Editor Decorator',
      data: [...this.editorDecoratorIcons],
    },
    {
      dir: 'Charts Diagrams',
      data: [...this.chartsDiagramsIcons],
    },
    {
      dir: 'Data Network',
      data: [...this.dataNetworkIcons],
    },
    {
      dir: 'Date Time',
      data: [...this.dataTimeIcons],
    },
    {
      dir: 'Documents Folders',
      data: [...this.documentsFoldersIcons],
    },
    {
      dir: 'Logistics Transportation',
      data: [...this.logisticsTransportationIcons],
    },
    {
      dir: 'Map Location',
      data: [...this.MapLocationIcons],
    },
    {
      dir: 'Map Location',
      data: [...this.MapLocationIcons],
    },
    {
      dir: 'Multimedia Devices',
      data: [...this.multimediaDevicesIcons],
    },
    {
      dir: 'Notifications Alerts',
      data: [...this.notificationsAlertsIcons],
    },
    {
      dir: 'Other',
      data: [...this.otherIcons],
    },
    {
      dir: 'Power Energy',
      data: [...this.powerEnergyIcons],
    },
    {
      dir: 'Production Industry',
      data: [...this.productionIndustryIcons],
    },
    {
      dir: 'Settings Tools',
      data: [...this.settingsToolsIcons],
    },
    {
      dir: 'Shape Geometry',
      data: [...this.shapeGeometryIcons],
    },
    {
      dir: 'User Account',
      data: [...this.userAccountIcons],
    },
  ];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleFont: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/icon-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/icon-base-example.component.html'),
  };
  readonly exampleSvg: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/svg/icon-svg-example.component.ts'),
    HTML: import('!!raw-loader!./examples/svg/icon-svg-example.component.html'),
  };

  constructor(private readonly iconRegistry: PrizmIconsSvgRegistry) {}

  ngOnInit(): void {
    this.iconRegistry.registerIcons([...PRIZM_ICONS_SVG_SET]);
  }
}
