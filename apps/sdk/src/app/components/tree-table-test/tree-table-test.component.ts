import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-tree-table-test',
  templateUrl: './tree-table-test.component.html',
  styleUrls: ['./tree-table-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTableTestComponent {
  public title = 'Базовая таблица';
  public columns = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' },
  ];
  public stripedMode = true;
  public fileSystem = [
    {
      data: {
        name: 'Applications',
        size: '200mb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'Angular',
            size: '25mb',
            type: 'Folder',
          },
          children: [
            {
              data: {
                name: 'angular.app',
                size: '10mb',
                type: 'Application',
              },
            },
            {
              data: {
                name: 'cli.app',
                size: '10mb',
                type: 'Application',
              },
            },
            {
              data: {
                name: 'mobile.app',
                size: '5mb',
                type: 'Application',
              },
            },
          ],
        },
        {
          data: {
            name: 'editor.app',
            size: '25mb',
            type: 'Application',
          },
        },
        {
          data: {
            name: 'settings.app',
            size: '50mb',
            type: 'Application',
          },
        },
      ],
    },
    {
      data: {
        name: 'Cloud',
        size: '20mb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'backup-1.zip',
            size: '10mb',
            type: 'Zip',
          },
        },
        {
          data: {
            name: 'backup-2.zip',
            size: '10mb',
            type: 'Zip',
          },
        },
      ],
    },
    {
      data: {
        name: 'Desktop',
        size: '150kb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'note-meeting.txt',
            size: '50kb',
            type: 'Text',
          },
        },
        {
          data: {
            name: 'note-todo.txt',
            size: '100kb',
            type: 'Text',
          },
        },
      ],
    },
  ];
}
