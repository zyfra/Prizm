// для замены storybook action (from '@storybook/addon-actions'), в случае если
// он кидает ошибку TypeError: ctx.selectionChange.emit is not a function
export function consoleLogAction(name: string): { emit: () => void } {
  return {
    emit: (): void => {
      if (name) {
        console.log('action: ' + name);
      }
    },
  };
}
