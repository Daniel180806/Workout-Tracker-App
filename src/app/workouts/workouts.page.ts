import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon} from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, CommonModule, FormsModule, RouterLinkWithHref]
})
export class WorkoutsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
