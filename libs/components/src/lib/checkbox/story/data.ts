export interface DataFormControl {
  text: string;
  options: { value: string | number; label: string }[];
}

export const data: DataFormControl[] = [
  {
    text: 'Checkbox',
    options: [
      {
        value: 1,
        label: 'Value 1',
      },
      {
        value: 2,
        label: 'Value 2',
      },
      {
        value: 3,
        label: 'Value 3',
      },
      {
        value: 4,
        label: 'Value 4',
      },
    ],
  },
];
