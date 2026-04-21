import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private storage: Storage) {
    addIcons({ add });
    addIcons({ trash });
  }

  async ngOnInit() {
    await this.storage.create();
  }
}
