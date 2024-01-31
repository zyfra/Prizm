import { Injectable } from '@angular/core';
import { PrizmIconsRegistry } from './prizm-icons.registry';

/**
 * Service for registering and retrieving 16px size icons. It extends the PrizmIconsRegistry class.
 * Currently, it does not add any new functionality or properties. It can be used to segregate 16px icons
 * if such a distinction is necessary in the application.
 */
@Injectable({
  providedIn: 'root',
})
export class PrizmIcons16Registry extends PrizmIconsRegistry {
  // Since there is no new functionality, no additional code is required.
  // If specific behavior for 16px icons is needed in the future, it can be implemented here.
}
