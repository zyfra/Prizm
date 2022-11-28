import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconDefs } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PrizmIconsRegistryService, PrizmIconsType } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly iconVariants = IconDefs.reduce((a, c) => a.concat(c.data), []);
  public icon = this.iconVariants[0];

  readonly iconSizes = [24, 16];
  public iconSize = 24;

  private readonly iconsSetObject = PrizmIconsType
  private readonly iconsSet = Object.values(this.iconsSetObject);
  public editorDecoratorIcons = this.iconsSet.filter(
    i => i.startsWith('editor-decor')
  );
  public chartsDiagramsIcons = this.iconsSet.filter(
    i => i.startsWith('charts-diagrams')
  );
  public dataNetworkIcons = this.iconsSet.filter(
    i => i.startsWith('data-network')
  );
  public dataTimeIcons = this.iconsSet.filter(
    i => i.startsWith('date-time')
  );
  public documentsFoldersIcons = this.iconsSet.filter(
    i => i.startsWith('documents-folders')
  );
  public logisticsTransportationIcons = this.iconsSet.filter(
    i => i.startsWith('logistics-transportation')
  );
  public MapLocationIcons = this.iconsSet.filter(
    i => i.startsWith('map-location')
  );
  public multimediaDevicesIcons = this.iconsSet.filter(
    i => i.startsWith('multimedia-devices')
  );
  public notificationsAlertsIcons = this.iconsSet.filter(
    i => i.startsWith('notifications-alerts')
  );
  public otherIcons = this.iconsSet.filter(
    i => i.startsWith('other')
  );
  public powerEnergyIcons = this.iconsSet.filter(
    i => i.startsWith('power-energy')
  );
  public productionIndustryIcons = this.iconsSet.filter(
    i => i.startsWith('production-industry')
  );
  public settingsToolsIcons = this.iconsSet.filter(
    i => i.startsWith('settings-tools')
  );
  public shapeGeometryIcons = this.iconsSet.filter(
    i => i.startsWith('shape-geometry')
  );
  public userAccountIcons = this.iconsSet.filter(
    i => i.startsWith('user-account')
  );


  public defs = [
    {
      dir: 'Editor Decorator',
      data: [...this.editorDecoratorIcons]
    },
    {
      dir: 'Charts Diagrams',
      data: [...this.chartsDiagramsIcons]
    },
    {
      dir: 'Data Network',
      data: [...this.dataNetworkIcons]
    },
    {
      dir: 'Date Time',
      data: [...this.dataTimeIcons]
    },
    {
      dir: 'Documents Folders',
      data: [...this.documentsFoldersIcons]
    },
    {
      dir: 'Logistics Transportation',
      data: [...this.logisticsTransportationIcons]
    },
    {
      dir: 'Map Location',
      data: [...this.MapLocationIcons]
    },
    {
      dir: 'Map Location',
      data: [...this.MapLocationIcons]
    },
    {
      dir: 'Multimedia Devices',
      data: [...this.multimediaDevicesIcons]
    },
    {
      dir: 'Notifications Alerts',
      data: [...this.notificationsAlertsIcons]
    },
    {
      dir: 'Other',
      data: [...this.otherIcons]
    },
    {
      dir: 'Power Energy',
      data: [...this.powerEnergyIcons]
    },
    {
      dir: 'Production Industry',
      data: [...this.productionIndustryIcons]
    },
    {
      dir: 'Settings Tools',
      data: [...this.settingsToolsIcons]
    },
    {
      dir: 'Shape Geometry',
      data: [...this.shapeGeometryIcons]
    },
    {
      dir: 'User Account',
      data: [...this.userAccountIcons]
    }
  ];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/icon-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/icon-base-example.component.html'),
  };

  constructor(
    private prizmIconsRegistryService: PrizmIconsRegistryService,
  ) {
  }


  ngOnInit() {
    console.log('#mz icon iconsSet', {
      iconsSet: this.iconsSet
    });
    this.prizmIconsRegistryService.registerIcons([
      // 'user_worker',
      // 'user',
      // 'users',
      // 'users_arrow_right',
      // 'users_gear',
      // 'users_key',
      // 'users_location',
      // 'users_minus',
      // 'users_plus',
      // 'users'
      // prizmIconSvgUser
    ])

  }
}
