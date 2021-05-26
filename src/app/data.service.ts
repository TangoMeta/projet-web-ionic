import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Categorie, Plat} from './rest.service';

@Injectable()
export class DataService {

  private platsSource = new BehaviorSubject<Plat[]>(null);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  currentPlats = this.platsSource.asObservable();

  constructor() {
  }

  searchPlats(plats: Plat[]): void {
    this.platsSource.next(plats);
  }
}
