import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { WorkoutService } from '../services/workout-service';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, CommonModule, RouterLinkWithHref]
})
export class WorkoutsPage {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService) {
    addIcons({ add });
  }

  async ionViewWillEnter() {
    this.workouts = await this.workoutService.getWorkouts();
  }
}