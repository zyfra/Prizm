import { Injectable } from '@angular/core';
import { PrizmMap } from '../../util/map/map';

@Injectable({
  providedIn: 'root',
})
export class PrizmContextService {
  private readonly map = new PrizmMap<any, any>();

  public add(key: string, item: string) {
    this.map.set(key, item);
  }

  public delete(key: string) {
    this.map.delete(key);
  }

  public get(key: string) {
    return this.map.get(key);
  }
}
