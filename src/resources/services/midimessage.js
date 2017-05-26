import { inject } from 'aurelia-framework';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';

import { ShortcutService } from './shortcut';

@inject(ShortcutService)
export class MidimessageService {
  constructor(shortcut) {
    this.shortcut = shortcut;
  }

  get midimessage() {
    return Observable.merge(
      this.shortcut.midimessage
    );
  }

  get noteon() {
    return this.midimessage.filter(message => message.status === 144);
  }

  get noteoff() {
    return this.midimessage.filter(message => message.status === 128);
  }
}
